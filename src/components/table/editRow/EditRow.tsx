import React, {FormEvent, useState} from "react";
import "./editRow.css";
import MainButton from "../../ui/button/MainButton.jsx";
import {headings} from "../tableHeader/headings.js";
import {Car} from "../../../types/cars";
import {useDispatch} from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import ru from 'date-fns/locale/ru';

type PropsEditRow = {
    cars: Car[],
    findCar: number,
    setVisible: Function
}

const EditRow: React.FC<PropsEditRow> = ({cars, findCar, setVisible}: PropsEditRow) => {
    const [currentRow, setCurrentRow] = useState(cars.find(item => item.ordNumber === findCar));
    const dispatch = useDispatch();

    const [trainNumber, setTrainNumber] = useState<string | undefined>(currentRow?.trainNumber);
    const [startDate, setStartDate] = useState<string | Date | undefined | null>(currentRow?.lastOperDt);
    const [invoiceNumber, setInvoiceNumber] = useState<string | undefined>(currentRow?.invoiceNumber);
    const [invoiceId, setInvoiceId] = useState<string | undefined>(currentRow?.invoiceId);

    const editRow = (e: FormEvent, id: number, trainNumber: string | undefined, time: string | Date | undefined, invoiceNumber: string | undefined, invoiceId: string | undefined) => {
        e.preventDefault();

        let dateToStr;

        if (typeof time === 'object' && time !== null && 'toISOString' in time) {
            dateToStr = time.toISOString();
        }

        dispatch({
            type: 'EDIT_CAR', payload: {
                id,
                trainNumber,
                time: dateToStr,
                invoiceNumber,
                invoiceId
            }
        })
        setVisible(false);
    }

    const cancelEdit = () => {
        setTrainNumber(currentRow?.trainNumber);
        setStartDate(currentRow?.lastOperDt);
        setInvoiceNumber(currentRow?.invoiceNumber);
        setInvoiceId(currentRow?.invoiceId);
        setVisible(false);
    }

    // @ts-ignore
    // @ts-ignore
    return (
        <form
            className="edit-cell"
            onSubmit={(e) => editRow(e, findCar, trainNumber, startDate, invoiceNumber, invoiceId)}
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
                <DatePicker
                    dateFormat="dd.MM.yyyy HH:mm"
                    selected={new Date(startDate)}
                    onChange={(date) => setStartDate(date)}
                    locale={ru}
                    showTimeSelect
                    timeIntervals={15}
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