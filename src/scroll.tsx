import React from 'react';
import jquery from 'jquery';

declare var $: any;

function test() {
    $(window).scroll(function () {
        let scrollTop: number = $(window).scrollTop();
        if (scrollTop >0) {
            console.log("yes!")
            $("#banner").animate({
                    height: "40px",

                }
            )
            $("#banner_title").animate({


                    'font-size':"50px",

                }
            )
            $("#banner_title").css("color","red")

        } else if (scrollTop == 0) {
            console.log("set >= 500")
            $("#banner2").animate({
                height: "100px",
            })
        }

        console.log((scrollTop))
    });
}

export default test
