/* eslint-disable */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import { ITagSlim } from '../../../interfaces/tag';

const Div = styled.div`
  padding-bottom: 1.4rem;
  color: #b3b3b3;
  margin-right: 40px;
  margin-top: 20px;
`;

const filter = createFilterOptions();

const TagPicker = ({ setFormTagList }) => {
  const options = tagList;
  // const value = [];
  // const setValue = (a: string[]) => {};

  const [value, setValue] = React.useState<ITagSlim[]>([]);

  useEffect(() => {
    if (value.length > 4) {
      setValue(value.slice(0, -1));
    }
    setFormTagList(value);
  }, [value]);

  return (
    <Div>
      <Autocomplete
        multiple
        value={value}
        onChange={(event, newValue) => {
          // if create a new tag
          if (newValue && newValue.length > 0 && newValue.length > value.length) {
            if (newValue[newValue.length - 1].inputValue) {
              // Create a new value from the user input
              setValue([
                ...value,
                {
                  name: newValue[newValue.length - 1].inputValue,
                  id: null,
                },
              ]);
            } else {
              setValue(newValue);
            }
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some((option) => inputValue === option.name);
          if (inputValue !== '' && !isExisting) {
            filtered.push({
              inputValue,
              name: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="tag-picker"
        options={tagList}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.name;
        }}
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        sx={{ '& .MuiInputBase-root': { borderRadius: 3 } }}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label="Add up to 4 tags..."
          />
        )}
      />
    </Div>
  );
};

export default TagPicker;

const tagList = [
  { name: 'xbox', id: 1 },
  { name: 'ps5', id: 2 },
  { name: 'pc', id: 3 },
  { name: 'nintendo', id: 4 },
  { name: 'mobile', id: 5 },
  { name: 'ios', id: 6 },
  { name: 'android', id: 7 },
  { name: 'mac', id: 8 },
  { name: 'linux', id: 9 },
  { name: 'windows', id: 10 },
  { name: 'gaming', id: 11 },
  { name: 'gamer', id: 12 },
];
