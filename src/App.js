import React, { Component } from 'react';
import {Header, Body, Footer} from './components/main';
import Modal from './components/Modal.js';
import LightboxExample from './components/LightBox';
import './App.css';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'white',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
class App extends Component {
  state = { showModal: false }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Body />
        </header>
        <div id='projects' style={styles.container} className="App-projects">
          <h1 className="projectsTitle">Projects</h1>
          <h2>MIPI</h2>
          <Clickable onClick={() => this.setState({showModal: true})}>
            <Title>
              <LightboxExample/>
            </Title>
          </Clickable>
          {/* {this.state.showModal && 
          <Modal onClose={() => this.setState({showModal: false})}>
            <Carousel>
              <img src={require("./images/home.png")} alt='' />
              <img src={require("./images/menu.png")} alt='' />
              <img src={require("./images/feed.png")} alt='' />
              <img src={require("./images/profile.png")} alt='' />
              <img src={require("./images/settings.png")} alt='' />
            </Carousel>
          </Modal>} */}
        </div>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

const titleStyles = {fontSize: 20, textTransform: 'uppercase', letterSpacing: 6}
const Title = ({children}) => <div style={titleStyles}>{children}</div>


const clickableStyles = { cursor: 'pointer', userSelect: 'none' }
class Clickable extends Component {
  state = { hover: false, down: false }
  mouseOver = () => {
    this.setState({ hover: true })
  }
  mouseOut = () => {
    this.setState({ hover: false })
  }
  mouseDown = () => {
    this.setState({ down: true })
  }
  mouseUp = () => {
    this.setState({ down: false })
  }
  render() {
    return (
      <div 
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut} 
        onMouseDown={this.mouseDown} 
        onMouseUp={this.mouseUp}
        onClick={this.props.onClick}
        style={{
          ...clickableStyles,
          color: this.state.down ? 'goldenrod' : 'black',
          opacity: this.state.hover ? 1.5 : 1,
          boxShadow: this.state.hover ? `1px 1px 2px black, 0 0 25px blue, 0 0 5px lightblue` 
                                         : `0 0 0 0`,
          transform: this.state.hover ? `scale(1.015)` : `scale(1.0)`,
          borderRadius: '10px'
        }}
        >
        {this.props.children}</div>
    )
  }
}

export default App;
