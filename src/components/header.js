import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    state = {
        isTop: true,
        headerClassName: '',
        menuShow: false
    };
    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
            if (!this.state.isTop) {
                this.setState({headerClassName: 'header-scroll'});
            } else {
                this.setState({headerClassName: ''});
            }
        });
    }
    handleScroll = (stopY) => {
        var startY = window.scrollY;
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            window.scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 15) speed = 15;
        var step = Math.round(distance /100);
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
    menuBtnClick=(e)=> {
        e.preventDefault();
        e.stopPropagation();
        const body = document.getElementsByTagName('body');
        if (this.state.menuShow) {
            this.setState({
                menuShow: false
            })
        }
        else {
            this.setState({
                menuShow: true
            })
        }
        if (!this.state.menuShow) {
            body[0].classList.add('menu-open');
        }
        else {
            body[0].classList.remove('menu-open');
        }
    }
    clickFunc=()=>{
        this.setState({
            menuShow: false
        })
        const body = document.getElementsByTagName('body');
        if (!this.state.menuShow) {
            body[0].classList.add('menu-open');
        }
        else {
            body[0].classList.remove('menu-open');
        }
    }
    render() {
        return (
            <>
            <header className={this.state.headerClassName}>
                <div className="container">
                    <Link to={'/'} className="logo">Sato Takeru</Link>
                    <nav>
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><Link to={'/contact'}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div id="menu_icon" onClick={this.menuBtnClick} className={`${this.state.menuShow?"change":""} ${this.state.headerClassName}`}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div id="menu" className={this.state.menuShow?"menu-show":""}>
                <div>
                    <Link onClick={this.clickFunc} to={'/'}>Home</Link>
                    <Link onClick={this.clickFunc} to={'/about'}>About</Link>
                    <Link onClick={this.clickFunc} to={'/contact'}>Contact</Link>
                </div>
            </div>
            <button onClick={(e)=>{this.handleScroll(0)}} className={this.state.isTop? "to-top":"to-top show-to-top"}>&#8593;</button>
            </>
        );
    }
}

export default Header;