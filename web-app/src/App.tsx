import { useState, useEffect } from "react";

function App() {
  const [storedValue, setStoredValue] = useState("No value");
  useEffect(() => {
    const value = localStorage.getItem("myValue");
    if (value) {
      setStoredValue(value);
    }
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-700">
        Hello world!
      </h1>
      <p className="mt-4 text-xl">Stored Value: {storedValue}</p>
    </div>
  );
}

export default App;
