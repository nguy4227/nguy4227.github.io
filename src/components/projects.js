import React, {Component} from 'react'
import { Row, Col } from 'antd';


const clickableStyles = { cursor: 'pointer', userSelect: 'none' }

class Showcase extends Component {
    state = { hover1: false, hover2: false }
    mouseOver1 = () => {
      this.setState({ hover1: true })
    }
    mouseOut1 = () => {
      this.setState({ hover1: false })
    }
    mouseOver2 = () => {
      this.setState({ hover2: true })
    }
    mouseOut2 = () => {
      this.setState({ hover2: false })
    }
    render() {
        return(
            <div>
                <Row gutter={16} style={{width:'100%'}}>
                    <Col span={12} style={{paddingLeft:'35px'}}>
                    <a href='https://azn-buzz.now.sh/'
                        onMouseOver={this.mouseOver1}
                        onMouseOut={this.mouseOut1} 
                    >
                                <h3
                                    style={{
                                        ...clickableStyles,
                                        opacity: this.state.hover1 ? 1.5 : 1,
                                        color: this.state.hover1 ? '#40A9FF' : 'black',
                                        transition:'.5s'
                                }}>
                                    AznBuzz
                                </h3>
                                <img 
                                    src={require('../images/aznbuzz.png')}
                                    style={{
                                        ...clickableStyles,
                                        opacity: this.state.hover1 ? 1.5 : 1,
                                        boxShadow: this.state.hover1 ? `1px 1px 2px white, 0 0 25px #40A9FF, 0 0 5px lightblue` 
                                                                       : `0 0 0 0`,
                                        transform: this.state.hover1 ? `scale(1.015)` : `scale(1.0)`,
                                        borderRadius: '10px',
                                        width:'40vw',
                                        height:'25vw',
                                        marginBottom:'1em',
                                        transition:'.5s',
                                        border:'1px dashed silver'
                                    }}/>
                                <Row>
                                    <Col span={4}></Col>
                                    <Col span={16}>
                                    <p style={{fontSize:'.8em'}}>
                                    Built using React & NextJS, the AznBuzz website is a simple no shenanigans landing page.
                                    </p>
                                    </Col>
                                    <Col span={4}></Col>
                                </Row>
                            </a>
                    </Col>
                    <Col span={12}>
                            <a href='http://yangalytics.com/'
                                onMouseOver={this.mouseOver2}
                                onMouseOut={this.mouseOut2} 
                            >
                                <h3 style={{
                                    ...clickableStyles,
                                    opacity: this.state.hover2 ? 1.5 : 1,
                                    color: this.state.hover2 ? '#40A9FF' : 'black',
                                    transition:'.5s'
                                }}>Yangalytics</h3>
                                <img 
                                    src={require('../images/yangalyticslogo.png')}
                                    style={{
                                        ...clickableStyles,
                                        opacity: this.state.hover2 ? 1.5 : 1,
                                        boxShadow: this.state.hover2 ? `1px 1px 2px white, 0 0 25px #40A9FF, 0 0 5px lightblue` 
                                                                       : `0 0 0 0`,
                                        transform: this.state.hover2 ? `scale(1.015)` : `scale(1.0)`,
                                        borderRadius: '10px',
                                        width:'40vw',
                                        height:'25vw',
                                        marginBottom:'1em',
                                        transition:'.5s',
                                        border:'1px dashed silver'
                                    }}/>
                                <Row>
                                    <Col span={4}></Col>
                                    <Col span={16}>
                                    <p style={{fontSize:'.8em'}}>
                                    Built using React & NextJS, Yangalytics pulls in request from multiple apis to populate the page with a myriad of data
                                    </p>
                                    </Col>
                                    <Col span={4}></Col>
                                </Row>
                            </a>
                    </Col>
                </Row> 
            </div>
        )
    }
}

export default Showcase