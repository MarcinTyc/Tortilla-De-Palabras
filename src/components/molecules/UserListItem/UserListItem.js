import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UserListItem.styles';
import Button from '../../atoms/Button/Button';
import { StyledAverage } from './UserListItem.styles';
import { StyledList } from './UserListItem.styles';

const showIndex = index => alert(`index wynosi: ${index+1}`);

const UsersListItem = ({index, userData: { name, attendence = '0%', average },
}) => (
	<Wrapper>
		<StyledAverage value={average}>{average}</StyledAverage>

		<StyledList>
			<p>
				{name}
				<Button onMouseEnter={() => showIndex(index)} />
			</p>

			<p>attendence: {attendence}</p>
		</StyledList>
	</Wrapper>
);

UsersListItem.propTypes = {
	userData: PropTypes.shape({
		average: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		attendence: PropTypes.string,
	}),
};
export default UsersListItem;
