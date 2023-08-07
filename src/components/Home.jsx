/* eslint-disable */
import "./Home.css"

const Home = ({ recipe, loading }) => {
  return (
    <main className="home-container">

      <h1 className="home-title">Welcome to our Cookbook</h1>
      <h2 className="home-message">Enjoy our delicious meals</h2>
      <img src="MealHomePicture.jpg" alt="deliciousMeal" />

    </main>
  );
};

export default Home;
