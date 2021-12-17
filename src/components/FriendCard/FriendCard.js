import React, { useState } from 'react';
import '../../assets/css/FriendCard.css';
import { Button, Col, Input, Row } from 'reactstrap';

function FriendCard({ data, onDelete, onUpdate }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [friendInfo, setFriendInfo] = useState(data);

  const openFormUpdate = () => {
    setIsUpdating(true);
  };

  const submitUpdate = () => {
    onUpdate(friendInfo);
    setIsUpdating(false);
  };

  const handleUpdate = (event) => {
    const keyName = event.target.name;
    const keyValue = event.target.value;
    setFriendInfo((prev) => ({
      ...prev,
      [keyName]: keyValue,
    }));
    console.log(event.target.name);
  };

  return (
    <Col className="col-6">
      <Row className="friend-card">
        <Col className="col-9">
          <p className="friend-card-text">
            Name: {!isUpdating ? data.name : <Input name="name" placeholder="Name" type="text" onChange={handleUpdate} value={friendInfo.name} />}
          </p>
          <p className="friend-card-text">
            Wallet Address:{' '}
            {!isUpdating ? (
              data.walletAddress
            ) : (
              <Input name="walletAddress" placeholder="Wallet Address" type="text" onChange={handleUpdate} value={friendInfo.walletAddress} />
            )}
          </p>
          <p className="friend-card-text">
            Email:{' '}
            {!isUpdating ? data.email : <Input name="Email" placeholder="Email" type="text" onChange={handleUpdate} value={friendInfo.email} />}
          </p>
        </Col>
        <Col className="col-3 friend-card-feature">
          <Button color="warning" onClick={!isUpdating ? openFormUpdate : submitUpdate}>
            Update
          </Button>
          <Button color="danger" onClick={onDelete}>
            Delete
          </Button>
        </Col>
      </Row>
    </Col>
  );
}

export default FriendCard;
