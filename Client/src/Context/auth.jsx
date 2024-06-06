import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children})  => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getStatus = async () => {
            const res = await fetch("http://localhost:5000/status",{ credentials: 'include'});
            if (res.ok) {
                const data = await res.json();
                setUser(data.user)
            }
            setLoading(false)
            
        }

        getStatus()
    }, []);

    const login = async (formData) => {
        const res = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: formData.username,
                password: formData.password
            }),
            credentials: 'include', 
        });
        
        const data = await res.json()
        setUser(data.user);
    }

    const logout = async () => {
        const res = await fetch('http://localhost:5000/logout', {
            method: 'POST',         
            credentials: 'include', 
        });
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
          {children}
        </AuthContext.Provider>
      );
}