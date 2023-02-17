import React, {FormEvent, useState} from "react";
import "./editRow.css";
import MainButton from "../../ui/button/MainButton.jsx";
import {dateFormatting, strToDate} from "../../../services/date/dateFormatter.js";
import {headings} from "../tableHeader/headings.js";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const EditRow: React.FC = () => {
    const currentRow = useTypedSelector(state => state.cars.currentRow);
    const dispatch = useDispatch();

    const [trainNumber, setTrainNumber] = useState(currentRow?.trainNumber);
    const [date, setDate] = useState(currentRow?.lastOperDt);
    const [invoiceNumber, setInvoiceNumber] = useState(currentRow?.invoiceNumber);
    const [invoiceId, setInvoiceId] = useState(currentRow?.invoiceId);

    const editRow = (e: FormEvent, trainsNumber: string, time: string, invoiceNumber: string, invoiceId: string) => {
        e.preventDefault();
        dispatch({type: 'EDIT_ROW', payload: {id: currentRow?.ordNumber, trainNumber, time, invoiceNumber, invoiceId}});
    }

    const toDateFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(strToDate(e.target.value));
    }

    const cancelEdit = () => {
        setTrainNumber(currentRow?.trainNumber);
        setDate(dateFormatting(currentRow.lastOperDt));
        setInvoiceNumber(currentRow?.invoiceNumber);
        setInvoiceId(currentRow?.invoiceId);
        dispatch({type: 'CANCEL_EDIT', payload: false});
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

            <label className="modal-cells" htmlFor={headings[0].columnTitle}>
                <strong>{headings[0].columnTitle}</strong>
                {currentRow?.ordNumber}
            </label>

            <label className="modal-cells" htmlFor={headings[1].columnTitle}>
                <strong>{headings[1].columnTitle}</strong>
                {currentRow?.carNumber}
            </label>

            <label className="modal-cells" htmlFor={headings[2].columnTitle}>
                <strong>{headings[2].columnTitle}</strong>
                {currentRow?.trainIndex ? currentRow?.trainIndex : '-'}
            </label>

            <label className="modal-cells" htmlFor={headings[3].columnTitle}>
                <strong>{headings[3].columnTitle}</strong>
                <input
                    value={trainNumber ? trainNumber : '-'}
                    onChange={(e) => setTrainNumber(e.target.value)}
                    type="text"
                    name={headings[3].columnTitle}
                    id={headings[3].columnTitle}
                />
            </label>

            <label className="modal-cells" htmlFor={headings[4].columnTitle}>
                <strong>{headings[4].columnTitle}</strong>
                {currentRow?.carStatus ? currentRow?.carStatus : '-'}
            </label>

            <label className="modal-cells" htmlFor={headings[5].columnTitle}>
                <strong>{headings[5].columnTitle}</strong>
                <input
                    value={dateFormatting(date)}
                    onChange={(e) => toDateFormat(e)}
                    type="text"
                    name={headings[5].columnTitle}
                    id={headings[5].columnTitle}
                />
            </label>

            <label className="modal-cells" htmlFor={headings[6].columnTitle}>
                <strong>{headings[6].columnTitle}</strong>
                <input
                    value={invoiceNumber ? invoiceNumber : '-'}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    type="text"
                    name={headings[6].columnTitle}
                    id={headings[6].columnTitle}
                />
            </label>

            <label className="modal-cells" htmlFor={headings[7].columnTitle}>
                <strong>{headings[7].columnTitle}</strong>
                <input
                    value={invoiceId ? invoiceId : '-'}
                    onChange={(e) => setInvoiceId(e.target.value)}
                    type="text"
                    name={headings[7].columnTitle}
                    id={headings[7].columnTitle}
                />
            </label>

            <label className="modal-cells" htmlFor={headings[8].columnTitle}>
                <strong>{headings[8].columnTitle}</strong>
                {currentRow?.stateId}
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