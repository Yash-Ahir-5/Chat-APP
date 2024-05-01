// import React, { useState } from "react";
// import "./Chat_Dashboard.css";


// const ChatDashboard = () => {

//   return (
//     <section class="chat_section">
//       <div class="brand">
//         <img src="chat.svg" alt=""/>
//         <h1>Chat-APP</h1>
//       </div>

//       <div class="message_area">
//         <div class="incoming">
//           <h4>Yash</h4>
//           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, assumenda.</p>
//         </div>
//       </div>

//       <div class="message_area">
//         <div class="outgoing">
//           <h4>Ahir</h4>
//           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, assumenda.</p>
//         </div>
//       </div>

//       <div>
//         <textarea id= "textarea" cols="30" rows="1" placeholder="Write a message here..."></textarea>
//       </div>
//     </section>
//   );
// };

// export default ChatDashboard;
// Import socket.io-client at the top of your file
import io from 'socket.io-client';

// Define the socket connection
const socket = io('http://localhost:3050'); // Replace with your server URL

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    //sends the username and socket ID to the Node.js server
    socket.emit('newUser', { userName, socketID: socket.id });
    navigate('/chat');
  };
  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Sign in to Open Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="home__cta">SIGN IN</button>
    </form>
  );
};

export default Home;