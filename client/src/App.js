import './App.css';

import InputTodo from './component/InputTodo';
import EditTodo from './component/EditTodo';
import ListTodo from './component/ListTodo';

function App() {
  return (
    <div className="App">
      <EditTodo/>
      <ListTodo/>
      <InputTodo/>
    </div>
  );
}

export default App;
