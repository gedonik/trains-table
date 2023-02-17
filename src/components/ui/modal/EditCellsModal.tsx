import React from "react";
import ReactDOM from "react-dom";
import "./editCellsModal.css";
import {useDispatch} from "react-redux";

type PropsEditCellsModalType = {
    children: any,
    visible: boolean,
}

const EditCellsModal = ({children, visible}: PropsEditCellsModalType) => {
    const dispatch = useDispatch();

    return ReactDOM.createPortal(
        <div className={visible ? 'modal modal-active' : 'modal'} onClick={() => dispatch({type: 'CANCEL_EDIT', payload: false})}>
            <div className="modal__content" onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.getElementById('portal') as HTMLElement
    )
};

export default EditCellsModal;