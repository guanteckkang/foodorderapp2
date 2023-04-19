import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
//cqaqrq5u
export default function Testing() {
  const [image, setImage] = useState("");

  const postImage = async () => {
    axios
      .post(
        "https://freeimage.host/api/1/upload/6d207e02198a847aa98d0a2a901485a5&source=https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg&format=json",
        image
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getFile = (file) => {
    console.log("file", file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "cqaqrq5u");
    axios
      .post("http://api.cloudinary.com/v1_1/dfve48vyq/image/upload", formData)
      .then((res) => {
        alert("upload completed");
        setImage(res.data.url);
      })
      .catch((err) => alert(`Something when error \n ${err}`));
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          getFile(e.target.files[0]);
        }}
      />
      <button onClick={postImage}>test</button>
      <p>{image}</p>
    </div>
  );
}
