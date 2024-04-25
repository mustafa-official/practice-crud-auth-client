import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.init";
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const userInfo = {registerUser, loginUser}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
}