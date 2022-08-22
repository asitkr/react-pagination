import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [id, setId] = useState(1);
  const [user, setUser] = useState({});

  const getUser = () => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    axios.get(url).then(response => 
      setUser({
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone,
        website: response.data.website,
      })
    )
  }

  useEffect(() => {
    getUser();
  }, [id])

  return (
    <div className="App">
      <h1>Pagination</h1>
      <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
      <p>Phone : {user.phone}</p>
      <p>Website: {user.website}</p>

      <button onClick={() => setId(id - 1)}>Previous</button>
      <button onClick={() => setId(id + 1)}>Next</button>
    </div>
  );
}

export default App;
