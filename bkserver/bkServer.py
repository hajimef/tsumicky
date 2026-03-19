import http.server
import socketserver
import json
from urllib.parse import urlparse, parse_qs
import sys
from PyQt6.QtWidgets import QApplication, QFileDialog

# QApplicationインスタンスはGUI操作の前に一つだけ作成する必要があります。
# サーバー起動時に一度だけ作成し、リクエストごとに再利用します。
app = QApplication.instance()
if app is None:
    app = QApplication(sys.argv)

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed_path = urlparse(self.path)
        query = parse_qs(parsed_path.query)

        # 各APIエンドポイントの共通処理をまとめる
        endpoints = {
            "/backsys/getopenfilename": self.handle_get_open_filename,
            "/backsys/getopenfilenames": self.handle_get_open_filenames,
            "/backsys/getsavefilename": self.handle_get_save_filename,
            "/backsys/getdirectoryname": self.handle_get_directory_name,
            "/backsys/loadfile": self.handle_load_file,
        }

        handler_func = endpoints.get(parsed_path.path)
        if handler_func:
            handler_func(query)
        else:
            # APIエンドポイント以外は通常のファイルサーバーとして動作
            super().do_GET()

    def do_POST(self):
        parsed_path = urlparse(self.path)
        query = parse_qs(parsed_path.query)

        if parsed_path.path == "/backsys/savefile":
            self.handle_save_file(query)
        else:
            self.send_error(404, "File Not Found")

    def _send_json_response(self, data, status_code=200):
        """JSONレスポンスを送信するヘルパー関数"""
        self.send_response(status_code)
        self.send_header("Content-type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*") # CORS許可
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode("utf-8"))

    def handle_get_open_filename(self, query):
        cap = query.get("cap", [""])[0]
        dir = query.get("dir", ["."])[0]
        filter = query.get("filter", ["All Files (*)"])[0]
        
        filename, _ = QFileDialog.getOpenFileName(None, cap, dir, filter)
        
        response_data = {"filename": filename}
        self._send_json_response(response_data)

    def handle_get_open_filenames(self, query):
        cap = query.get("cap", [""])[0]
        dir = query.get("dir", ["."])[0]
        filter = query.get("filter", ["All Files (*)"])[0]
        
        filenames, _ = QFileDialog.getOpenFileNames(None, cap, dir, filter)
        
        response_data = {"filename": filenames}
        self._send_json_response(response_data)

    def handle_get_save_filename(self, query):
        cap = query.get("cap", [""])[0]
        dir = query.get("dir", ["."])[0]
        filter = query.get("filter", ["All Files (*)"])[0]
        
        filename, _ = QFileDialog.getSaveFileName(None, cap, dir, filter)
        
        response_data = {"filename": filename}
        self._send_json_response(response_data)

    def handle_get_directory_name(self, query):
        cap = query.get("cap", [""])[0]
        dir = query.get("dir", ["."])[0]
        
        dirname = QFileDialog.getExistingDirectory(None, cap, dir)
        
        response_data = {"dirname": dirname}
        self._send_json_response(response_data)

    def handle_load_file(self, query):
        filename = query.get("filename", [None])[0]
        if not filename:
            self._send_json_response({"error": "filename is required"}, status_code=400)
            return
        try:
            with open(filename, "r", encoding="utf-8") as f:
                content = f.read()
            self._send_json_response({"text": content})
        except FileNotFoundError:
            self._send_json_response({"error": "File not found"}, status_code=404)
        except Exception as e:
            self._send_json_response({"error": str(e)}, status_code=500)

    def handle_save_file(self, query):
        filename = query.get("filename", [None])[0]
        if not filename:
            self._send_json_response({"error": "filename is required"}, status_code=400)
            return

        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        try:
            data = json.loads(post_data)
            text_content = data.get("text", "")
            with open(filename, "w", encoding="utf-8") as f:
                f.write(text_content)
            self._send_json_response({"status": "success"})
        except json.JSONDecodeError:
            self._send_json_response({"error": "Invalid JSON"}, status_code=400)
        except Exception as e:
            self._send_json_response({"error": str(e)}, status_code=500)


PORT = 8000

Handler = MyHttpRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down the server.")
        httpd.shutdown()
        sys.exit(0)
