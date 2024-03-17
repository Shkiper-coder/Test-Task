import { useContext } from "react";
import { AuthContext } from "../PrivedRoute/AuthProvider";

export function useAuth() {
    return useContext(AuthContext);
}