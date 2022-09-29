import React, { useEffect, useState } from 'react';
import Preview from './Preview';
import uniqid from 'uniqid';
import '../style/General.css';

const General = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const id = uniqid();
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const elmtId = e.target.id;
    if (elmtId === 'name') setName(e.target.value);
    if (elmtId === 'phone') setPhone(e.target.value);
    if (elmtId === 'email') setEmail(e.target.value);
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
        document.getElementById('name').value = name;
        document.getElementById('phone').value = phone;
        document.getElementById('email').value = email;
      };
      displayEdit();
    }
  }, [email, name, phone, submit]);

  return (
    <div>
      {(() => {
        if (submit) {
          return (
            <div className="general-info">
              <Preview general={[name, phone, email, id]} />
              <button className="general-edit" onClick={edit}>
                Edit
              </button>
            </div>
          );
        }
        return (
          <form onSubmit={onSubmitInfo} className="general-form">
            <div className="general-input">
              <input onChange={handleChange} value={name} type="text" id="name" placeholder="First and Last Name" />
              <input onChange={handleChange} value={phone} type="text" id="phone" placeholder="Phone" />
              <input onChange={handleChange} value={email} type="text" id="email" placeholder="Email" />
            </div>
            <button className="general-save" type="submit">
              Save
            </button>
          </form>
        );
      })()}
    </div>
  );
};

export default General;
