import React, { Component } from 'react';
import '../style/Note.css';

class Note extends Component {
  constructor() {
    super();

    this.state = {
      note: '',
    };
  }

  note = (id, e) => {
    if (id === 'note') return e.target.value;
    return this.state.education.note;
  };

  handleChange = (e) => {
    const id = e.target.id;
    this.setState({
      education: {
        degree: this.degree(id, e),
        discipline: this.discipline(id, e),
        location: this.location(id, e),
        year: this.year(id, e),
        note: this.note(id, e),
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
        note: this.state.education.note,
        id: this.state.education.id,
        submit: true,
      },
    });
  };

  render() {
    return <input onChange={this.handleChange} value={info.degree} type="text" id="degree" placeholder="Degree" />;
  }
}

export default Note;
