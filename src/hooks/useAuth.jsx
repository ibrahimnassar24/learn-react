import { useContext } from "react";
import { authContext } from "../components/AuthProvider";

export default function useAuth() {
    return useContext(authContext);
};