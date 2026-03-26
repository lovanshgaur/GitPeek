// Home.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.trim()) return;

    const value = user;

    setMessage(`Input taken - ${user}`);
    setUser("");

    navigate("/result", { state: { userInput: value } });
  };

  return (
    <>
      <div>
        {message ? <div className="message">{message}</div> : ""}
        <form onSubmit={handleSubmit}>
          <label>Enter Your Username</label>
          <input value={user} onChange={(e) => setUser(e.target.value)} />
        </form>
      </div>
    </>
  );
};

export default Home;
