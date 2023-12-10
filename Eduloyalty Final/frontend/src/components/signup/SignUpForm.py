from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:Rb7sebvettel1#@127.0.0.1:3306/sys'

db = SQLAlchemy(app)

class Signup(db.Model):
    
    userid = db.Column(db.Integer, primary_key=True, autoincrement = True)
    username = db.Column(db.String(100), nullable=False)
    lastname = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    

@app.route('/')
def signup():
    return render_template('signup.js')

@app.route('/validate', methods=['POST'])
def validate():
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
        if not username.isalpha() or not lastname.isalpha():
            return jsonify({'error_message': "Name fields must contain only alphabets.", 'name': username}), 400

        if not password.isalnum():
            return jsonify({'error_message': "Password field must contain only alphabets and numbers.", 'name': username}), 400

        # Additional validation for email (you can customize this as needed)
        if '@' not in email or '.' not in email:
            return jsonify({'error_message': "Please enter a valid email address.", 'name': username}), 400
        
        new_signup = Signup(username = username, password = password, lastname = lastname, email = email)
        db.session.add(new_signup)
        db.session.commit()        
        
        # Your further validation logic for email, e.g., checking if it's unique in your system

        return jsonify({'message': "Signup successful!"})

    except Exception as e:
        print(str(e))
        return jsonify({'error_message': "An error occurred. Please try again later.", 'name': ''}), 500

if __name__ == '__main__':
    app.run(debug=True)
