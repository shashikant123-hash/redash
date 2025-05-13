import React, { useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

function App() {
  useEffect(() => {
    netlifyIdentity.init(); // initialize the widget
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Your Dashboard</h1>
      <button onClick={() => netlifyIdentity.open()}>Log in / Sign up</button>
    </div>
  );
}

export default App;
