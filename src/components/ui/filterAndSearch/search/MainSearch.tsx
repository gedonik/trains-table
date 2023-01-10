import React, {FormEvent, useMemo, useState} from 'react';
import './mainSearch.css';
import MainButton from "../../button/MainButton";
import {DataType} from "../../../../globalTypes";

const MainSearch = ({data}: DataType) => {
    const [searchValue, setSearchValue] = useState('')

    const handlerSearch = (e: FormEvent) => {
        e.preventDefault();
        setSearchValue('');
    }

    // const searchedData = useMemo(() => {
    //     return data.filter(item => item.carNumber.toLowerCase().includes(searchValue.toLowerCase()))
    // }, [searchValue])

    return (
        <form className="form-search" onSubmit={(e) => handlerSearch(e)}>
            <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="form-search__input"
                type="text"
                placeholder="Введите номер вагона"
            />
            <MainButton className="btn form-search__btn" type="submit">
                <i className="bi bi-search"></i>
            </MainButton>
        </form>
    );
};

export default MainSearch;