import React from "react";
import PropTypes from "prop-types";

export const SimpleComponent = ({ name, onLogin, onLogOut, isAuth }) => {
    return isAuth ? (
        <button className="btn btn-primary" onClick={onLogOut}>
            {name}
        </button>
    ) : (
        <button className="btn btn-primary" onClick={onLogin}>
            {name}
        </button>
    );
};

SimpleComponent.propTypes = {
    name: PropTypes.string,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};
