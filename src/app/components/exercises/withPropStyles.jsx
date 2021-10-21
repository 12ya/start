import React from "react";
import CardWrapper from "../common/Card";

export const withPropStyles = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} />
        </CardWrapper>
    );
};
