import React from 'react';
import './App.css';
// test

let banner_title= <p> cats in phone</p>;

function Banner(){
    return(
        <div className="Banner">
            <header className="Banner-header">
                    {banner_title}
                <img src="./ice_cream.gif" alt="cat"> </img>
            </header>
        </div>
    )
}
export default Banner;