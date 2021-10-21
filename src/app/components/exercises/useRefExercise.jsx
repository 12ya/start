import React, { useRef, useState, useEffect } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const [width, setWidth] = useState(false);
    const change = useRef(width);

    useEffect(() => {
        change.current = width;
        console.log(change, "changeinUseEffect");
    }, [width]);

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменисят содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: change.current ? 150 : 40,
                    width: change.current ? 80 : 60,
                    color: "white"
                }}
            >
                <small>{change.current === true ? "Text" : "Блок"}</small>
            </div>
            <button
                className="btn btn-primary mt-3"
                onClick={() => {
                    console.log("clicked", width);
                    setWidth((prev) => !prev);
                    console.log("clickedEND", width);
                }}
            >
                change size and text
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
