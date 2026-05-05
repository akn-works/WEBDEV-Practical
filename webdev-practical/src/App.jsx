import { useState, useEffect } from "react";
import Child from "./components/Child";

function App() {
  // Props data
  const name = "Ayush";
  const age = 20;

  // State for API data
  const [users, setUsers] = useState([]);

  // Fetch API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Props Example</h1>

      {/* Passing props */}
      <Child name={name} age={age} />

      <hr />

      <h1>API Data</h1>

      {users.map((user) => (
        <div key={user.id}>
          <p><b>Username:</b> {user.username}</p>
          <p><b>Email:</b> {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;