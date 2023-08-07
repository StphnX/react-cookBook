/* eslint-disable */

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Menu = ({ recipes, loading }) => {
  return (
    <div className="menu">
      <header>
        <Link to=".">
          <h1>CookBook</h1>
        </Link>
      </header>
      <nav>
        {loading ? (
          <p>Loading...</p>
        ) : (
          Object.entries(recipes).map(([groupName, recipesInGroup]) => (
            <div key={groupName}>
              <h3>{groupName}</h3>
              <ul>
                {recipesInGroup.map((recipe) => (
                  <li key={recipe.name}>
                    <NavLink to={`/${groupName}/${recipe.name}/${recipe.id}`}>
                      {recipe.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
        <Link to="/add-item">
          <button>Add Item</button>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
