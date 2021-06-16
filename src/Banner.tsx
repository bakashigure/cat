import React, {Component} from 'react';
import './index.css';

let banner_title = <p> Catalog, log a cat.</p>;

class Banner extends Component <any> {
    render() {
        return (
            <div id="banner" className="banner">
                <div id="banner_title" className="banner_title">
                    {banner_title}
                </div>
            </div>
        )
    }
}


export {Banner};