import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';
import uniqid from 'uniqid';
import './style/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      educations: [<Education key={uniqid()} />],
      work: [<Work key={uniqid()} />],
    };
  }

  addEducation() {
    this.setState({
      educations: this.state.educations.concat(<Education key={uniqid()} />),
      work: this.state.work,
    });
  }

  deleteEducation() {
    const rmvEd = this.state.educations.filter((ed, index) => {
      if (index + 1 === this.state.educations.length) return null;
      return ed;
    });
    this.setState({
      educations: rmvEd,
      work: this.state.work,
    });
  }

  addWork() {
    this.setState({
      educations: this.state.educations,
      work: this.state.work.concat(<Work key={uniqid()} />),
    });
  }

  deleteWork() {
    const rmvWork = this.state.work.filter((work, index) => {
      if (index + 1 === this.state.work.length) return null;
      return work;
    });
    this.setState({
      educations: this.state.educations,
      work: rmvWork,
    });
  }

  render() {
    const educations = this.state.educations;
    const work = this.state.work;

    return (
      <div className="cv">
        <General />
        <div className="container">
          <div className="title-container">
            <div className="title">EDUCATION</div>
            <div className="underline"></div>
          </div>
          {educations}
          <div className="buttons">
            <button
              className="addEd"
              onClick={() => {
                this.addEducation();
              }}
            >
              Add
            </button>
            <button
              className="del"
              onClick={() => {
                this.deleteEducation();
              }}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="container">
          <div className="title-container">
            <div className="title">WORK EXPERIENCE</div>
            <div className="underline"></div>
          </div>
          {work}
          <div className="buttons">
            <button
              className="addWork"
              onClick={() => {
                this.addWork();
              }}
            >
              Add
            </button>
            <button
              className="del"
              onClick={() => {
                this.deleteWork();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
