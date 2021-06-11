import React, {Component} from 'react';
import './App.css';
// test

let banner_title = <p> Catalog, log a cat.</p>;

class Banner extends Component <any>{
    render() {
        return (
            <div className="Banner">
                <header className="Banner-header">
                    <div className={this.props.className} >
                        {banner_title}
                    </div>
                </header>
            </div>
        )
    }
}


export {Banner};