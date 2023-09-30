import './App.css';
import Table from './components/Table';
import { UsersContext } from './Context';
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <UsersContext.Provider value={users}>
        <Table />
      </UsersContext.Provider>
    </div>
  );
}

export default App;