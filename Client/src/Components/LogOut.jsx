import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/auth"

const LogOut = () => {
    const {user, logout} = useAuth();
    const navigate = useNavigate()
    
    const handleClick = async () => {
        await logout()
        navigate("/")
    }

    if (!user) {
        return 
    }
    return (
        <button onClick={handleClick}>Logout</button>
    )
}

export default LogOut