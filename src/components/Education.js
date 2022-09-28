import React, { Component } from 'react';
import Preview from './Preview';
import uniqid from 'uniqid';
import '../style/Education.css';

class Education extends Component {
  constructor() {
    super();

    this.state = {
      education: {
        degree: '',
        discipline: '',
        location: '',
        year: '',
        notes: '',
        id: uniqid(),
        submit: false,
      },
    };
  }

  location = (id, e) => {
    if (id === 'location') return e.target.value;
    return this.state.education.location;
  };

  notes = (id, e) => {
    if (id === 'notes') return e.target.value;
    return this.state.education.notes;
  };

  year = (id, e) => {
    if (id === 'year') return e.target.value;
    return this.state.education.year;
  };

  degree = (id, e) => {
    if (id === 'degree') return e.target.value;
    return this.state.education.degree;
  };

  discipline = (id, e) => {
    if (id === 'discipline') return e.target.value;
    return this.state.education.discipline;
  };

  handleChange = (e) => {
    const id = e.target.id;
    this.setState({
      education: {
        degree: this.degree(id, e),
        discipline: this.discipline(id, e),
        location: this.location(id, e),
        year: this.year(id, e),
        notes: this.notes(id, e),
        id: this.state.education.id,
        submit: false,
      },
    });
  };

  onSubmitInfo = (e) => {
    e.preventDefault();
    this.setState({
      education: {
        degree: this.state.education.degree,
        discipline: this.state.education.discipline,
        location: this.state.education.location,
        year: this.state.education.year,
        notes: this.state.education.notes,
        id: this.state.education.id,
        submit: true,
      },
    });
  };

  edit = () => {
    this.setState(
      {
        education: {
          degree: this.state.education.degree,
          discipline: this.state.education.discipline,
          location: this.state.education.location,
          year: this.state.education.year,
          notes: this.state.education.notes,
          id: this.state.education.id,
          submit: false,
        },
      },
      () => {
        this.displayInfo();
      },
    );
  };

  displayInfo = () => {
    document.getElementById('degree').value = this.state.education.degree;
    document.getElementById('discipline').value = this.state.education.discipline;
    document.getElementById('location').value = this.state.education.location;
    document.getElementById('year').value = this.state.education.year;
    document.getElementById('notes').value = this.state.education.notes;
  };

  render() {
    const info = this.state;
    return (
      <div>
        {(() => {
          if (this.state.education.submit) {
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
                    <input onChange={this.handleChange} value={info.degree} type="text" id="degree" placeholder="Degree" />
                    <div className="seperate">|</div>
                    <input onChange={this.handleChange} value={info.discipline} type="text" id="discipline" placeholder="Discipline" />
                  </div>
                  <div>
                    <input onChange={this.handleChange} value={info.location} type="text" id="location" placeholder="School/University/College" />
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

export default Education;
