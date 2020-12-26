import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Wrapper = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  margin-right: 4.4vh;
  font-size: 2.2vh;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const Checkmark = styled.span`
  position: absolute;
  top: -1.8vh;
  left: 0px;
  height: 3.6vh;
  width: 3.6vh;
  background-color: #ffffff;
  border: solid 3px #d6d6d6;
  border-radius: 1vh;
  &::after {
    top: 0.3vh;
    left: 1.2vh;
    width: 1vh;
    height: 2vh;
    border: solid white;
    border-width: 0 0.3vh 0.3vh 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    content: "";
    position: absolute;
    display: none;
  }
  label:hover input ~ & {
    background-color: #f0f0f0;
  }
  label input:checked ~ & {
    background-color: #5f5fd9;
    border-color: #5f5fd9;
  }
  label input:checked ~ &::after {
    display: block;
  }
`;

export default function Checkbox({ className, func }) {
  return (
    <Wrapper>
      <Input type="checkbox" className={className} onClick={func} />
      <Checkmark />
    </Wrapper>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  func: PropTypes.func,
};

Checkbox.defaultProps = {
  className: '',
  func: () => {},
};
