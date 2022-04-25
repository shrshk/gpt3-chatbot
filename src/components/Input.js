import React, { useEffect } from 'react';
import './Input.css';

const classNames = require('classnames');

export function Input(props) {
  useEffect(() => {
    if (props.autofocus === true)
      props.referance.current.focus();
  }, []);

  const onChange = (e) => {
    if (props.maxlength && (e.target.value || '').length > props.maxlength) {
      if (props.onMaxLengthExceed instanceof Function)
        props.onMaxLengthExceed();

      props.referance.current.value = (e.target.value || '').substring(0, props.maxlength);
      return;
    }

    if (props.onChange instanceof Function)
      props.onChange(e);
  }

  return (
    <div className={classNames('rce-container-input', props.className)}>
      {
        props.leftButtons &&
        <div className='rce-input-buttons'>
          {props.leftButtons}
        </div>
      }
      <input
        ref={props.referance}
        type={props.type}
        value={props.value}
        className={classNames('rce-input')}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        style={props.inputStyle}
        onChange={onChange}
        onCopy={props.onCopy}
        onCut={props.onCut}
        onPaste={props.onPaste}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onSelect={props.onSelect}
        onSubmit={props.onSubmit}
        onReset={props.onReset}
        onKeyDown={props.onKeyDown}
        onKeyPress={props.onKeyPress}
        onKeyUp={props.onKeyUp}/>
      {
        props.rightButtons &&
        <div className='rce-input-buttons'>
          {props.rightButtons}
        </div>
      }
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  defaultValue: '',
  onChange: null,
  rightButtons: null,
  leftButtons: null,
  multiline: false,
  minHeight: 25,
  maxHeight: 200,
  autoHeight: true,
  inputStyle: null,
  referance: null,
  maxlength: null,
  onMaxLengthExceed: null,
  autofocus: false,
};
