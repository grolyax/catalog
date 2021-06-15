import Header from '../Header';
import { MaterialUIFormSubmit } from '../Form/formCard';
import TitlebarGridList from '../mainGrid/mainGrid';
import DataGridDemo from '../fullTable/fullTable';

function App() {


  return <div className="App">
      <Header />
      <MaterialUIFormSubmit onSubmit={(values) => {console.log(values)}}/>
      <TitlebarGridList />
      <DataGridDemo />
    </div>;
}

export default App;
