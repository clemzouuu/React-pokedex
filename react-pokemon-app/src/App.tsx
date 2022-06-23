import React,{FunctionComponent} from 'react';  
import PokemonList from './page/pokemon-list';
import PokemonDetail from './page/pokemon-detail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './page/page-not-found';
import PokemonEdit from './page/pokemon-edit'

const App: FunctionComponent = () => {  
 
 return ( 
    <Router>
      <div>
         {}
            <nav>
               <div className ="nav-wrapper teal">
                  <Link to="/" className="brand-logo center">Pokémon</Link>
               </div>
            </nav>
         {}
         <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/pokemons" component={PokemonList} />
            <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
            <Route exact path="/pokemons/:id" component={PokemonDetail} />
            <Route component={PageNotFound} />
         </Switch>
      </div>
   </Router>
 )  
}
  
export default App;  
