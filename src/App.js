import React, { useState } from 'react';
import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';
import uniqid from 'uniqid';
import './style/App.css';

const App = () => {
  const [educations, setEducations] = useState([<Education key={uniqid()} />]);
  const [work, setWork] = useState([<Work key={uniqid()} />]);

  const addEducation = () => {
    setEducations(educations.concat(<Education key={uniqid()} />));
  };

  const deleteEducation = () => {
    const rmvEd = educations.filter((ed, index) => {
      if (index + 1 === educations.length) return null;
      return ed;
    });
    setEducations(rmvEd);
  };

  const addWork = () => {
    setWork(work.concat(<Work key={uniqid()} />));
  };

  const deleteWork = () => {
    const rmvWork = work.filter((newWork, index) => {
      if (index + 1 === work.length) return null;
      return newWork;
    });
    console.log(rmvWork);
    setWork(rmvWork);
  };

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
              addEducation();
            }}
          >
            Add
          </button>
          <button
            className="del"
            onClick={() => {
              deleteEducation();
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
              addWork();
            }}
          >
            Add
          </button>
          <button
            className="del"
            onClick={() => {
              deleteWork();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
