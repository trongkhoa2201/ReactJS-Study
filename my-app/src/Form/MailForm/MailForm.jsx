import React, {useState} from "react";
import { Formik } from 'formik';

const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

function MailForm(){

    const [form, setForm] = useState({});

  const handleChange = (event) => {
    const value = event.target.type === 'checkbox' ? !form[event.target.name] : event.target.value;
    setForm({ ...form, [event.target.name]: value });
  };

  const handleValidate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!REGEX.email.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.title) {
      errors.title = 'Required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidate()) {
        alert('Contact added successfully');
    }
  };

  return (
    <div className="App">
      <Formik initialValues={form} onSubmit={handleSubmit} validate={handleValidate}>
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formik.values.email} onChange={handleChange} />

            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={formik.values.title} onChange={handleChange} />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formik.values.message} onChange={handleChange} />

            <button type="submit">Add Contact</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
export default MailForm