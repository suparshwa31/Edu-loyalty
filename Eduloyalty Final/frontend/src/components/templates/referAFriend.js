import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const ReferAFriend = () => {
  const [friendEmail, setFriendEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleEmailChange = (event) => {
    setFriendEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your logic to send referral and message to the friend
    sendReferral(friendEmail, message); // Implement your referral sending logic
    setIsSent(true);
    setFriendEmail('');
    setMessage('');
  };

  const sendReferral = (email, message) => {
    // Implement logic to send referral using email and message
    // This is a placeholder function, replace it with your own logic
    console.log(`Sending referral to ${email} with message: ${message}`);
    // Actual logic to send the referral
  };

  return (
    <div className="container-xl"> {/* Increased width container-xl */}
      <div className="row justify-content-center">
        <div className="col-ls-16">
          <h1 className="text-center my-4">Refer a Friend</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="friendEmailInput">
              <Form.Label>Friend's Email:</Form.Label>
              <Form.Control
                type="email"
                value={friendEmail}
                onChange={handleEmailChange}
                placeholder="Enter your friend's email..."
              />
            </Form.Group>
            <Form.Group controlId="messageInput">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={message}
                onChange={handleMessageChange}
                placeholder="Type your message here..."
              />
            </Form.Group>
            <Col lg={{ span: 10, offset: 1 }}>
              <Button variant="primary" type="submit" className="w-100 mb-3">
                Send Referral
              </Button>
            </Col>
          </Form>
          {isSent && (
            <div className="mt-4">
              <h3>Referral sent to {friendEmail}!</h3>
              <p>Message: {message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferAFriend;
