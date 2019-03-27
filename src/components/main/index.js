import React from 'react';


const Header = (props) => (

    <div className='head'>
        <img className='App-logo' src={require("../../../src/me.jpg")} alt=''/>
        <p></p>
    </div>
)

class Body extends React.Component {
    state = {hover: false}
    state = {fade: false}
    render () { 
        let icon = 'fas fa-arrow-right'
        icon = this.state.hover === true ? 'fas fa-arrow-right rotateDown' : 'fas fa-arrow-right rotateBack'

        let nameFade = 'name'
        nameFade = this.state.fade === true ? 'nameHover' : 'name'


        return (
            <div className='bod'>
            <p>Hi, I'm <strong onMouseOver={() => this.setState({fade: true})} onMouseLeave={() => this.setState({fade: false})} className={nameFade}>Long Nguyen</strong>.</p>
            <p>I'm a Full-stack Developer</p>
            <button 
                onMouseOver={() => this.setState({hover: true})} onMouseLeave={() => this.setState({hover: false})} className='About btn btn-outline-primary btn-sm'
            >
                Learn more about me <i className={icon}></i>
            </button>
            </div>
        )
    }
}

const Footer = (props) => (
    <div className='foot'>
    <p>Connect with me!</p>
    <a href="https://www.linkedin.com/in/long-nguyen-a3b6326a"><i className="fab fa-linkedin social"></i></a>
    <a href="https://github.com/nguy4227"><i className="fab fa-github-square social"></i></a>
    <a href=""><i className="fas fa-envelope-square social"></i></a>
    </div>
)

export {
    Header,
    Body,
    Footer,
}