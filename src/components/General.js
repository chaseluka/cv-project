import React, { Component } from 'react';

class General extends Component {
  constructor() {
    super();

    this.state = {
      personal: {
        name: '',
        phone: '',
        email: '',
      },
    };
  }

  phone = (id, e) => {
    if (id === 'phone') return e.target.value;
    return this.state.personal.phone;
  };

  email = (id, e) => {
    if (id === 'email') return e.target.value;
    return this.state.personal.email;
  };

  name = (id, e) => {
    if (id === 'name') return e.target.value;
    return this.state.personal.name;
  };

  handleChange = (e) => {
    const id = e.target.id;
    this.setState({
      personal: {
        name: this.name(id, e),
        phone: this.phone(id, e),
        email: this.email(id, e),
      },
    });
    console.log(this.state.personal.name);
  };

  onSubmitInfo = (e) => {
    e.preventDefault();
    this.setState({
      personal: {
        name: '',
        phone: '',
        email: '',
      },
    });
  };

  render() {
    const info = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitInfo}>
          <input onChange={this.handleChange} value={info.name} type="text" id="name" placeholder="First and Last Name" />
          <input onChange={this.handleChange} value={info.phone} type="text" id="phone" placeholder="Phone" />
          <input onChange={this.handleChange} value={info.email} type="text" id="email" placeholder="Email" />
          <button type="submit">Save General Info</button>
        </form>
      </div>
    );
  }
}

export default General;
