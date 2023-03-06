import { useState } from "react";
import "./App.css";

function App() {
  const [error, setError] = useState(null);

  const validateImage = (image) => {
    setError(null);

    //Check type
    if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      const error = "Wrong file type";
      setError(error);
      return;
    }

    // Check Image  Size
    if (image.size > 5000000) {
      const error = "file too  large- Upload file less than  5mb";
      setError(error);
      return;
    }

    setError(null);
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          validateImage(event.target.files[0]);
        }}
      />

      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
