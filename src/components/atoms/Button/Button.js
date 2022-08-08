import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete-icon.svg';
import { StyledButton } from './Button.styles';

const alertMe = () => alert("siema")

const Button = (props) => (
	<StyledButton {...props} >
		<DeleteIcon />
	</StyledButton>
);

export default Button;
