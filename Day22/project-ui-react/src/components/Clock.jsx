import React, { Component } from 'react'  
import Clock from 'react-clock'
export class ClockDemo extends Component {  
  state = {  
    date: new Date(),  
  }  
  
  componentDidMount() {  
    setInterval(  
      () => this.setState({ date: new Date() }),  
      3000  
    );  
  }  
  render() {  
    return (  
      <div className="container">  
        <div class="row" className="hdr">  
        </div>  
        <div className="clk">  
          <Clock  
            value={this.state.date}  
          />  
        </div>  
      </div>  
    )  
  }  
}  
  
export default ClockDemo