import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HallOfFame = () => {
  const hallOfFameData = [
    { id: 1, name: 'Parisha Desai', achievement: 'First Place' },
    { id: 2, name: 'Suparshwa Patil', achievement: 'Second Place' },
    { id: 3, name: 'Shruti Mandaokar', achievement: 'Third Place' }
  ];

  const cardStyle = {
    height: '200px',
    width:'200px', // Adjust the height of the card here
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };

  return (
    <div className="container-xl">
      <div className="row justify-content-center">
        <div className="col-md-19">
          <div className="text-center mt-4 mb-5">
            <h1 className="display-4">Hall of Fame</h1>
          </div>
          <Row className="justify-content-center">
            {hallOfFameData.map((person) => (
              <Col key={person.id} xs={12} sm={6} md={4} lg={4} className="mb-2">
                <Card style={cardStyle}>
                  <Card.Body className="d-flex flex-column justify-content-center">
                    <Card.Title className="text-center">{person.name}</Card.Title>
                    <Card.Text className="text-center">{person.achievement}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;
