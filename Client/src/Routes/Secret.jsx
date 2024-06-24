import { useState } from "react";
import { useAuth } from "../Context/auth";

const Secret = () => {
    const [queryText, setQueryText] = useState("");
    const [users, setUsers] = useState(null);

    const {user} = useAuth();
    if (!user) {
        return <p>Please Login</p>
    }
    
    
    const handleRequest = async () => {
        const res = await fetch('http://localhost:5000/search', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                value: queryText,
            }),
            credentials: 'include', 
        });
        const data = await res.json()
        console.log(data)
        setUsers(data.users);
        console.log(users)
    }

    const handleOnChange = (e) => {
        setQueryText(e.target.value);
    }

    return (
        <>       
            <h1>Hello {user.username}</h1>
            <input onChange={handleOnChange}  placeholder="Search for friends"></input>
            <button onClick={handleRequest}>Go</button>
        </>

    );
}

export default Secret;
