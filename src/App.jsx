import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted:", text);
    setMessage(`Input taken - ${text}`);
    setText("");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div>
      {message ? <div className="message">{message}</div> : ""}
      <form onSubmit={handleSubmit}>
        <label>Enter Your Username</label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>
    </div>
  );
}

export default App;
