import React from 'react';
import jquery from 'jquery';
import {start} from "repl";

declare var $: any;

function scroll() {

    let toolbar: any = document.getElementById("banner");
    let $bannerContainer = $("#banner");


    let startTransitionHeight: number;
    let endTransitionHeight: number;

    startTransitionHeight = 21;
    endTransitionHeight = 371


    function changeToolbarTransparency() {
        let scrollTop = $(window).scrollTop();
        if (scrollTop < startTransitionHeight) {
            toolbar.style.setProperty('background-color', 'blue, 0)', 'important');
            toolbar.style.setProperty('box-shadow', 'none');
            toolbar.classList.add("navbar-ontop");
            return;
        }
        if (scrollTop > endTransitionHeight) {
            toolbar.style.setProperty('background-color', 'blue, 0.85)', 'important');
            toolbar.style.setProperty('box-shadow', '');
            toolbar.classList.remove("navbar-ontop");
            return;
        }
        let transparency = scrollTop/1000;
        toolbar.style.setProperty('background-color', 'blue, ' + transparency, 'important');
        toolbar.style.setProperty('box-shadow', '');
        toolbar.classList.remove("navbar-ontop");
    }

    changeToolbarTransparency();
    document.addEventListener("scroll", changeToolbarTransparency, {passive: true});

    /*
        let _banner:any = $("#banner")
        let _banner_title:any = $("banner_title")

        let startTransHeight = 75


        $(window).scroll(function () {
            let scrollTop: number = $(window).scrollTop();
            //console.log("startT:",startTransHeight)
            if (scrollTop < startTransHeight) { //   < 75

                _banner.animate({
                        height: "120px",

                    }
                )
                _banner_title.animate({
                        'font-size':"50px",
                    }
                )
                _banner_title.css("color","red")
                return

            } else if (scrollTop > 70) {
                console.log("set >= 500")
                _banner.animate({
                    height: "50px",

                })

                _banner_title.css("font-size","40px","color","red")
                return

            }

            console.log((scrollTop))
        });
    }
     */
}
export default scroll
