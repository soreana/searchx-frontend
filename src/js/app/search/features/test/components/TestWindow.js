import React from 'react';
import Modal from "../../../../common/Modal";

const TestWindow = function({active, list, closeHandler}) {
    if (!active) {
        return <div/>;
    }

    return (
        <Modal width="600px" height="90%">
            <div className="popup">
                <div className="header">
                    <span className="title"><i className="fa fa-history medium"/> We can do magic</span>
                    <div className="pull-right">
                        <span className="close" onClick={closeHandler}><i className="fa fa-times"/></span>
                    </div>
                </div>

                <div className="body">
                    <div className="list">
                        {list}
                    </div>
                </div>
            </div>
        </Modal>
    )
};

export default TestWindow;