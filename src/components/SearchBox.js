import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='col-md-6 mx-auto search'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default SearchBox;
