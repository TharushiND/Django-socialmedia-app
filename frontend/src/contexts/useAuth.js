import {createContext,useContext,useState,useEffect, Children} from 'react'
import { get_auth,login } from '../api/endpoints'
import { useNavigate } from 'react-router-dom'

const AuthContext=createContext()
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);
    const navigate = useNavigate();

    const check_auth = async () => {
        try {
            await get_auth();
            setAuth(true);
        } catch {
            setAuth(false);
        } finally {
            setAuthLoading(false);
        }
    };

    useEffect(() => {
        check_auth();
    }, []);

    const auth_login = async (username, password) => {
        const data = await login(username, password);
        if (data.success) {
            setAuth(true);
            navigate(`/${username}`);
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <AuthContext.Provider value={{ auth, authLoading, auth_login }}>
            {children} {/* Corrected here */}
        </AuthContext.Provider>
    );
};


export const useAuth =() =>useContext(AuthContext);