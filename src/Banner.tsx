import React, {Component} from 'react';
import './App.css';
// test

let banner_title = <p> Catalog, log a cat.</p>;

class Banner extends Component <any>{
    render() {
        return (
            <div id="banner" className="Banner">
                    <div id="banner_title" className="banner_title" >
                        {banner_title}
                    </div>

            </div>
        )
    }
}


export {Banner};