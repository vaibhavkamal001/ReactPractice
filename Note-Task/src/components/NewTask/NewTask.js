import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useFetch from "../Hooks/use-fetch";

const NewTask = (props) => {
  const { isLoading, error, fetchTasks } = useFetch();
  const afterFetch = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };
  const enterTaskHandler = async (taskText) => {
    fetchTasks(
      {
        url: "https://react-demo-73944-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      afterFetch.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
