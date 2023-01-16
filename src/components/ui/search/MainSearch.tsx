import React, {FormEvent} from 'react';
import './mainSearch.css';
import MainButton from "../button/MainButton";

type PropsMainSearchType = {
    searchValue: any,
    setSearchValue: Function
}

const MainSearch = ({searchValue, setSearchValue}: PropsMainSearchType) => {
      const handlerSearch = (e: FormEvent) => {
        e.preventDefault();
        setSearchValue('');
    }

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