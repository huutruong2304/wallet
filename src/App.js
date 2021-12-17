import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row } from 'reactstrap';
import './App.css';
import FriendCard from './components/FriendCard/FriendCard';

const DEFAULT_USER = {
  name: '',
  walletAddress: '',
  email: '',
};

function App() {
  return (
    <div className="App">
      <Container>
        <Container>
          <Row>
            <h2>Form</h2>
          </Row>
          <Form>
            <FormGroup>
              <Input name="name" placeholder="Name" type="text" />
            </FormGroup>
            <FormGroup>
              <Input name="walletAddress" placeholder="Wallet address" type="text" />
            </FormGroup>
            <FormGroup>
              <Input name="email" placeholder="Email" type="email" />
            </FormGroup>
            <Button className="submit-btn">Submit</Button>
          </Form>
        </Container>

        <Container>
          <Row>
            <h2>Friends</h2>
          </Row>
          <Container>
            <Row>
              <FriendCard />
            </Row>
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export default App;
