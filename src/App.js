import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();

    this.state = {
      educations: [],
      work: [],
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
      <div>
        <General />
        <div>
          <div className="title">Education: </div>
          {educations}
          <button
            className="addEd"
            onClick={() => {
              this.addEducation();
            }}
          >
            Add Education
          </button>
          <button
            className="delEd"
            onClick={() => {
              this.deleteEducation();
            }}
          >
            Delete Education
          </button>
        </div>
        <div>
          <div className="title">Work Experience: </div>
          {work}
          <button
            className="addWork"
            onClick={() => {
              this.addWork();
            }}
          >
            Add Work
          </button>
          <button
            className="delWork"
            onClick={() => {
              this.deleteWork();
            }}
          >
            Delete Work
          </button>
        </div>
      </div>
    );
  }
}

export default App;
