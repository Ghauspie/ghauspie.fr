
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from './Footer/index';
import Header from './Header/index';
import Me from './Me/index';
import Nav from './Nav';
import Speak from './Speak/index';
import Passions from './Passions';
import NotFound from './NotFound/NotFound';
import ExpPro from './ExpPro';
import Diplomes from './Diplome';
import Competences from './Compétences';

function App() {
  return (
    <div className="App">
    <Header />    
      <main>
    <BrowserRouter>
    <Nav />
    <Switch>
    <Route path="/" exact component={Me} />
    <Route path="/Speak" component={Speak} />
    <Route path="/Passions" component={Passions} />
    <Route path="/ExpPro" component={ExpPro} />
    <Route path="/Diplomes" component={Diplomes} />
    <Route path="/Competences" component={Competences} />
    <Route  component={NotFound} />

    </Switch>
    </BrowserRouter>
    </main>
    <Footer />
    </div>
    
 
  );
}

export default App;
