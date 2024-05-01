// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import ChatDashboard from '../src/Pages/Chat_Dashboard'
// import socketIO from 'socket.io-client';
// const socket = socketIO.connect('http://localhost:3050');

// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<ChatDashboard />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ChatPage from './Pages/ChatPage';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:3050');
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;