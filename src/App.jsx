import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context/ThemeContext.jsx";
import { UserContext } from "./context/UserContext.jsx";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { loggedIn, setLoggedIn } = useContext(UserContext);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleLoginLogout = () => {
    setLoggedIn(!loggedIn);
  };

  const styles = {
    backgroundColor: theme === "light" ? "white" : "#222",
    color: theme === "light" ? "black" : "white",
    minHeight: "100vh",
    padding: "50px",
    textAlign: "center",
  };

  return (
    <div style={styles}>
      <h1>React Hooks App</h1>

      <h2>Theme: {theme}</h2>

      <button onClick={toggleTheme}>
        Switch Theme
      </button>

      <br />
      <br />

      <button onClick={handleLoginLogout}>
        {loggedIn ? "Logout" : "Login"}
      </button>

      {loggedIn && users.length > 0 && (
        <div>
          <h2>Welcome, {users[0].name}!</h2>
        </div>
      )}
    </div>
  );
}

export default App;
