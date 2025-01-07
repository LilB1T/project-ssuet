from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
# Hardcoded user credentials
USER_CREDENTIALS = {
    "email": "abdullahbinjalal@outlook.com",
    "password": "password123",
     "email": "muneeb@gmail.com",
    "password": "password123",
     "email": "muneeb@gmail.com",
    "password": "password123",
     "email": "sudais@gmail.com",
    "password": "password123",
}

# Route for the login functionality
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    email = data.get('email')
    password = data.get('password')

    # Check if the email and password match the hardcoded credentials
    if email == USER_CREDENTIALS['email'] and password == USER_CREDENTIALS['password']:
        return jsonify({"success": True, "message": "Login successful!"})
    else:
        return jsonify({"success": False, "message": "Invalid credentials. Please try again."})

# Route for the home page
@app.route('/home', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to the Home Page!"})

if __name__ == '__main__':
    app.run(debug=True , port=8080)
