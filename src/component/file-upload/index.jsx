import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./index.css";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [name] = useLocalStorage("username", "pranesh");
  const [age] = useLocalStorage("age", 10);
  console.log(name, age);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    console.log(selectedFile);

    const expectType = ["image/jepg", "application/pdf"];

    if (!expectType.includes(selectedFile.type)) {
      setError("File type does not match");
      setFile(null);
      return;
    }

    setError("");
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      alert("No File Found!");
    } else {
      alert("File Uploaded!");
    }
  };

  return (
    <div className="file-container">
      <input type="file" onChange={handleChange} /> <br />
      <button onClick={handleUpload}>upload</button>
      <div>
        {error && <h6>{error}</h6>}
        {file && <h6>{file.name}</h6>}
      </div>
    </div>
  );
};

export default FileUpload;
