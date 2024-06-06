import { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/login', {
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

        const data = await res.json()
        console.log(data);
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
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input id="username" name="username" placeholder="username" onChange={handleOnChange}/>
                <input id="password" name="password" placeholder="password" onChange={handleOnChange}/>
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login;
