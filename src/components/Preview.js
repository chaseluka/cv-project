import React, { Component } from 'react';

class Preview extends Component {
  render() {
    const { name, phone, email, id } = this.props.info.personal;
    return (
      <div key={id}>
        <div>{name}</div>
        <div>{phone}</div>
        <div>{email}</div>
      </div>
    );
  }
}

export default Preview;
