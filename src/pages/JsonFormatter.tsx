import { useState } from "react";

function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(input);

      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e) {
      setError("JSON ไม่ถูกต้อง: " + (e as Error).message);
    }
  };

  return (
    <div>
      <h1>JSON Formatter</h1>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="วาง JSON ตรงนี้..."
        rows={10}
      />

      <button onClick={handleFormat}>Format</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <pre>{output}</pre>
    </div>
  );
}

export default JsonFormatter;