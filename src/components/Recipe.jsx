import { useParams } from 'react-router-dom';

const Recipe = ({ recipe, loading }) => {
  const { recipeId } = useParams();

  let filteredItem = recipe.filter((item) => {
    return item.id == recipeId;
  });
  console.log(filteredItem);
  console.log(recipe);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : recipe?.length > 0 && filteredItem ? (
        <>
          <h1>{filteredItem[0].name}</h1>
          <img
            className="pic"
            src={filteredItem[0].img}
            alt={filteredItem[0].name}
          />
          <p>{filteredItem[0].description}</p>
          {filteredItem[0].ingredients.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </>
      ) : (
        <p>No recipe found.</p>
      )}
    </div>
  );
};

export default Recipe;
