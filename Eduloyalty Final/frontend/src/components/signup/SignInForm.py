#####################################
# Use this for both SignIn and SignUp
######################################
# 
# 
# # from flask import Flask, render_template, request, jsonify, redirect, url_for
# from flask_cors import CORS
# from flask_sqlalchemy import SQLAlchemy
# from flask import Flask, send_file

# app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:Rb7sebvettel1#@127.0.0.1:3306/sys'
# db = SQLAlchemy(app)

# class Signup(db.Model):
#     userid = db.Column(db.Integer, primary_key=True)S
#     username = db.Column(db.String(100), nullable=False)
#     password = db.Column(db.String(100), nullable=False)

# @app.route('/')
# def signin():
#     return render_template('SignInForm.js')

# @app.route('/signInValidate', methods=['POST'])
# def signin_user():
#     data = request.get_json()
#     username = data.get('name')
#     password = data.get('password')

#     user = Signup.query.filter_by(username=username, password=password).first()

#     if user:
#         return redirect(url_for('dashboard'))  # You might also return user details/token here
#     else:
#         return jsonify({'error_message': 'Invalid name or password.'}), 401

# @app.route('/dashboard')
# def dashboard():
#     return send_file('dashboard.js', mimetype='text/javascript')

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, render_template, request, jsonify, redirect, url_for, send_file
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime



app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Configure database
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:Winacs%40560$$@127.0.0.1:3306/sys'
db = SQLAlchemy(app)

# Define Signup model
class Signup(db.Model):
    userid = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(100), nullable=False)
    lastname = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)

class sessiondetail(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(100), nullable=False)
    sessionid = db.Column(db.String(255), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.now, nullable=False)
    points = db.Column(db.Integer, default=1, nullable=False,autoincrement=True)

# Signup route
@app.route('/validate', methods=['POST'])
def signup():
    try:
        data = request.get_json()

        username = data['username']
        lastname = data['lastname']
        password = data['password']
        email = data['email']

        # AC0: System must validate the strength of the password
        if len(password) < 8 or not any(char.isdigit() for char in password) or not any(char.isalpha() for char in password):
            return jsonify({'error_message': "Password must be at least 8 characters long and contain both letters and numbers.", 'name': username}), 400

        # AC2: System must allow only alphabets to be entered in the name field and alphanumeric in the password field
        # if not username.isalpha() or not lastname.isalpha():
        #     return jsonify({'error_message': "Name fields must contain only alphabets.", 'name': username}), 400

        if not password.isalnum():
            return jsonify({'error_message': "Password field must contain only alphabets and numbers.", 'name': username}), 400

        # Additional validation for email (you can customize this as needed)
        if '@' not in email or '.' not in email:
            return jsonify({'error_message': "Please enter a valid email address.", 'name': username}), 400
        
        new_signup = Signup(username=username, password=password, lastname=lastname, email=email)
        db.session.add(new_signup)
        db.session.commit()

        # Your further validation logic for email, e.g., checking if it's unique in your system

        return jsonify({'message': "Signup successful!"})

    except Exception as e:
        print(str(e))
        return jsonify({'error_message': "An error occurred. Please try again later.", 'name': ''}), 500

# Signin route
@app.route('/signInValidate', methods=['POST'])
def signin_user():
    try:
        data = request.get_json()
        username = data.get('name')
        password = data.get('password')

        user = Signup.query.filter_by(username=username, password=password).first()
        points= sessiondetail.query.filter_by(username=username).order_by(sessiondetail.timestamp.desc()).first().points


        if user:
            print(points)
            return redirect(url_for('dashboard')) 
        else:
            return jsonify({'error_message': 'Invalid name or password.'}), 401

    except Exception as e:
        print(str(e))
        return jsonify({'error_message': "An error occurred. Please try again later."}), 500

# Dashboard route
@app.route('/dashboard')
def dashboard():
    return send_file('dashboard.js', mimetype='text/javascript')

# Render SignUpForm.js
@app.route('/signup')
def signup_form():
    return render_template('SignUpForm.js')

# Render SignInForm.js
@app.route('/')
def signin_form():
    return render_template('SignInForm.js')

@app.route('/getPoints', methods=['GET'])
def get_points():
    # Logic to retrieve points from the database or any other source
    username = request.args.get('username')
    points= sessiondetail.query.filter_by(username=username).first().points
    return jsonify({'points': points})


if __name__ == '__main__':
    app.run(debug=True)

