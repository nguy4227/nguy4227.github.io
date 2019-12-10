import React from 'react';
import { Col, Row } from 'antd'


const Header = (props) => (

    <div className='head'>
        <img className='App-logo' src={require("../../../src/me.jpg")} alt=''/>
        <p></p>
    </div>
)

class Body extends React.Component {
    state = {hover: false, fade: false}

    OnLinkClick() {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth'});
    }
    render () { 
        let icon = 'fas fa-arrow-right'
        icon = this.state.hover === true ? 'fas fa-arrow-right rotateDown' : 'fas fa-arrow-right rotateBack'

        let nameFade = 'name'
        nameFade = this.state.fade === true ? 'nameHover' : 'name'


        return (
            <div className='bod'>
            <p>Hi, I'm <strong onMouseOver={() => this.setState({fade: true})} onMouseLeave={() => this.setState({fade: false})} className={nameFade}>Long Nguyen</strong></p>
            <p>And I'm a Front End Developer</p>
            <button
                onClick = {this.OnLinkClick}
                onMouseOver={() => this.setState({hover: true})} 
                onMouseLeave={() => this.setState({hover: false})} 
                className='aboutBt btn btn-outline-primary btn-sm'
            >
                Check Out My Work <i className={icon}></i>
            </button>
            </div>
        )
    }
}

const Footer = (props) => (
        <Row className='foot' style={{width:'100%'}}>
            <Col span={12} style={{padding:'1em'}}>
                <h3 style={{color:'white', opacity:'0.8'}}>About</h3>
                    <p style={{fontSize:'15px'}}>
                        I'm a front-end developer with a passion for
                        creating visually appealing designs with a simplistic
                        yet functional user experience.
                    </p>
            </Col>
            <Col span={12}style={{padding:'1em'}}>
                <h3 style={{color:'white', opacity:'0.8'}}>Connect with me!</h3>
                <a href="https://www.linkedin.com/in/long-nguyen-a3b6326a"><i className="fab fa-linkedin social"></i></a>
                <a href="https://github.com/LongPNguyen"><i className="fab fa-github-square social"></i></a>
            </Col>
        </Row>
)

export {
    Header,
    Body,
    Footer,
}