import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row } from 'reactstrap';
import './App.css';
import FriendCard from './components/FriendCard/FriendCard';

const DEFAULT_USER = {
  name: '',
  walletAddress: '',
  email: '',
};

const FRIEND_LIST_KEY = 'FRIEND_LIST_KEY';

function App() {
  const [currentUser, setCurrentUser] = useState({ ...DEFAULT_USER });
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    initFriendListFromLocalStorage();
  }, []);

  useEffect(() => {
    saveFriendListToLocalStorage(friendList);
  }, [friendList]);

  const initFriendListFromLocalStorage = () => {
    const friendListLocalStr = localStorage.getItem(FRIEND_LIST_KEY);
    const friendListLocal = JSON.parse(friendListLocalStr) || [];
    setFriendList(friendListLocal);
  };

  const saveFriendListToLocalStorage = () => {
    localStorage.setItem(FRIEND_LIST_KEY, JSON.stringify(friendList));
  };

  const handleChangeCurrentUser = (event) => {
    const keyName = event.target.name;
    const keyValue = event.target.value;
    setCurrentUser((prev) => ({
      ...prev,
      [keyName]: keyValue,
    }));
    console.log(event.target.name);
  };

  const handleAddFriend = (e) => {
    e.preventDefault();
    const newFriend = {
      ...currentUser,
      id: new Date().getTime(),
    };
    setFriendList((prev) => [...prev, newFriend]);
    // Clear friend info added
    setCurrentUser({ ...DEFAULT_USER });
    console.log(friendList);
  };

  const handleRemoveFriend = (id) => {
    setFriendList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateFriend = (newData) => {
    setFriendList((prev) => prev.map((friend) => (friend.id === newData.id ? { ...newData } : friend)));
  };

  return (
    <div className="App">
      <Container>
        <Container>
          <Row>
            <h2>Form</h2>
          </Row>
          <Form>
            <FormGroup>
              <Input name="name" placeholder="Name" type="text" onChange={handleChangeCurrentUser} value={currentUser.name} />
            </FormGroup>
            <FormGroup>
              <Input
                name="walletAddress"
                placeholder="Wallet address"
                type="text"
                onChange={handleChangeCurrentUser}
                value={currentUser.walletAddress}
              />
            </FormGroup>
            <FormGroup>
              <Input name="email" placeholder="Email" type="email" onChange={handleChangeCurrentUser} value={currentUser.email} />
            </FormGroup>
            <Button className="submit-btn" onClick={handleAddFriend}>
              Submit
            </Button>
          </Form>
        </Container>

        <Container>
          <Row>
            <h2>Friends</h2>
          </Row>
          <Container>
            <Row>
              {friendList.map((friend) => (
                <FriendCard key={friend.id} data={friend} onDelete={() => handleRemoveFriend(friend.id)} onUpdate={handleUpdateFriend} />
              ))}
            </Row>
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export default App;
