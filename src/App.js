import React, { useState } from "react";
import "./App.css";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase-config";

function App() {
  const [imageUpload, setImageUpload] = useState();

  const uploadFile = () => {
    if (!imageUpload) return;

    const imageRef = ref(storage, `9jacoder/images/${imageUpload.name}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
      });
    });
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
}

export default App;
