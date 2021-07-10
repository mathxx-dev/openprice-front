import React from 'react';

import {ReactComponent as Logo} from '../../static/image/header/title/Logo.svg';

import {ReactComponent as InfoSVG} from '../../static/image/header/title/Info.svg';
import {ReactComponent as GithubSVG} from '../../static/image/header/title/Github.svg';
import {ReactComponent as TwitterSVG} from '../../static/image/header/title/Twitter.svg';

import {ReactComponent as HomeSVG} from '../../static/image/header/subheader/Homepage.svg';
import {ReactComponent as CpuSVG} from '../../static/image/header/subheader/CPU.svg';
import {ReactComponent as GpuSVG} from '../../static/image/header/subheader/GPU.svg';
import {ReactComponent as KeyboardSVG} from '../../static/image/header/subheader/Keyboard.svg';
import {ReactComponent as MobaSVG} from '../../static/image/header/subheader/Moba.svg';
import {ReactComponent as SSDSVG} from '../../static/image/header/subheader/SSD.svg';

class Header extends React.Component {
    render() {
        return(
            <div className = 'navbar'>
                <div className="header">
                    <div className="header__title">
                        <div className="title-header">
                            <a className="title-header__logo" href="/">
                                <Logo className="logo-svg" />
                                <span className="logo-text">OpenPrice</span>
                            </a>
                            <div className="title-header__social">
                                <a href="https://www.github.com" ><GithubSVG/></a>
                                <a href="https://www.twitter.com"><TwitterSVG/></a>
                                <a href="https://www.info.com"   ><InfoSVG/></a>
                            </div>
                        </div>
                    </div>
                    <div className="header__navigator">
                        <div className = 'navigator'>
                            <a href="/" className="navigator-button active" ><HomeSVG /></a>
                            <a href="/hardware/processador" className="navigator-button" ><CpuSVG /></a>
                            <a href="/hardware/placa-de-video" className="navigator-button" ><GpuSVG /></a>
                            <a href="/perifericos" className="navigator-button" ><KeyboardSVG /></a>
                            <a href="/hardware/placas-mae" className="navigator-button" ><MobaSVG /></a>
                            <a href="/hardware/ssd" className="navigator-button" ><SSDSVG /></a>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}
export default Header;