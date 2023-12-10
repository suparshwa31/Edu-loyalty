# loginvalidate.py

from flask import Flask, request, jsonify, session, send_file
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime  # Import the datetime module
from sqlalchemy import distinct
from flask import redirect, url_for
from sqlalchemy import func
from flask import request

import uuid  # Add this import statement


app = Flask(__name__)
app.secret_key = '123pari'
#CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
#CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}, "methods": ["GET", "POST", "PUT"]})

CORS(app, resources={
    r"/*": {"origins": "http://localhost:4000"},
    "/calculate_points/*": {"methods": ["OPTIONS","GET", "POST", "PUT"]},
    # Add more patterns as needed
})

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:Rb7sebvettel1#@127.0.0.1:3306/sys'
db = SQLAlchemy(app)

class signup(db.Model):
    userid = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)

'''class sessiondetail(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(100), nullable=False)
    sessionid = db.Column(db.String(255), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.now, nullable=False)'''

class sessiondetail(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(100), nullable=False)
    sessionid = db.Column(db.String(255), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.now, nullable=False)
    points = db.Column(db.Integer, default=1, nullable=False,autoincrement=True)


@app.route('/validate1', methods=['POST'])
def validate():
    try:
        username = request.json.get('name')
        password = request.json.get('password')

        user = signup.query.filter_by(username=username, password=password).first()

        if user:
            # Set the user session
            session['user_id'] = user.userid

            # Generate a unique session ID using uuid
            session_id = str(uuid.uuid4())

            # Insert session details into the database
            new_session = sessiondetail(username=user.username, sessionid=session_id)
            db.session.add(new_session)
            db.session.commit()


            return redirect(url_for('calculate_points', username=user.username, timestamp=new_session.timestamp))
            # return jsonify({'message': 'Login successful!'}), 200
        else:
            return jsonify({'error_message': 'Invalid name or password.'}), 400

    except Exception as e:
        return jsonify({'error_message': str(e)}), 500

@app.route('/calculate_points/<username>', methods=['GET'])
def calculate_points(username):

    if request.method == 'OPTIONS':
        response = jsonify({'message': 'CORS preflight request success.'})
        response.headers.add('Access-Control-Allow-Headers', 'content-type')
        return response
    try:
        # Retrieve the timestamp of the current session from Flask session
        current_session_timestamp = request.args.get('timestamp')

        if not current_session_timestamp:
            return jsonify({'error_message': 'Session timestamp not found in Flask session.'}), 404

        # Retrieve distinct login dates for the user
        distinct_dates = db.session.query(func.date(sessiondetail.timestamp)).filter_by(username=username).distinct().all()

        # Count the number of distinct login dates
        points = len(distinct_dates)

        # Update the points in the sessiondetail table
        #user_sessions = sessiondetail.query.filter_by(username=username).all()
        #for session in user_sessions:
        #   session.points = points

        user_session = sessiondetail.query.filter_by(username=username, timestamp=current_session_timestamp).first()
        if user_session:
            user_session.points = points
            db.session.commit()

        db.session.commit()

        return jsonify({'message': f'Points calculated and updated for {username}.'}), 200

    except Exception as e:
        return jsonify({'error_message': str(e)}), 500
    
@app.route('/dashboard')
def dashboard():
    return send_file('dashboarddummy.js', mimetype='text/javascript')

if __name__ == '__main__':
    app.run(debug=True, port=8080)
