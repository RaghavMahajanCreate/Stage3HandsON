//import logo from './logo.svg';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import MenuComponent from './Components/MenuComponent'
import CompanyDetailsComponent from './Components/CompanyDetailsComponent'
import CompaniesListComponent from './Components/CompaniesListComponent'
import LoginComponent from './Components/LoginComponent';
import WatchListComponent from './Components/WatchListComponent'
import PerformanceComponent from './Components/PerformanceComponent';

function App() {
  return (

    <BrowserRouter>
      <div>
        {/*<LoginComponent/>*/}
        <MenuComponent loggedIn={true}/>
        <CompanyDetailsComponent/>
        <Switch>
         <Route path="/login" component={LoginComponent} exact={true}/>
           <Route path="/companies" component={CompaniesListComponent}/>
          <Route path="/watchlist" component={WatchListComponent}/>
  <Route path="/compareperformance" component={PerformanceComponent}/>
  </Switch>
      </div>
    </BrowserRouter>


  );
}

export default App;