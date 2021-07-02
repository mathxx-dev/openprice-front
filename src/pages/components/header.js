import React from 'react';
import Logo from '../../static/image/header/title/Logo.svg';
import Github from '../../static/image/header/title/Github.svg';
import Twitter from '../../static/image/header/title/Twitter.svg';
import Info from '../../static/image/header/title/Info.svg';
import CPU from '../../static/image/header/subheader/CPU.svg';
import GPU from '../../static/image/header/subheader/GPU.svg';
import Homepage from '../../static/image/header/subheader/Homepage.svg';
import Keyboard from '../../static/image/header/subheader/Keyboard.svg';
import Moba from '../../static/image/header/subheader/Moba.svg';
import SSD from '../../static/image/header/subheader/SSD.svg';

class Header extends React.Component {
    render() {
        return(
            <div className = 'navbar'>
                <div className = 'titleheader'>
                    <div className = 'social'>
                        <img className = 'social-icon' src = {Twitter} alt = 'Twitter'></img>
                        <img className = 'social-icon' src = {Github} alt = 'Github'></img>
                        <img className = 'social-icon' src = {Info} alt = 'Info'></img>
                    </div>
                    <div className = 'title'>
                        <img src = {Logo} alt = 'Logo'/>
                        <p className = 'title-text'>OpenPrice</p>
                    </div>
                </div>
                <div className = 'subheader'>
                    <a className = 'header-button button-active' href = '/'>
                        <img className = 'header-button-icon' alt = 'Inicio' src = {Homepage}/>
                    </a>
                    <a className = 'header-button' href = '/hardware/placa-mae'>
                        <img className = 'header-button-icon' alt = 'Moba' src = {Moba}/>
                    </a>
                    <a className = 'header-button' href = '/hardware/processador'>
                        <img className = 'header-button-icon' alt = 'CPU' src = {CPU}/>
                    </a>
                    <a className = 'header-button' href = '/hardware/placa-de-video'>
                        <img className = 'header-button-icon' alt = 'GPU' src = {GPU}/>
                    </a>
                    <a className = 'header-button' href = '/hardware/ssd'>
                        <img className = 'header-button-icon' alt = 'SSD' src = {SSD}/>
                    </a>
                    <a className = 'header-button' href = '/perifericos/'>
                        <img className = 'header-button-icon' alt = 'Periféricos' src = {Keyboard}/>
                    </a>
                </div>
            </div>
        )
    }
}
export default Header;