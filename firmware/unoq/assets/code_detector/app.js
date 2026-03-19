const socket = io(`http://${window.location.host}`); // Initialize socket.io connection

let currentImageBitmap = null;
const canvasElement = document.getElementById('videoCanvas');
const ctx = canvasElement.getContext('2d');

function initSocketIO() {
    socket.on('connect', () => {
        console.log('connect');
    });

    socket.on('disconnect', (reason) => {
        console.log('disconnect');
    });

    socket.on('on_frame', async (message) => {
        try {
            const imageBytes = base64ToUint8Array(message.image);
            const blob = new Blob([imageBytes], { type: message.image_type });
            if (currentImageBitmap) {
                currentImageBitmap.close();
            }
            currentImageBitmap = await createImageBitmap(blob);
            ctx.drawImage(currentImageBitmap, 0, 0);
        }
        catch (error) {
          console.error('error on frame: ', error);
        }
    });

}

document.addEventListener('DOMContentLoaded', () => {
    const u = new URL(document.location.href);
    const x = u.searchParams.get('x');
    const y = u.searchParams.get('y');
    canvasElement.setAttribute('width', x)
    canvasElement.setAttribute('height', y);
    initSocketIO();
});

function base64ToUint8Array(base64) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}
