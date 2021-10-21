import React from "react";

export const withLogin = (Component) => (props) => {
    const handleLogIn = () => {
        localStorage.setItem("user", true);
        window.location.reload();
    };

    const handleLogOut = () => {
        localStorage.removeItem("user");
        window.location.reload();
    };

    const logged = localStorage.getItem("user");

    return (
        <>
            {
                <Component
                    {...props}
                    name={logged ? "logOut" : "logIn"}
                    isAuth={logged}
                    onLogin={handleLogIn}
                    onLogOut={handleLogOut}
                />
            }
        </>
    );
};
