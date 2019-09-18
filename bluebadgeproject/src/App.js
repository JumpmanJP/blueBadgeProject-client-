import React, {useState, useEffect} from 'react';
import './App.css';
import SiteBar from './home/Sitebar';
import Auth from './auth/Auth';


function App() {
  const [sessionToken, setSessionToken] = useState('');


  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  },[])
  
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  //Adding logout function
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }



  return (
    <div className="App">
      
      <SiteBar clicklogout={clearToken} />
      <Auth updateToken={updateToken} />
     
    </div>
  );
}

export default App;
