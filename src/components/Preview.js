import React from 'react';
import '../style/Preview.css';

const Preview = (props) => {
  if (props.hasOwnProperty('general')) {
    const [name, phone, email, id] = props.general;
    return (
      <div key={id} className="general-input">
        <div className="name">{name}</div>
        <div className="phone">{phone}</div>
        <div className="email">{email}</div>
      </div>
    );
  } else if (props.hasOwnProperty('education')) {
    const [degree, discipline, location, year, notes, id] = props.education;
    return (
      <div key={id} className="education-input">
        <div className="year">
          <div>{year}</div>
        </div>
        <div className="main">
          <div className="main-info">
            <div className="degree">{degree}</div>
            <div className="seperate">|</div>
            <div className="discipline">{discipline}</div>
          </div>
          <div>
            <div className="location">{location}</div>
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
      </div>
    );
  } else if (props.hasOwnProperty('work')) {
    const [role, company, year, notes, id] = props.work;
    return (
      <div key={id} className="education-input">
        <div className="year">
          <div>{year}</div>
        </div>
        <div className="main">
          <div className="main-info">
            <div className="role">{role}</div>
          </div>
          <div>
            <div className="company">{company}</div>
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
      </div>
    );
  }
};

export default Preview;
