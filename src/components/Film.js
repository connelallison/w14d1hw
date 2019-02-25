import React, { Component } from 'react';

class Film extends Component {
  render(){
    return (
      <a className="film" href={this.props.url}><li>{this.props.children}</li></a>
    );
  }
}

export default Film;
