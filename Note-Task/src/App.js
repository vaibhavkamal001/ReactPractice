import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useFetch from "./components/Hooks/use-fetch";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, fetchTasks } = useFetch();

  const afterFetch = (data) => {
    const loadedTasks = [];

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }

    setTasks(loadedTasks);
  };

  const onClickFetchTask = useCallback(() => {
    fetchTasks(
      {
        url: "https://react-demo-73944-default-rtdb.firebaseio.com/tasks.json",
      },
      afterFetch
    );
  }, [fetchTasks]);

  useEffect(() => {
    onClickFetchTask();
  }, [onClickFetchTask]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={onClickFetchTask}
      />
    </React.Fragment>
  );
}

export default App;
