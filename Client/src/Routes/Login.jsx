import { useState } from "react";
import { useAuth } from "../Context/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData);
            navigate('/secret');
          } catch (err) {
            console.log('Failed to log in');
          }
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
