import React, {useState} from 'react';
import './editCell.css';
import {headings} from "../tableHeader/TableHeader.jsx";
import MainButton from "../ui/button/MainButton.jsx";
import {dateFormat} from "../../services/date/dateFormatter.js";

const EditCell = ({setVisible, chosenCell}) => {
    const [trainNumber, setTrainNumber] = useState(chosenCell.trainNumber);
    const [date, setDate] = useState(dateFormat(chosenCell.lastOperDt));
    const [invoiceNumber, setInvoiceNumber] = useState(chosenCell.invoiceNumber);
    const [invoiceId, setInvoiceId] = useState(chosenCell.invoiceId);

    const editData = () => {

    }

    const cancelEdit = () => {
        setTrainNumber(chosenCell.trainNumber);
        setDate(dateFormat(chosenCell.lastOperDt));
        setInvoiceNumber(chosenCell.invoiceNumber);
        setInvoiceId(chosenCell.invoiceId);
    }
    // action="https://6356556e9243cf412f81f19c.mockapi.io/trains" method="post"
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
                {chosenCell.trainIndex ? chosenCell.trainIndex : '-'}
            </label>

            <label className="modal-cells" htmlFor={headings[3].title}>
                <strong>{headings[3].title}</strong>
                <input
                    value={chosenCell.trainNumber ? chosenCell.trainNumber : '-'}
                    onChange={(e) => setTrainNumber(e.target.value)}
                    type="text"
                    name={headings[3].title}
                    id={headings[3].title}
                />
            </label>

            <label className="modal-cells" htmlFor={headings[4].title}>
                <strong>{headings[4].title}</strong>
                {chosenCell.carStatus ? chosenCell.carStatus : '-'}
            </label>

            <label className="modal-cells" htmlFor={headings[5].title}>
                <strong>{headings[5].title}</strong>
                <input
                    value={dateFormat(chosenCell.lastOperDt) ? dateFormat(chosenCell.lastOperDt) : '-'}
                    onChange={(e) => setDate(e.target.value)}
                    type="text"
                    name={headings[5].title}
                    id={headings[5].title}
                />
            </label>

            <label className="modal-cells" htmlFor={headings[6].title}>
                <strong>{headings[6].title}</strong>
                <input
                    value={chosenCell.invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    type="text"
                    name={headings[6].title}
                    id={headings[6].title}
                />
            </label>

            <label className="modal-cells" htmlFor={headings[7].title}>
                <strong>{headings[7].title}</strong>
                <input
                    value={chosenCell.invoiceId}
                    onChange={(e) => setInvoiceId(e.target.value)}
                    type="text"
                    name={headings[7].title}
                    id={headings[7].title}
                />
            </label>

            <label className="modal-cells" htmlFor={headings[8].title}>
                <strong>{headings[8].title}</strong>
                {chosenCell.stateId}
            </label>

            <div className="edit-cell__control">
                <MainButton
                    className="btn edit-cell__save"
                    type="submit"
                >
                    Ок
                </MainButton>
                <MainButton
                    onClick={cancelEdit}
                    className="btn edit-cell__cancel"
                    type="button"
                >
                    Отмена
                </MainButton>
            </div>
        </form>
    );
};

export default EditCell;