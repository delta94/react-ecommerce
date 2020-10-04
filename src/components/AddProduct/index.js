import React, { useState } from "react";

export default (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  return (
    <div>
      <form>
        <h1>Add Product</h1>
        <div>
          <label>Name:</label>
          <input required />
        </div>
        <div>
          <label>Price in $:</label>
          <input required />
        </div>
        <div>
          <label>Description:</label> <textarea required />
        </div>
        <div>
          <label>Image URL:</label>
          <input required />
        </div>
        <input type="submit" value="Add" className="button" />
      </form>
    </div>
  );
};
