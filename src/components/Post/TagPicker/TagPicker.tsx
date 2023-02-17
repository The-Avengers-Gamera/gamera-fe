/* eslint-disable */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Div = styled.div`
  padding-bottom: 1.4rem;
  color: #b3b3b3;
`;

const filter = createFilterOptions();

const TagPicker = () => {
  const tagList = ['a', 'b'];

  const value = ['value', 'value2'];
  const setValue = (a: string[]) => {};

  useEffect(() => {
    if (value.length > 4) {
      setValue(value.slice(0, -1));
    }
  }, [value]);

  return (
    <Div>add up to 4 tags...</Div>
    // <Autocomplete
    //   multiple
    //   value={value}
    //   onChange={(event, newValue) => {
    //     if (typeof newValue === 'string') {
    //       setValue({
    //         name: newValue,
    //       });
    //     } else if (newValue && newValue.length > 0 && newValue[newValue.length - 1].inputValue) {
    //       // Create a new value from the user input
    //       setValue([
    //         ...value,
    //         {
    //           name: newValue[newValue.length - 1].inputValue,
    //         },
    //       ]);
    //     } else {
    //       setValue(newValue);
    //     }
    //   }}
    //   filterOptions={(options, params) => {
    //     const filtered = filter(options, params);

    //     const { inputValue } = params;
    //     // Suggest the creation of a new value
    //     const isExisting = options.some((option) => inputValue === option.name);
    //     if (inputValue !== '' && !isExisting) {
    //       filtered.push({
    //         inputValue,
    //         name: `Add "${inputValue}"`,
    //       });
    //     }

    //     return filtered;
    //   }}
    //   selectOnFocus
    //   clearOnBlur
    //   handleHomeEndKeys
    //   id="tag-picker"
    //   options={tagList}
    //   getOptionLabel={(option) => {
    //     // Value selected with enter, right from the input
    //     if (typeof option === 'string') {
    //       return option;
    //     }
    //     // Add "xxx" option created dynamically
    //     if (option.inputValue) {
    //       return option.inputValue;
    //     }
    //     // Regular option
    //     return option.name;
    //   }}
    //   renderOption={(props, option) => <li {...props}>{option.name}</li>}
    //   sx={{ '& .MuiInputBase-root': { borderRadius: 3 } }}
    //   freeSolo
    //   renderInput={(params) => (
    //     <TextField
    //       {...params}
    //       label="Add up to 4 tags..."
    //     />
    //   )}
    // />
  );
};

export default TagPicker;
