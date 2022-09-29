import React, { useEffect, useState } from 'react';
import Preview from './Preview';
import uniqid from 'uniqid';
import '../style/Work.css';

const Work = () => {
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [year, setYear] = useState('');
  const [notes, setNotes] = useState('');
  const id = uniqid();
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const elmtId = e.target.id;
    if (elmtId === 'role') setRole(e.target.value);
    if (elmtId === 'company') setCompany(e.target.value);
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
        document.getElementById('role').value = role;
        document.getElementById('company').value = company;
        document.getElementById('year').value = year;
        document.getElementById('notes').value = notes;
      };
      displayEdit();
    }
  }, [company, notes, role, submit, year]);

  return (
    <div>
      {(() => {
        if (submit) {
          return (
            <div className="education-info">
              <Preview work={[role, company, year, notes, id]} />
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
                  <input onChange={handleChange} value={role} type="text" id="role" placeholder="Role/Position" />
                </div>
                <div>
                  <input onChange={handleChange} value={company} type="text" id="company" placeholder="Company Name" />
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

export default Work;
