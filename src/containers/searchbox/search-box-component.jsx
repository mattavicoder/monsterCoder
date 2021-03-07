import React from 'react'
import './search-box-style.css'


export const SearchBox = ({placeHolder, handleChange}) => {
    return <div className="search"> <input type="search" placeholder={placeHolder} onChange={handleChange} /></div>
}