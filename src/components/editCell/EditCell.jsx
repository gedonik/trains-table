import React from 'react';
import './editCell.css';
import {headings} from "../tableHeader/TableHeader.jsx";
import MainButton from "../ui/button/MainButton.jsx";

const EditCell = ({setVisible, chosenCell}) => {

    return (
        <form className="edit-cell">
            <h2 className="edit-cell__title">Изменение значений</h2>
            <button className="edit-cell__close" type="button" onClick={() => setVisible(false)}>
                <i className="bi bi-x"></i>
            </button>



            <label className="modal-cells" htmlFor={headings[0].title}>
                <strong>{headings[0].title}</strong>
                {chosenCell.ordNumber}
            </label>

            <label className="modal-cells" htmlFor={headings[1].title}>
                <strong>{headings[1].title}</strong>
                {chosenCell.carNumber}
            </label>

            <label className="modal-cells" htmlFor={headings[2].title}>
                <strong>{headings[2].title}</strong>
                {chosenCell.trainIndex ? chosenCell.trainIndex: '-'}
            </label>

            <label className="modal-cells" htmlFor={headings[3].title}>
                <strong>{headings[3].title}</strong>
                <input value={chosenCell.trainNumber ? chosenCell.trainNumber: '-'} type="text"/>
            </label>

            <label className="modal-cells" htmlFor={headings[4].title}>
                <strong>{headings[4].title}</strong>
                {chosenCell.carStatus ? chosenCell.carStatus: '-'}
            </label>

            <label className="modal-cells" htmlFor={headings[5].title}>
                <strong>{headings[5].title}</strong>
                <input value={'date()'} type="text"/>
            </label>

            <label className="modal-cells" htmlFor={headings[6].title}>
                <strong>{headings[6].title}</strong>
                <input value={chosenCell.invoiceNumber} type="text"/>
            </label>

            <label className="modal-cells" htmlFor={headings[7].title}>
                <strong>{headings[7].title}</strong>
                <input value={chosenCell.invoiceId} type="text"/>
            </label>

            <label className="modal-cells" htmlFor={headings[8].title}>
                <strong>{headings[8].title}</strong>
                {chosenCell.stateId}
            </label>

            <div className="edit-cell__control">
                <MainButton className="btn edit-cell__save" type="submit">Ок</MainButton>
                <MainButton className="btn edit-cell__cancel" type="submit">Отмена</MainButton>
            </div>
        </form>
    );
};

export default EditCell;