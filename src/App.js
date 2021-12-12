import logo from './logo.svg';
import './App.css';
import FunctionalMenu from './components/FunctionalMenu';

function App() {
  return (
    <div className="App">
      <h1>Dojo Diner!</h1>
      <p>Thank you for coming</p>
      <FunctionalMenu nameOfDish = "pizza" price= "$19.99" numMealsServed = {9}>
        This pizza is made and imported from Sicily
      </FunctionalMenu>
      <FunctionalMenu nameOfDish = "pasta" price= "$24.99" numMealsServed = {7}>
        Pasta is freshly made in Rome
      </FunctionalMenu>

    </div>
  );
}

export default App;
