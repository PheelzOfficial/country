// import './App.css';
import All from './components/All';
import { Switch, Route } from 'react-router-dom';
import Indepen from './components/Done/Independent';
import Notindependent from './components/Done/Notindependent';
import Unmember from './components/Done/Unmember';
import Notunmember from './components/Done/Notunmember';
// import Dog from './Dog';
import PopulationA from './components/Done/PopulationA';
import PopulationB from './components/Done/PopulationB';
import More from './components/Done/More';
function App() {
  return (
    <div className="App App-header">
      <Switch>
        <Route exact path="/" component={All} />

        
        
        <Route exact path="/independent" component={Indepen} />
        <Route exact path="/notindependent" component={Notindependent} />
        <Route exact path="/unmember" component={ Unmember} />
        <Route exact path="/notunmember" component={Notunmember } />
        <Route exact path="/notunmember" component={Notunmember } />
        <Route exact path="/population/population-less-than-500k" component={PopulationA } />
        <Route exact path="/population/population-between-500k-and-1m" component={PopulationB} />
        <Route exact path="/moreinfo/:name" component={More} />
  
      </Switch>
    </div>
  );
}

export default App;