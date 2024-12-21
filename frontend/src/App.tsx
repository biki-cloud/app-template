import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchHelloMessage = async () => {
      try {
        const response = await fetch("http://localhost:8081/hello");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setMessage(data.msg);
      } catch (error) {
        console.error("Error fetching the hello message:", error);
      }
    };

    fetchHelloMessage();
  }, []);

  return (
    <>
      <h1>Vite + Reactsss</h1>
      <div className="card">
        <p>{message ? message : "Loading..."}</p>
      </div>
    </>
  );
}

export default App;
