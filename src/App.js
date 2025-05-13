import React, { useEffect, useState } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

function App() {
  const [user, setUser] = useState(null); // Track user state

  useEffect(() => {
    // Initialize Netlify Identity
    netlifyIdentity.init();

    // Listen for login event
    netlifyIdentity.on('login', (user) => {
      setUser(user); // Update state with user info
      console.log('Logged in as:', user);
    });

    // Listen for logout event
    netlifyIdentity.on('logout', () => {
      setUser(null); // Clear user state
      console.log('Logged out');
    });

    // Clean up listeners when component unmounts
    return () => {
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout');
    };
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div className="App">
      <h1>Welcome to Your Dashboard</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.user_metadata.full_name}</h2>
          <button onClick={() => netlifyIdentity.logout()}>Log out</button>
        </div>
      ) : (
        <button onClick={() => netlifyIdentity.open()}>Log in / Sign up</button>
      )}
    </div>
  );
}

export default App;
