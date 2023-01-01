import React from 'react';
import ReactDOM from "react-dom";
import './editCellsModal.css';

const EditCellsModal = ({children, visible, setVisible}) => {
    return ReactDOM.createPortal(
        <div className={visible ? 'modal modal-active' : 'modal'} onClick={() => setVisible(false)}>
            <div className="modal__content" onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    )
};

export default EditCellsModal;