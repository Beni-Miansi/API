import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';


const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);


  return (
    <div className="user-list">
      <h1>User List</h1>
      <div className="cards-container">
        {listOfUsers.map(user => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );

};

export default UserList;



//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {listOfUsers.map(user => (
//           <li key={user.id}>
//             {user.name} - {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

