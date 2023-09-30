import './App.css';
import Table from './components/Table';
import { UsersContext } from './Context';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([])

  const api = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/users'})

  useEffect(() => {
    api.get()
    .then((data) => {
      setUsers(data.data)
    })
  }, [])

  return (
    <div className="App">
      <UsersContext.Provider value={users}>
        <h1 className='text-3xl text-center text-header-color w-full mt-4'>User Table</h1>
        <Table />
      </UsersContext.Provider>
    </div>
  );
}

export default App;