import React, { Component } from 'react';

class Preview extends Component {
  constructor(props) {
    super();

    this.state = {
      personal: {
        name: '',
        phone: '',
        email: '',
      },
    };
  }
}

export default Preview;
