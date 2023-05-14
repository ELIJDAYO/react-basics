import React from 'react';
import Card from './Card';
import contacts from '../contacts';
import Avatar from './Avatar';

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="../images/avatar.jpg" />
      {contacts.map((contact) => (
        <Card
          id={contact.id}
          key={contact.id}
          name={contact.name}
          img={contact.img}
          tel={contact.tel}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
