import React, {useState} from 'react';
import TableHeader from "../tableHeader/TableHeader.jsx";
import TableCell from "../tableCell/TableCell.jsx";
import './table.css';
import EditCellsModal from "../ui/modal/EditCellsModal.jsx";
import EditCell from "../editCell/EditCell.jsx";

const Table = ({data, sortColumns, getClassNamesFor, modal, setModal}) => {
    const [chosenCell, setChosenCell] = useState({});

    const currentCell = (cell) => {
        setModal(true);
        setChosenCell(cell);
    }

    return (
        data
            ?
            <>
                <table>
                    <TableHeader sortColumns={sortColumns} getClassNamesFor={getClassNamesFor}/>
                    <tbody>
                    {data.map(dat =>
                        <tr onClick={() => currentCell(dat)} key={dat.ordNumber}>
                            <TableCell cell={dat}/>
                        </tr>
                    )}
                    </tbody>
                </table>
                <EditCellsModal visible={modal} setVisible={setModal}>
                    <EditCell chosenCell={chosenCell} setVisible={setModal}/>
                </EditCellsModal>
            </>
            :
            <h2>No data</h2>
    );
};

export default Table;