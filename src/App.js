import React, { useState } from "react";
import "./App.css";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase-config";

function App() {
  const [images, setImages] = useState();

  const uploadFiles = async () => {
    for (let i = 0; i < images.length; i++) {
      const imageRef = ref(storage, `/mulitpleFiles/${images[i].name}`);

      const result = await uploadBytes(imageRef, images[i])
        .then(() => {
          console.log("success");
        })
        .catch((error) => {
          console.log("error");
        });
    }
  };

  console.log(images);

  return (
    <div className="App">
      <input
        type="file"
        multiple
        onChange={(event) => {
          setImages(event.target.files);
        }}
      />

      <button onClick={uploadFiles}>Submit</button>
    </div>
  );
}

export default App;
