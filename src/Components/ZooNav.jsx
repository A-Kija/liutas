import { useState } from "react";


function ZooNav({ types, filter, reset, search, sort }) {

    const [filterValue, setFilterValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [sortValue, setSortValue] = useState('');

    const selectFilter = e => {
        setFilterValue(e.target.value);
        filter(e.target.value)
    }

    const selectSort = e => {
        setSortValue(e.target.value);
        sort(e.target.value)
    }

    const handleSearchValue = e => {
        setSearchValue(e.target.value);
        search(e.target.value)
    }

    const resetHandler = () => {
        reset();
        setFilterValue('');
        setSearchValue('');
        setSortValue('');
        sort('');
    }

    return (
        <div className="zoo__nav">
            <div className="zoo__nav__filter">
                <span>Animal Sort</span>
                <select onChange={selectSort} value={sortValue}>
                    <option value="">Select animal</option>
                    <option value="name_asc">By name - AZ</option>
                    <option value="name_desc">By name - ZA</option>
                    <option value="weight_asc">By weight - 19</option>
                    <option value="weight_desc">By weight - 91</option>
                </select>
            </div>
            <div className="zoo__nav__filter">
                <span>Animal Filter by type</span>
                <select onChange={selectFilter} value={filterValue}>
                    <option value="">Select animal</option>
                    {
                        types.map(t => <option key={t.type} value={t.type}>{t.type}</option>)
                    }
                </select>
            </div>
            <div className="zoo__nav__filter">
                <span>Animal Search by name</span>
                <input onChange={handleSearchValue} value={searchValue}></input>
            </div>
            <div className="zoo__nav__reset">
                <button onClick={resetHandler}>Reset</button>
            </div>
        </div>
    )
}

export default ZooNav;