import React from 'react';
import Routes from './routes';
import NavBar from './pages/Navbar'
function App() {
  return (
    <div>
    <NavBar />
    <div className="container-fluid">
      <Routes />
    </div>
    </div>
  );
}

export default App;
