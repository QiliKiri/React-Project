import './App.css';
import TodoList from "./components/TodoList";
import Clock from "./components/Clock";
import React, {useId} from "react";

function App() {
    const example0 = {
        id: useId(),
        text: 'Example1: CLICK ME to see the detail, click the area where has at least a words',
        detail: 'Nothing here',
        priorityLv: 2
    }
    const example1 = {
        id: useId(),
        text: 'Example0: Todo Tasks are ordered by priority level from highest to lowest [1 - 5]',
        detail: 'Color representation is: Red, Orange, Yellow, Green, Blue',
        priorityLv: 1
    }
    const example2 = {
        id: useId(),
        text: 'Example2: I am completed, click the TICK button on the right to undo the complete',
        priorityLv: 3,
        isComplete: true
    }
    const example3 = {
        id: useId(),
        text: 'Example4: Click the CROSS button to delete me',
        detail: 'I am useless',
        priorityLv: 5
    }
    const example4 = {
        id: useId(),
        text: 'Example3: Click the PENCIL button to edit me',
        detail: '[GIVE ME NEW VALUE]',
        priorityLv: 4
    }
    const examples = [example0, example1, example2, example3, example4];

    return (
      <>
          <div className={'clock'}>
              <Clock />
          </div>
          <div className={"todo-app"}>
              <TodoList examples={examples}/>
          </div>
      </>
    );
    }

export default App;
