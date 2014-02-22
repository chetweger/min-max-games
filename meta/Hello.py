import pyjd # this is dummy in pyjs.
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.Button import Button
from pyjamas.ui.HTML import HTML
from pyjamas.ui.Label import Label
from pyjamas import Window

from pyjamas.Timer import Timer

#import pygw

def wut(arg="hi"):
    b = Window.alert("AAAAAAAAAAAAAAAA" )
    b = Window.alert(arg)

def greet(fred):
    fred.setText("No, really click me!")
    a = Window.alert("Hello, AJAX!")
    print dir(Timer)
    a = Timer(1500, notify=wut)
    print dir(a)
    a.run()

if __name__ == '__main__':
    pyjd.setup("public/Hello.html?fred=foo#me")
    b = Button("Click me", greet, StyleName='teststyle')
    h = HTML("<b>Hello World</b> (html)", StyleName='teststyle')
    l = Label("Hello World (label)", StyleName='teststyle')
    base = HTML("Hello from ")
    RootPanel().add(b)
    RootPanel().add(h)
    RootPanel().add(l)
    RootPanel().add(base)
    pyjd.run()
