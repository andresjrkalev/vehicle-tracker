import React from 'react';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FORMAT_DATE_SLASH, INPUT_TYPE_DATE, INPUT_TYPE_TEXT, STRING_EMPTY } from '../constants';

const InputGroup = ({ label, type, placeholder, value, loading, onChange, onClick, error }) => (
  <form className="form-inline">
    <label className="mr-1">{label}</label>
    {type === INPUT_TYPE_TEXT && (
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        onChange={({ target: { value } }) => onChange(value)}
        value={value || STRING_EMPTY}
      />
    )}
    {type === INPUT_TYPE_DATE && (
      <span>
        <DatePicker
          selected={new Date(value)}
          onChange={onChange}
          dateFormat={FORMAT_DATE_SLASH}
          popperPlacement="top"
          className="form-control"
        />
        <FontAwesomeIcon icon="calendar" className="ml-1" />
      </span>
    )}
    <button type="button" className="btn btn-primary ml-1" onClick={onClick}>
      Go
    </button>
    {loading && (
      <div className="spinner-border text-primary ml-1" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )}
    <span className="is-invalid" />
    <div className="invalid-feedback">{error || String.fromCharCode(160)}</div>
  </form>
);

export default InputGroup;
