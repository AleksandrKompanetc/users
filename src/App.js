import React, {useState, useEffect} from 'react';
import { Success } from './components/Success';
import { Users } from './components/Users';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then((res) => res.json())
    .then((json) => {
      setUsers(json.data);
    }).catch(err => {
      console.warn(err);
      alert('Error');
    })
  }, []);

  return (
    <div className="App">
      <Users isLoading />
      {/* <Success /> */}
    </div>
  );
}

export default App;
