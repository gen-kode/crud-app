import React, { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [users, setUsers] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (editIndex !== null) {
        const updatedUsers = [...users];
        updatedUsers[editIndex] = formData;
        setUsers(updatedUsers);
        setEditIndex(null);
      } else {
        setUsers([...users, formData]);
      }
      setFormData({ name: "", email: "" });
    };
  
    const handleEdit = (index) => {
      setFormData(users[index]);
      setEditIndex(index);
    };
  
    const handleDelete = (index) => {
      setUsers(users.filter((_, i) => i !== index));
    };
  return (
    <div className="container mt-5">
      <h2 className="mb-3">CRUD Form</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">{editIndex !== null ? "Update" : "Add"}</button>
      </form>
      <ul className="list-group">
        {users.map((user, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {user.name} - {user.email}
            <div>
              <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(index)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Form