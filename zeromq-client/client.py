import sys
import zmq

port = "5555"
if len(sys.argv) > 1:
    port =  sys.argv[1]
    int(port)
    
if len(sys.argv) > 2:
    port1 =  sys.argv[2]
    int(port1)

# Socket to talk to server
context = zmq.Context()
socket = context.socket(zmq.SUB)

print("Collecting updates from server...")
socket.connect ("tcp://localhost:%s" % port)

if len(sys.argv) > 2:
    socket.connect ("tcp://localhost:%s" % port1)
# Subscribe to zipcode, default is NYC, 10001
topicfilter = "".encode('utf-8')
socket.setsockopt(zmq.SUBSCRIBE, topicfilter)

with open("./zeromq-client/recv.log", "a") as f:
    while True:
        recvStr = socket.recv().decode('utf-8')
        # print(topicfilter.decode('utf-8'), recvStr)
        f.write(topicfilter.decode('utf-8') + recvStr + "\n")
        f.flush()

