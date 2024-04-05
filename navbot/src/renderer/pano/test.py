import threading
import http.server
import socketserver

PORT = 8000

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="", **kwargs)

# Function to start the HTTP server
def start_server():
    with socketserver.TCPServer(("", PORT), MyHttpRequestHandler) as httpd:
        print("HTTP server serving at port", PORT)
        httpd.serve_forever()



server_thread = threading.Thread(target=start_server)
server_thread.start()

