import { useAuth } from "../contexts/useAuth";
import { Navigate } from "react-router-dom";
import { Text } from "@chakra-ui/react";


const PrivateRoute = ({ children }) => {
    const { auth, authLoading } = useAuth();

    if (authLoading) {
        return <Text>Loading...</Text>; // Show loading indicator
    }

    if (!auth) {
        return <Navigate to="/login" />; // Redirect to login if not authenticated
    }

    return children; // Render protected content if authenticated
};

export default PrivateRoute;

