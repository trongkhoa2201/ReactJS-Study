import React, {useState} from "react";


const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

function ContactForm(){
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const handleChange = (e) =>{
        const {name, value} = e.target
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    
    const handleValidate = () =>{
        const newErrors = {};

        if (!form.name) {
        newErrors.name = "Required";
        }

        if (!form.email) {
        newErrors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
        newErrors.email = "Invalid email address";
        }

        if (!form.phone) {
        newErrors.phone = "Required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidate()) {
          alert("Thêm liên hệ thành công!");
        }
      };

    return (
        <form onSubmit={handleSubmit}>
        <div className="custom-input-error">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={handleChange} />
            {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={handleChange} />
            {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" onChange={handleChange} />
            {errors.phone && <span>{errors.phone}</span>}
        </div>
        <div>
            <label htmlFor="phone">Message:</label>
            <textarea type></textarea>
            {errors.phone && <span>{errors.phone}</span>}
        </div>
        <button type="submit">Submit</button>
        </form>
    );
}
export default ContactForm