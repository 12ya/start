import React, { useState } from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const Form = ({ children }) => {
    const [state, setState] = useState(false);

    const handleChange = () => {
        setState(!state);
    };

    return React.Children.map(children, (child) => {
        const config = {
            ...child.props,
            onChange: handleChange,
            name: state ? "text" : "block",
            width: state && 40,
            height: state && 100
        };
        return React.cloneElement(child, config);
    });
};

const Block = ({ name, onChange, width, height }) => {
    return (
        <div
            style={{
                background: "black",
                width: width || 200,
                heigth: height || 30,
                color: "white",
                textAlign: "center"
            }}
            onClick={onChange}
        >
            {name}
        </div>
    );
};

Block.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение" style={{ height: "100%" }}>
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменисят содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 100 и 40 соответственно</li>
            </ul>
            <Form>
                <Block />
            </Form>
        </CollapseWrapper>
    );
};

export default ChildrenExercise;
