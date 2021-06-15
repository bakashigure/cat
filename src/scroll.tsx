import React from 'react';
import jquery from 'jquery';
declare var $: any;
function test() {

    $(window).scroll(function () {
        let scrollTop: number = $(window).scrollTop();
        if (scrollTop.toString()=="0"){
            console.log("yes!")
            $("#banner3").animate({
                height:"50px",
                }
            )
        }

        console.log((scrollTop))
    });
}
export default test
