import Header from '../Header';
//import FormCard from '../Card/formCard';
import { MaterialUIFormSubmit } from '../Card/formForm';

function App() {


  return <div className="App">
      <Header />
      <MaterialUIFormSubmit onSubmit={(values) => {console.log(values)}}/>
    </div>;
}

export default App;
