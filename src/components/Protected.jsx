import { Children, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Protected({ children }) {

    const { auth } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!auth?.signed) {
            navigate("/sign");
        }
    }, [auth])
    console.log(children)
    
    return children;
};