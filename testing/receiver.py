import asyncio
import websockets

# WebSocket server parameters
HOST = '0.0.0.0'
PORT = 81

# WebSocket server handler
async def echo(websocket, path):
    async for message in websocket:
        print(f"Received: {message}")
        # Echo the message back (optional)
        if message == "ping":
            await websocket.send("pong")
        await websocket.send(message)

async def start_server():
    # Start WebSocket server
    async with websockets.serve(echo, HOST, PORT):
        print(f"WebSocket server running at ws://{HOST}:{PORT}")
        await asyncio.Future()  # Run forever

# Run the WebSocket server
if __name__ == "__main__":
    try:
        asyncio.run(start_server())
    except KeyboardInterrupt:
        print("Server stopped")
