import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RoomProvider } from './context/roomContext/RoomContext';
import { UserProvider } from './context/userContext/UserContext';
import { ItemProvider } from './context/itemContext/ItemContext';

ReactDOM.render(
  <RoomProvider>
    <UserProvider>
      <ItemProvider>
        <App />
      </ItemProvider>
    </UserProvider>
  </RoomProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
