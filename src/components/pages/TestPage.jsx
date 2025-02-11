import React, { useState } from "react";

function TestPage() {
  // ================= Step One===========
  // const [name, setName] = useState("");
  // console.log('name', name)
  // const [email, setEmail] = useState("");
  // console.log('email', email)
  // ================= Step One End===========

  // ================= Step Two==============
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [values, setValues] = useState({ name: "", email: "" });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues(formData);
  };
  const handleClear = () =>{
    setValues(
        { name: "", email: "" }
    )
    setFormData(
        { name: "", email: "" }
    )
  }
  return (
    <div>
      <h1>Testing</h1>
      {/* // ================= Step One=========== */}
      {/* <label>Name</label>
<input name='name' type='text'value={name} onChange={(e)=>setName(e.target.value)}></input>
<label>Email</label>
<input name='email' type='text'value={email} onChange={(e)=>setEmail(e.target.value)}></input> */}
      {/* // ================= Step One End=========== */}
      {/* ===========================Step Two================== */}
      <label>Name</label>
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleOnChange}
      />
      <label>Email</label>
      <input
        name="email"
        type="text"
        value={formData.email}
        onChange={handleOnChange}
      />
      <br />
      <button type="button" className="btn btn-success mt-2" onClick={handleSubmit}>
        Submit
      </button>
      <button type="button" className="btn btn-danger ms-2 mt-2" onClick={handleClear}>
        Clear
      </button>
      <br/>
      {values.name} ========== {values.email}
    </div>
  );
}

export default TestPage;
