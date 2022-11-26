import './App.css';
import Header from './components/Header';
import TodoTaskRegForm from './components/TodoTaskRegForm';

function App() {

  return (
    <div className="App">
      <Header />
      <div>
        <TodoTaskRegForm />
      </div>
    </div>
  );
}

export default App;
