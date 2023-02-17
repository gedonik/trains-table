import React, {useMemo, useState} from "react";
import "./mainSearch.css";
import MainButton from "../button/MainButton";
import {useDispatch} from "react-redux";

const MainSearch: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    useMemo(() => {
        dispatch({type: 'SEARCH', payload: searchValue});
    }, [searchValue]);

    return (
        <form className="form-search" onSubmit={(e) => e.preventDefault()}>
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