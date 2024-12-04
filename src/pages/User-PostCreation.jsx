import React, { useState } from "react";
import axios from 'axios';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/User-PostCreation.css";

function PostCreation() {
  const [formData, setFormData] = useState({
    userId: "", // Isi dengan ID user yang sesuai
    title: "",
    imagePost: "",
    description: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, imagePost: e.target.files[0] });
  };

  const handleSubmit = async () => {
    try {
      const formDataWithImage = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataWithImage.append(key, value);
      });

      const response = await axios.post("/posts", formDataWithImage, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Error uploading post:", error);
      alert("Failed to upload post");
    }
  };

  return (
    <div className="postcreationpage">
      <Navbar />
      <div className="postcreation">
        <div className="tittle">Post Your Creation</div>
        <hr
          style={{
            marginTop: "13px",
            border: "2px solid white",
            boxShadow: "0px 0px 4px 0px rgba(255, 255, 255, 0.25)",
          }}
        />
        <div className="form" style={{ marginTop: "30px" }}>
          <h3>Title</h3>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            style={{ width: "95%" }}
            placeholder="Type here..."
          />
        </div>
        <div className="form" style={{ marginTop: "20px" }}>
          <h3>Description</h3>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            style={{ width: "95%" }}
            placeholder="Type here..."
          />
        </div>
        <div className="form" style={{ marginTop: "20px" }}>
          <h3>Category</h3>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            style={{ width: "95%" }}
            placeholder="Type here..."
          />
        </div>
        <div className="form" style={{ marginTop: "20px" }}>
          <h3>Photo</h3>
          <input type="file" name="imagePost" onChange={handleFileChange} />
        </div>
        <button className="buttonSave" onClick={handleSubmit}>
          Upload
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default PostCreation;
