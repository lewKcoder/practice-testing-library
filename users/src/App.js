import { useState } from 'react';
import './App.css';
import { UserForm } from './userForm';

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <UserForm onUserAdd={onUserAdd} />
    </div>
  );
}

export default App;
