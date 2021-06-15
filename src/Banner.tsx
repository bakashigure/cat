import React, {Component} from 'react';
import './App.css';
// test

let banner_title = <p> Catalog, log a cat.</p>;

class Banner extends Component <any>{
    render() {
        return (
            <div id="banner2" className="Banner">

                    <div id="test" className={this.props.className} >
                        {banner_title}
                    </div>

            </div>
        )
    }
}


export {Banner};