import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [points, setPoints] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const calculatedPoints = calculatePoints(feedback);
    setPoints(calculatedPoints);
    setFeedback('');
    setShowModal(true); // Show modal when feedback is submitted
  };

  const calculatePoints = (feedbackText) => {
    return feedbackText.length * 2;
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container-xl">
      <div className="row justify-content-center">
        <div className="col-md-18">
          <h1 className="text-center my-4">Feedback</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="feedbackInput">
              <div>
                <Form.Label className="fs-4">Enter your feedback:</Form.Label>
              </div>
              <Form.Control
                as="textarea"
                rows={8}
                value={feedback}
                onChange={handleFeedbackChange}
                placeholder="Type your feedback here..."
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mb-3">
              Submit
            </Button>
          </Form>
          {points > 0 && (
            <div className="mt-4">
              <h3 className="text-center">Points earned: {points}</h3>
            </div>
          )}
          <p className="text-center">
            Don't want to leave feedback?{' '}
            <Link to="/dashboard">Go to Dashboard</Link>
          </p>
        </div>
      </div>
      {/* Reward Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rewards Earned</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You've earned 10 rewards!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Feedback;
