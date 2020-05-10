import React , {useState} from 'react';

import './App.css';

const App = () => {
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [showPassword, setShowPassword]= useState('');
    return (
        <div>
            <h1>Handling key and button-click events using React-hooks</h1>
            <input 
                 type="text" 
                 placeholder="Enter Username" 
                 value={username}
                 onChange={(e) => { setUsername(e.target.value) }}
            />
            <input 
                 type="password" 
                 placeholder="Enter password" 
                 value={password}
                 onChange={(e) => { setPassword(e.target.value) }}
            />
            <h2>{username}</h2>
            <h2>{showPassword? password:'*'.repeat(password.length)}</h2>
            <button onClick={(e)=>setShowPassword(!showPassword)}>Show/Hide Password</button>
        </div>
    )
}

export default App;