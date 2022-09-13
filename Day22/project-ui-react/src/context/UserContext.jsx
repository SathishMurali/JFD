import React, { createContext, useState } from 'react'

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState({
        userId: 0,
        userEmail: "",
        isLoggedIn: true,
    });
    const [candidates, setCandidates] = useState([]);

    return (
        <UserContext.Provider
            value={{
                loggedInUser,
                setLoggedInUser,
                setCandidates,
                candidates,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };