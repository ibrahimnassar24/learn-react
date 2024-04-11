import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

export default function SignPage() {
    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();

    useEffect(() => {
        const msg = auth?.signed
            ? "you are signed in"
            : "you are signed out";
        console.log(msg);
    }, [auth])

    const clickHandler = (e) => {
        const current = auth?.signed || false;
        setAuth({ signed: !current });

    };

    return (
        <>
            <button type="button"
                onClick={clickHandler}
            >
                {auth?.signed ? "Sign out" : "Sign In"}
            </button>
            <button type="button"
                onClick={() => { navigate("/welcome") }}>
                Go back
            </button>
        </>
    );
}
