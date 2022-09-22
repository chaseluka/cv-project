import React, { Component } from 'react';
import Preview from './Preview';
import uniqid from 'uniqid';
import '../style/General.css';

class General extends Component {
  constructor() {
    super();

    this.state = {
      personal: {
        name: '',
        phone: '',
        email: '',
        id: uniqid(),
        submit: false,
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
        id: this.state.personal.id,
        submit: false,
      },
    });
  };

  onSubmitInfo = (e) => {
    e.preventDefault();
    this.setState({
      personal: {
        name: this.state.personal.name,
        phone: this.state.personal.phone,
        email: this.state.personal.email,
        id: this.state.personal.id,
        submit: true,
      },
    });
  };

  edit = () => {
    this.setState(
      {
        personal: {
          name: this.state.personal.name,
          phone: this.state.personal.phone,
          email: this.state.personal.email,
          id: this.state.personal.id,
          submit: false,
        },
      },
      () => {
        this.displayInfo();
      },
    );
  };

  displayInfo = () => {
    document.getElementById('name').value = this.state.personal.name;
    document.getElementById('phone').value = this.state.personal.phone;
    document.getElementById('email').value = this.state.personal.email;
  };

  render() {
    const info = this.state;
    return (
      <div>
        {(() => {
          if (this.state.personal.submit) {
            return (
              <div>
                <Preview info={info} />
                <button onClick={this.edit}>Edit</button>
              </div>
            );
          }
          return (
            <form onSubmit={this.onSubmitInfo} className="form">
              <div className="general-form">
                <input onChange={this.handleChange} value={info.name} type="text" id="name" placeholder="First and Last Name" />
                <input onChange={this.handleChange} value={info.phone} type="text" id="phone" placeholder="Phone" />
                <input onChange={this.handleChange} value={info.email} type="text" id="email" placeholder="Email" />
              </div>
              <button type="submit">Save General Info</button>
            </form>
          );
        })()}
      </div>
    );
  }
}

export default General;
