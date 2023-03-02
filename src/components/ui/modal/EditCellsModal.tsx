import React from "react";
import ReactDOM from "react-dom";
import "./editCellsModal.css";

type PropsEditCellsModalType = {
    children: any,
    visible: boolean,
    setVisible: Function
}

const EditCellsModal = ({children, visible, setVisible}: PropsEditCellsModalType) => {
    return ReactDOM.createPortal(
        <div className={visible ? 'modal modal-active' : 'modal'} onClick={() => setVisible(false)}>
            <div className="modal__content" onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.getElementById('portal') as HTMLElement
    )
};

export default EditCellsModal;