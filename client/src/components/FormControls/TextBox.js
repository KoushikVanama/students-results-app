import React from 'react';

const SelectBox = ({input, placeholder, type,
    faIcon, meta: {touched, error}}) => {
  return(
    <div className="input-group form-group">
        <div className="input-group-prepend">
            <span className="input-group-text"><i className={`fas ${faIcon}`}></i></span>
        </div>
        <input {...input} type={type} className="form-control" placeholder={placeholder} />
        {touched &&
            (error && <div className="error-msg">{error}</div>)}
    </div>
  );
}

export default SelectBox;
