'''I discovered this bug in pyjs while trying to translate learning.py into javascript.  Although ttt.py was translated perfectly, learning.py was not translated perfectly due to the bug illustrated below.
When pyjs translates this file into javascript, and then the file is opened, a value other than what is expected will be printed in the web browser console. What is printed in the console will differ from what is printed in the python terminal.
'''

class Util:
  def __init__(self, value):
    self.value = value
  def __ge__(self, other):
    return self.value >= other.value
  def __le__(self, other):
    return self.value <= other.value
  def __gt__(self, other):
    return self.value > other.value
  def __lt__(self, other):
    return self.value < other.value



l = [Util(3), Util(1), Util(9), Util(-1)]
ll = [3, 1, 9, -1]
lll = [(3, ''), (1, ''), (9, ''), (-1, '')]

print "Should be 9 ", max(l).value
print "Should be 9 ", max(ll)
print "Should be (9, '') ", max(lll)
