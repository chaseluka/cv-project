import React, { Component } from 'react';
import '../style/Preview.css';

class Preview extends Component {
  render() {
    if (this.props.info.hasOwnProperty('personal')) {
      const { name, phone, email, id } = this.props.info.personal;
      return (
        <div key={id} className="general-input">
          <div className="name">{name}</div>
          <div className="phone">{phone}</div>
          <div className="email">{email}</div>
        </div>
      );
    } else if (this.props.info.hasOwnProperty('education')) {
      const { degree, discipline, location, year, notes, id } = this.props.info.education;
      return (
        <div key={id} className="education-input">
          <div className="education-section">
            <div className="degree">{degree}</div>
            <div className="seperate">|</div>
            <div className="discipline">{discipline}</div>
          </div>
          <div className="education-section">
            <div className="location">{location}</div>
            <div className="seperate">|</div>
            <div className="year">{year}</div>
          </div>
          <div>
            {(() => {
              if (notes !== '') {
                return <li className="notes">{notes}</li>;
              }
              return;
            })()}
          </div>
        </div>
      );
    }
  }
}

export default Preview;
