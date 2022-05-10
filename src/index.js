import generateJoke from "./generateJoke";
import './styles/main.scss';



// This is used to import multiple images like in an ecommerce products

function importAll(r) {
    r.keys().forEach(r);
  }
  
  importAll(require.context('./assets/', false, /\.jpg$/));


console.log(generateJoke())

console.log(123)