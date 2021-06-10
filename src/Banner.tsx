import React from 'react';
import './App.css';
// test

let banner_title = <p> Catalog, log a cat.</p>;

function Banner() {
    return (
        <div className="Banner">

            <div className="Banner">
                <header className="Banner-header">
                    {banner_title}
                </header>

            </div>

            <div className="Banner">
            <img src="ice_cream.gif" alt="ice_cream" />
            </div>
        </div>
    )
}

export default Banner;