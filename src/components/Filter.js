import React from 'react'

const Filter = ({handleOnSubmit, searchValue, handleOnChange, rating}) => {
    return (
        <div>
            <header className='header'>
                <h1>MOVIVY</h1>
                <form onSubmit={handleOnSubmit}>
                    <input 
                    className='search'
                    type='search'
                    placeholder='Search'
                    value={searchValue}
                    onChange={handleOnChange}
                    />
                </form>
                <select className='rating' onChange={rating}>
                    <option> Rating: </option>
                    <option value='1'> 1 </option>
                    <option value='2'> 2 </option>
                    <option value='3'> 3 </option>
                    <option value='4'> 4 </option>
                    <option value='5'> 5 </option>
                </select>
            </header>
        </div>
    )
}

export default Filter
