import React, { useEffect, useState } from 'react';
import './App.css';
import netlifyIdentity from 'netlify-identity-widget';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initialize Netlify Identity
    netlifyIdentity.init();

    // Listen for login and logout events
    netlifyIdentity.on('login', (user) => {
      setUser(user);
      netlifyIdentity.close();
    });

    netlifyIdentity.on('logout', () => {
      setUser(null);
    });
  }, []);

  // Open the login/signup modal
  const handleLogin = () => {
    netlifyIdentity.open();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Your Dashboard!</h1>
        {user ? (
          <div>
            <p>Hello, {user.user_metadata.full_name}</p>
            <button onClick={() => netlifyIdentity.logout()}>Logout</button>
          </div>
        ) : (
          <button onClick={handleLogin}>Login / Sign Up</button>
        )}
      </header>
    </div>
  );
}

export default App;
