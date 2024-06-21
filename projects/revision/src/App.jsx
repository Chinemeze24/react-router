import { useState } from 'react';
import './App.css';
import {UserContext} from "./context.js";
import MyComponent from "./components/mycomponent.jsx";

function App() {
  const [user, setUser] = useState("Joh Doe");
  

  return (
    <>
    <UserContext.Provider value={user}>
      <MyComponent/>
      </UserContext.Provider>
  
  </>
  )
} 
export default App;
