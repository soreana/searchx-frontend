import './Test.pcss';
import React from 'react';
import TestItem from "./TestItem";
import TestWindow from "./TestWindow";

const Test = function({history, popup, clickHandler, popupHandler}) {
    const list = history.map((data, index) => {
        return <TestItem
            key={index}
            data={data}
            clickHandler={clickHandler}
        />
    });

    return (
        <div className="Test">
            <h3 className="banner" onClick={popupHandler}>
                <i className="fa fa-history medium"/> Test
            </h3>

            <div className="list">
                {list}
            </div>

            <TestWindow
                active={popup}
                list={list}
                closeHandler={popupHandler}
            />
        </div>
    )
};

export default Test;