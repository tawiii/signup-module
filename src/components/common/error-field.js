import React from 'react';

const ErrorField = ({
  label,
  type,
  input,
  placeholder,
  meta: { error, touched },
}) => {
  const errorText = touched && error && (
    <label style={{ color: '#db2022' }}>{error}</label>
  );
  return (
    <div className="wrap-input">
      {errorText ? errorText : label}{' '}
      <input {...input} placeholder={placeholder} type={type} />
    </div>
  );
};

export default ErrorField;
