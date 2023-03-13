import React, {useState} from 'react'
import {Formik} from 'formik'

const SEX_LIST = [
    { label: 'Nam', value: 'male' },
    { label: 'Nữ', value: 'female' }
  ];
  
function Emergency() {
    const [form, setForm] = useState({});
  
    const handleChange = (event) => {
      const value = event.target.type === 'checkbox' ? !form[event.target.name] : event.target.value;
      setForm({
        ...form,
        [event.target.name]: value
      });
    };
  
    const handleValidate = (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Required';
      }
      if (!values.number) {
        errors.number = 'Required';
      }
      if (!values.sex) {
        errors.sex = 'Required';
      }
      return errors;
    };
  
    const handleSubmit = () => {
      alert('Form submitted successfully!');
    };
  
    return (
      <div className="App">
        <Formik initialValues={form} onSubmit={handleSubmit} validate={handleValidate}>
          {({ values, errors, touched, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={values.name || ''} onChange={handleChange} />
                {errors.name && touched.name && <div className="error">{errors.name}</div>}
              </div>
              <div>
                <label htmlFor="number">Number:</label>
                <input type="number" id="number" name="number" value={values.number || ''} onChange={handleChange} />
                {errors.number && touched.number && <div className="error">{errors.number}</div>}
              </div>
              <div>
                <label htmlFor="sex">Sex:</label>
                <select id="sex" name="sex" value={values.sex || ''} onChange={handleChange}>
                  <option value="">Select Sex</option>
                  {SEX_LIST.map(sex => (
                    <option key={sex.value} value={sex.value}>{sex.label}</option>
                  ))}
                </select>
                {errors.sex && touched.sex && <div className="error">{errors.sex}</div>}
              </div>
              <div>
                <label htmlFor="married">Married:</label>
                <input type="checkbox" id="married" name="married" checked={!!values.married} onChange={handleChange} />
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
        <div>
          
        </div>
      </div>
    );
  }

export default Emergency