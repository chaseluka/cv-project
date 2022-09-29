import React, { useEffect, useState } from 'react';
import Preview from './Preview';
import uniqid from 'uniqid';
import '../style/Education.css';

const Education = () => {
  const [degree, setDegree] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [location, setLocation] = useState('');
  const [year, setYear] = useState('');
  const [notes, setNotes] = useState('');
  const id = uniqid();
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const elmtId = e.target.id;
    if (elmtId === 'degree') setDegree(e.target.value);
    if (elmtId === 'discipline') setDiscipline(e.target.value);
    if (elmtId === 'location') setLocation(e.target.value);
    if (elmtId === 'year') setYear(e.target.value);
    if (elmtId === 'notes') setNotes(e.target.value);
  };

  const onSubmitInfo = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  const edit = () => {
    setSubmit(false);
  };

  useEffect(() => {
    if (!submit) {
      const displayEdit = () => {
        document.getElementById('degree').value = degree;
        document.getElementById('discipline').value = discipline;
        document.getElementById('location').value = location;
        document.getElementById('year').value = year;
        document.getElementById('notes').value = notes;
      };
      displayEdit();
    }
  }, [degree, discipline, location, notes, submit, year]);

  return (
    <div>
      {(() => {
        if (submit) {
          return (
            <div className="education-info">
              <Preview education={[degree, discipline, location, year, notes, id]} />
              <button className="education-edit" onClick={edit}>
                Edit
              </button>
            </div>
          );
        }
        return (
          <form onSubmit={onSubmitInfo} className="education-form">
            <div className="education-input">
              <div className="year">
                <input onChange={handleChange} value={year} type="text" id="year" placeholder="Year" />
              </div>
              <div className="main">
                <div className="main-info">
                  <input onChange={handleChange} value={degree} type="text" id="degree" placeholder="Degree" />
                  <div className="seperate">|</div>
                  <input onChange={handleChange} value={discipline} type="text" id="discipline" placeholder="Discipline" />
                </div>
                <div>
                  <input onChange={handleChange} value={location} type="text" id="location" placeholder="School/University/College" />
                </div>
                <div>
                  <li>
                    <input onChange={handleChange} value={notes} type="text" id="notes" placeholder="Additional Notes" />
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
};

export default Education;
