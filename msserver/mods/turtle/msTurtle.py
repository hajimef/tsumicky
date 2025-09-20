import turtle
import msGlobal as g

group = 'ms'
subgroup = 'tur'

cv = None
wnd = None

async def dispose(p):
    try:
        if wnd is not None:
            wnd.withdraw()
    except Exception as e:
        return g.errReturn(e)

async def init(p):
    global cv, wnd
    try:
        width = p.get('w', 600)
        height = p.get('h', 600)
        startx = p.get('sx', 0)
        starty = p.get('sy', 0)
        turtle.setup(width, height, startx, starty)
        if cv is None:
            cv = turtle.getcanvas()
            wnd = cv.winfo_toplevel()
        else:
            wnd.deiconify()
        turtle.reset()
    except Exception as e:
        return g.errReturn(e)

async def color(p):
    try:
        c = p.get('c', 'black')
        fc = p.get('fc', 'black')
        turtle.color(c, fc)
    except Exception as e:
        return g.errReturn(e)

async def penDown(p):
    try:
        turtle.pendown()
    except Exception as e:
        return g.errReturn(e)

async def penUp(p):
    try:
        turtle.penup()
    except Exception as e:
        return g.errReturn(e)

async def penSize(p):
    try:
        width = p.get('w', 1)
        turtle.pensize(width)
    except Exception as e:
        return g.errReturn(e)

async def forward(p):
    try:
        distance = p.get('d', 0)
        turtle.forward(distance)
    except Exception as e:
        return g.errReturn(e)

async def backward(p):
    try:
        distance = p.get('d', 0)
        turtle.backward(distance)
    except Exception as e:
        return g.errReturn(e)

async def right(p):
    try:
        angle = p.get('a', 0)
        turtle.right(angle)
    except Exception as e:
        return g.errReturn(e)

async def left(p):
    try:
        angle = p.get('a', 0)
        turtle.left(angle)
    except Exception as e:
        return g.errReturn(e)

async def goTo(p):
    try:
        x = p.get('x', 0)
        y = p.get('y', 0)
        turtle.goto(x, y)
    except Exception as e:
        return g.errReturn(e)

async def circle(p):
    try:
        radius = p.get('r', 0)
        angle = p.get('a', None)
        if angle is None:
            turtle.circle(radius)
        else:
            turtle.circle(radius, angle)
    except Exception as e:
        return g.errReturn(e)

async def speed(p):
    try:
        s = p.get('s', 3)
        turtle.speed(s)
    except Exception as e:
        return g.errReturn(e)

async def beginFill(p):
    try:
        turtle.begin_fill()
    except Exception as e:
        return g.errReturn(e)

async def endFill(p):
    try:
        turtle.end_fill()
    except Exception as e:
        return g.errReturn(e)

async def mainLoop(p):
    try:
#        turtle.done()
        turtle.done() 
    except Exception as e:
        return g.errReturn(e)

async def setHeading(p):
    try:
        angle = p.get('a', 0)
        turtle.setheading(angle)
    except Exception as e:
        return g.errReturn(e)

async def dot(p):
    try:
        size = p.get('s', None)
        color = p.get('c', None)
        if size is None:
            turtle.dot()
        elif color is None:
            turtle.dot(size)
        else:
            turtle.dot(size, color)
    except Exception as e:
        return g.errReturn(e)

async def reset(p):
    try:
        turtle.reset()
    except Exception as e:
        return g.errReturn(e)

async def showHide(p):
    try:
        visible = p.get('v', 'show')
        if visible == 'show':
            turtle.showturtle()
        else:
            turtle.hideturtle()
    except Exception as e:
        return g.errReturn(e)

async def getX(p):
    try:
        return turtle.xcor()
    except Exception as e:
        return g.errReturn(e)

async def getY(p):
    try:
        return turtle.ycor()
    except Exception as e:
        return g.errReturn(e)

async def getHeading(p):
    try:
        return turtle.heading()
    except Exception as e:
        return g.errReturn(e)

async def isDown(p):
    try:
        return turtle.isdown()
    except Exception as e:
        return g.errReturn(e)

async def stamp(p):
    try:
        turtle.stamp()
    except Exception as e:
        return g.errReturn(e)

async def shape(p):
    try:
        s = p.get('s', 'classic')
        turtle.shape(s)
    except Exception as e:
        return g.errReturn(e)

async def write(p):
    try:
        t = p.get('t', '')
        m = p.get('m', False)
        a = p.get('a', 'left')
        f = p.get('f', 'Arial')
        z = p.get('z', 8)
        s = p.get('s', 'normal')
        turtle.write(t, move=m, align=a, font=(f, z, s))
    except Exception as e:
        return g.errReturn(e)

async def update(p):
    global cv, wnd
    try:
        if cv is not None:
            turtle.update()
    except Exception as e:
        if type(e).__name__ == 'Terminator':
            wnd = None
            cv = None
        else:
            return g.errReturn(e)


def addCallbacks():
    g.addCallback(group, subgroup, 'd', dispose)
    g.addCallback(group, subgroup, 'i', init)
    g.addCallback(group, subgroup, 'c', color)
    g.addCallback(group, subgroup, 'pd', penDown)
    g.addCallback(group, subgroup, 'pu', penUp)
    g.addCallback(group, subgroup, 'ps', penSize)
    g.addCallback(group, subgroup, 'f', forward)
    g.addCallback(group, subgroup, 'b', backward)
    g.addCallback(group, subgroup, 'r', right)
    g.addCallback(group, subgroup, 'l', left)
    g.addCallback(group, subgroup, 'g', goTo)
    g.addCallback(group, subgroup, 'ci', circle)
    g.addCallback(group, subgroup, 's', speed)
    g.addCallback(group, subgroup, 'bf', beginFill)
    g.addCallback(group, subgroup, 'ef', endFill)
    g.addCallback(group, subgroup, 'ml', mainLoop)
    g.addCallback(group, subgroup, 'sh', setHeading)
    g.addCallback(group, subgroup, 'dt', dot)
    g.addCallback(group, subgroup, 'rs', reset)
    g.addCallback(group, subgroup, 'sv', showHide)
    g.addCallback(group, subgroup, 'gx', getX)
    g.addCallback(group, subgroup, 'gy', getY)
    g.addCallback(group, subgroup, 'gh', getHeading)
    g.addCallback(group, subgroup, 'id', isDown)
    g.addCallback(group, subgroup, 'st', stamp)
    g.addCallback(group, subgroup, 'sa', shape)
    g.addCallback(group, subgroup, 'w', write)
    g.addCallback(group, subgroup, 'u', update)