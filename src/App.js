import './App.css';
import { Complete } from './components/complete';
import { Completed } from './components/completed';
import { Doing } from './components/doing';
import { Incomplete } from './components/incomplete';
import { Overdue } from './components/overdue';
import { Todo } from './components/todo';
import { Underreview } from './components/underreview';

function App() {
  return (
    <div className="App">
      <Incomplete/>
      <Todo/>
      <Doing/>
      <Underreview/>
      <Completed/>
      <Overdue/>
    </div>
  );
}

export default App;
