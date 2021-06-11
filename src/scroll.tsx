import React from 'react';
import jquery from 'jquery';
declare var $: any;
function test() {
    $(window).scroll(function () {
        var scrollTop:any=$(window).scrollTop();
        console.log((scrollTop))
    });
}
export default test
