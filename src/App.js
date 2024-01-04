import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ShowUsers from './Component/ShowUsers';
import Header from './Component/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <ShowUsers />
    </div>
  );
}

export default App;
