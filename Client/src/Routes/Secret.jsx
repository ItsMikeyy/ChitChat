import { useAuth } from "../Context/auth";

const Secret = () => {
    const {user} = useAuth();
    if (!user) {
        return <p>Please Login</p>
    }
    return (
       <h1>Hello {user.username}</h1>
    );
}

export default Secret;
