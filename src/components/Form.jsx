import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';

const Form = ({ recipe, loading }) => {
  const [selectedGroup, setSelectedGroup] = useState('');
  let HandleChange = (e) => {
    setSelectedGroup(e.target.value);
  };
  return (
    <form>
      <TextField
        required
        id="outlined-required"
        label="Required"
        placeholder="Item name"
        helperText="Give the name to recipe"
      />

      <TextField
        required
        id="select"
        select
        label="Select"
        helperText="Please select recipe group"
        value={selectedGroup}
        onChange={HandleChange}
      >
        {recipe.map((option, index) => (
          <MenuItem key={index} value={option.group}>
            {option.group}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
};

export default Form;
