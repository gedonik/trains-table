import React, {useState} from 'react';
import './editRow.css';
import MainButton from "../../ui/button/MainButton.tsx";
import {dateFormatting} from "../../../services/date/dateFormatter.ts";
import {headings} from "../tableHeader/headings.ts";

const EditRow = ({setVisible, currentRow, changeRow}) => {
    const [trainNumber, setTrainNumber] = useState(currentRow.trainNumber);
    const [date, setDate] = useState(dateFormatting(currentRow.lastOperDt));
    const [invoiceNumber, setInvoiceNumber] = useState(currentRow.invoiceNumber);
    const [invoiceId, setInvoiceId] = useState(currentRow.invoiceId);

    const editRow = (e, trainsNumber, date, invoiceNumber, invoiceId) => {
        e.preventDefault();
        changeRow(currentRow.ordNumber, trainNumber, date, invoiceNumber, invoiceId)
        setVisible(false);
    }

    const cancelEdit = () => {
        setTrainNumber(currentRow.trainNumber);
        setDate(dateFormatting(currentRow.lastOperDt));
        setInvoiceNumber(currentRow.invoiceNumber);
        setInvoiceId(currentRow.invoiceId);
        setVisible(false);
    }

    return (
        <form
            className="edit-cell"
            onSubmit={(e) => editRow(e, trainNumber, date, invoiceNumber, invoiceId)}
        >
            <h2 className="edit-cell__title">Изменение значений</h2>
            <button className="edit-cell__close" type="button" onClick={() => cancelEdit()}>
                <i className="bi bi-x"></i>
            </button>

            <label className="modal-cells" htmlFor={headings[0].title}>
                <strong>{headings[0].title}</strong>
                {currentRow.ordNumber}
            </label>

            <label className="modal-cells" htmlFor={headings[1].title}>
                <strong>{headings[1].title}</strong>
                {currentRow.carNumber}
            </label>

            <label className="modal-cells" htmlFor={headings[2].title}>
                <strong>{headings[2].title}</strong>
                {currentRow.trainIndex ? currentRow.trainIndex : '-'}
            </label>

            <label className="modal-cells" htmlFor={headings[3].title}>
                <strong>{headings[3].title}</strong>
                <input
                    value={trainNumber ? trainNumber : '-'}
                    onChange={(e) => setTrainNumber(e.target.value)}
                    type="text"
                    name={headings[3].title}
                    id={headings[3].title}
                />
            </label>

            <label className="modal-cells" htmlFor={headings[4].title}>
                <strong>{headings[4].title}</strong>
                {currentRow.carStatus ? currentRow.carStatus : '-'}
            </label>

            <label className="modal-cells" htmlFor={headings[5].title}>
                <strong>{headings[5].title}</strong>
                <input
                    value={date ? date : '-'}
                    onChange={(e) => setDate(e.target.value)}
                    type="text"
                    name={headings[5].title}
                    id={headings[5].title}
                />
            </label>

            <label className="modal-cells" htmlFor={headings[6].title}>
                <strong>{headings[6].title}</strong>
                <input
                    value={invoiceNumber ? invoiceNumber : '-'}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    type="text"
                    name={headings[6].title}
                    id={headings[6].title}
                />
            </label>

            <label className="modal-cells" htmlFor={headings[7].title}>
                <strong>{headings[7].title}</strong>
                <input
                    value={invoiceId ? invoiceId : '-'}
                    onChange={(e) => setInvoiceId(e.target.value)}
                    type="text"
                    name={headings[7].title}
                    id={headings[7].title}
                />
            </label>

            <label className="modal-cells" htmlFor={headings[8].title}>
                <strong>{headings[8].title}</strong>
                {currentRow.stateId}
            </label>

            <div className="edit-cell__control">
                <MainButton
                    className="btn edit-cell__save"
                    type="submit"
                >
                    Ок
                </MainButton>
                <MainButton
                    onClick={() => cancelEdit()}
                    className="btn edit-cell__cancel"
                    type="button"
                >
                    Отмена
                </MainButton>
            </div>
        </form>
    );
};

export default EditRow;