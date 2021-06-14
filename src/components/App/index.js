import Header from '../Header';
import { MaterialUIFormSubmit } from '../Form/formCard';

function App() {


  return <div className="App">
      <Header />
      <MaterialUIFormSubmit onSubmit={(values) => {console.log(values)}}/>
    </div>;
}

export default App;
