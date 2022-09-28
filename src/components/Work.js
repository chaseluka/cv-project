import React, { Component } from 'react';
import Preview from './Preview';
import uniqid from 'uniqid';
import '../style/Work.css';

class Work extends Component {
  constructor() {
    super();

    this.state = {
      work: {
        role: '',
        company: '',
        year: '',
        notes: '',
        id: uniqid(),
        submit: false,
      },
    };
  }

  notes = (id, e) => {
    if (id === 'notes') return e.target.value;
    return this.state.work.notes;
  };

  year = (id, e) => {
    if (id === 'year') return e.target.value;
    return this.state.work.year;
  };

  role = (id, e) => {
    if (id === 'role') return e.target.value;
    return this.state.work.role;
  };

  company = (id, e) => {
    if (id === 'company') return e.target.value;
    return this.state.work.company;
  };

  handleChange = (e) => {
    const id = e.target.id;
    this.setState({
      work: {
        role: this.role(id, e),
        company: this.company(id, e),
        year: this.year(id, e),
        notes: this.notes(id, e),
        id: this.state.work.id,
        submit: false,
      },
    });
  };

  onSubmitInfo = (e) => {
    e.preventDefault();
    this.setState({
      work: {
        role: this.state.work.role,
        company: this.state.work.company,
        year: this.state.work.year,
        notes: this.state.work.notes,
        id: this.state.work.id,
        submit: true,
      },
    });
  };

  edit = () => {
    this.setState(
      {
        work: {
          role: this.state.work.role,
          company: this.state.work.company,
          year: this.state.work.year,
          notes: this.state.work.notes,
          id: this.state.work.id,
          submit: false,
        },
      },
      () => {
        this.displayInfo();
      },
    );
  };

  displayInfo = () => {
    document.getElementById('role').value = this.state.work.role;
    document.getElementById('company').value = this.state.work.company;
    document.getElementById('year').value = this.state.work.year;
    document.getElementById('notes').value = this.state.work.notes;
  };

  render() {
    const info = this.state;
    return (
      <div>
        {(() => {
          if (this.state.work.submit) {
            return (
              <div className="education-info">
                <Preview info={info} />
                <button className="education-edit" onClick={this.edit}>
                  Edit
                </button>
              </div>
            );
          }
          return (
            <form onSubmit={this.onSubmitInfo} className="education-form">
              <div className="education-input">
                <div className="year">
                  <input onChange={this.handleChange} value={info.year} type="text" id="year" placeholder="Year" />
                </div>
                <div className="main">
                  <div className="main-info">
                    <input onChange={this.handleChange} value={info.role} type="text" id="role" placeholder="Role/Position" />
                  </div>
                  <div>
                    <input onChange={this.handleChange} value={info.company} type="text" id="company" placeholder="Company Name" />
                  </div>
                  <div>
                    <li>
                      <input onChange={this.handleChange} value={info.notes} type="text" id="notes" placeholder="Additional Notes" />
                    </li>
                  </div>
                </div>
              </div>

              <button className="education-save" type="submit">
                Save
              </button>
            </form>
          );
        })()}
      </div>
    );
  }
}

export default Work;
