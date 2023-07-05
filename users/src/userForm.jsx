import { useState } from 'react';

export const UserForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmi = (event) => {
    event.preventDefault();

    console.log(email, name);
  };

  return (
    <form action="" onSubmit={handleSubmi}>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button>Add User</button>
    </form>
  );
};
