import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: formData.username,
                password: formData.password
            }),
            credentials: 'include', // Include credentials if needed
        });
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    } 
    return (
        <>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input id="username" name="username" placeholder="username" onChange={handleOnChange}/>
                <input id="password" name="password" placeholder="password" onChange={handleOnChange}/>
                <button type="submit">Register</button>
            </form>
        </>
    );
}

export default Register;
