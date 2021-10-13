import React, { Component } from "react";

class ScrollBanner extends Component {
    
    handleScroll = (stopY) => {
        var startY = window.scrollY;
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            window.scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 15) speed = 15;
        var step = Math.round(distance /60);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY) leapY = stopY;
                timer++;
            }
            return;
        }
        for (i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY) leapY = stopY;
            timer++;
        }
    }
    render() {
        return(
            <>
                <button onClick={(e)=>{this.handleScroll(window.innerHeight)}} className="scroll-banner">
                    <div></div>
                </button>
            </>
        );
    }
}

export default ScrollBanner;