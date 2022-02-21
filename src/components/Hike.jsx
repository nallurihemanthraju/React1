import React, { Component } from 'react';

class Hike extends Component {
    state={
        Message:'good morning'
    }
    onClickEventHandler=(msg)=>{
        this.setState=({
            Message:msg
        })
    }
  render() { 
      return <>
    <div className='container'>
        <div className='row'>
          <div className="col-md-8">
              <h3>{this.state.Message}</h3>
          </div>
        </div>
        <div className="row">
            <button className='btn-btn-primary mr-3' onClick={this.onClickEventHandler.bind(this,'Godmorning')}>GM</button>
            <button className='btn-btn-Success  mr-3' onClick={this.onClickEventHandler.bind(this,'Good afternoon')}>GA</button>
            <button className='btn btn-danger' onClick={this.onClickEventHandler.bind(this,'GOOD Evening')}>GE</button>
        </div>
      </div>
    
    </>
  
    }
}

export default Hike
