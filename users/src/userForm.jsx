import { useState } from 'react';

export const UserForm = (props) => {
  const { onUserAdd } = props;

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmi = (event) => {
    event.preventDefault();

    onUserAdd({ name, email });
  };

  return (
    <form action="" onSubmit={handleSubmi}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button>Add User</button>
    </form>
  );
};
