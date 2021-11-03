import { useState } from "react";

function ZooNav({ types, filter, reset, search}) {

    const [filterValue, setFilterValue] = useState('');
    const [searchValue, setSearchValue] = useState('');

    const selectFilter = e => {
        setFilterValue(e.target.value);
        filter(e.target.value)
    }

    const handleSearchValue = e => {
        console.log(e)
        setSearchValue(e.target.value);
        search(e.target.value)
    }

    const resetHandler = () => {
        reset();
        setFilterValue('');
    }

    return (
        <div className="zoo__nav">
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