import generateJoke from "./generateJoke";
import './styles/main.scss';



// This is used to import multiple images like in an ecommerce products

function importAll(r) {
    r.keys().forEach(r);
  }
  
  importAll(require.context('./assets/', false, /\.jpg$/));


const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)
generateJoke()