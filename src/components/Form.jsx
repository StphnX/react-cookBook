import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';

const Form = ({ recipe, loading, setNewRecipe }) => {
  const [selectedGroup, setSelectedGroup] = useState('');
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);

  let HandleChange = (e) => {
    let value = e.target.value;
    setSelectedGroup(value);
  };

  let HandleOtherChange = (e) => {
    let value = e.target.value;
    setName(value);
    setImg(value);
    setDescription(value);
    const newIngredients = value
      .split(',')
      .map((ingredient) => ingredient.trim());
    setIngredients(newIngredients);
  };
  //   console.log(recipe);

  let handleSubmit = (e) => {
    e.preventDefault();
    let newItem = {
      description: description,
      group: selectedGroup,
      img: img,
      ingredients: ingredients,
      name: name,
    };

    setNewRecipe(newItem);

    setName('');
    setSelectedGroup('');
    setImg('');
    setDescription('');
    setIngredients([]);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <TextField
          className="nameField"
          required
          id="outlined-required"
          label="Name"
          placeholder="Item name"
          helperText="Give the name to recipe"
          onChange={HandleOtherChange}
        />

        <TextField
          required
          className="selectField"
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
        <TextField
          className="imageField"
          required
          id="outlined-required"
          label="Img"
          placeholder="http://..."
          helperText="Add link to img"
          onChange={HandleOtherChange}
        />
        <TextField
          className="descriptionField"
          required
          id="outlined-required"
          label="Description"
          variant="outlined"
          helperText="Add description to recipe"
          onChange={HandleOtherChange}
        />
        <TextField
          className="ingredientsField"
          required
          id="outlined-required"
          label="Ingredients"
          variant="outlined"
          helperText="Devide by comma"
          onChange={HandleOtherChange}
        />
        <button>Add recipe</button>
      </form>
    </div>
  );
};

export default Form;
