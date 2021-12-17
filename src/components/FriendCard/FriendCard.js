import React from 'react';
import '../../assets/css/FriendCard.css';
import { Button, Col, Row } from 'reactstrap';

function FriendCard({ name, walletAddress, email, onDelete }) {
  return (
    <Col className="col-6">
      <Row className="friend-card">
        <Col className="col-9">
          <p>Name: {name}</p>
          <p>Wallet Address: {walletAddress}</p>
          <p>Email: {email}</p>
        </Col>
        <Col className="col-3 friend-card-feature">
          <Button color="warning">Update</Button>
          <Button color="danger" onClick={onDelete}>
            Delete
          </Button>
        </Col>
      </Row>
    </Col>
  );
}

export default FriendCard;
