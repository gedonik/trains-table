import React from 'react';
import './editCellsModal.css';

const EditCellsModal = ({children, visible, setVisible}) => {
    return (
        <div className={visible ? 'modal modal-active' : 'modal'} onClick={() => setVisible(false)}>
            <div className="modal__content" onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default EditCellsModal;