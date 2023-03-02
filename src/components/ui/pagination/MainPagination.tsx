import React from "react";
import "./mainPagination.css";
import MainButton from "../button/MainButton";
import MainSelect from "../select/MainSelect";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Car} from "../../../types/cars";

type PropsMainPagination ={
    selectedPaginationNum: number,
    setSelectedPaginationNum: Function,
    page: number,
    totalPages: number,
    nextPage: Function,
    prevPage: Function,
    firstPaginatedItem: Car | null,
    lastPaginatedItem: Car | null
}

const MainPagination: React.FC<PropsMainPagination> = ({...props}: PropsMainPagination) => {
    const {cars} = useTypedSelector(state => state.cars);
    const {selectedPaginationNum, setSelectedPaginationNum, page, totalPages, nextPage, prevPage, firstPaginatedItem, lastPaginatedItem} = props;

    return (
        <div className="pagination">
            <span className="pagination__descr">Строк на странице:</span>
            <div className="select-wrapper">
                <MainSelect
                    options={[
                        {value: 5, name: '5'},
                        {value: 10, name: '10'}
                    ]}
                    value={selectedPaginationNum}
                    onChange={setSelectedPaginationNum}
                />
            </div>
            <span className="pagination__page">
                {`${firstPaginatedItem ? firstPaginatedItem.ordNumber : '-'}-${lastPaginatedItem ? lastPaginatedItem.ordNumber : '-'} из ${cars?.length}`}
            </span>
            <MainButton
                onClick={prevPage}
                className="btn pagination__arrow-left"
                type="button"
                disabled={page === 1}
            >
                <i className="bi bi-arrow-left"></i>
            </MainButton>
            <MainButton
                onClick={nextPage}
                className="btn pagination__arrow-right"
                type="button"
                disabled={page === totalPages}
            >
                <i className="bi bi-arrow-right"></i>
            </MainButton>
        </div>
    );
};

export default MainPagination;