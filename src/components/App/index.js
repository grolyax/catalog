import Header from '../Header';
import { MaterialUIFormSubmit } from '../Form/formCard';
import TitlebarGridList from '../mainGrid/mainGrid';

function App() {


  return <div className="App">
      <Header />
      <MaterialUIFormSubmit onSubmit={(values) => {console.log(values)}}/>
      <TitlebarGridList />
    </div>;
}

export default App;
