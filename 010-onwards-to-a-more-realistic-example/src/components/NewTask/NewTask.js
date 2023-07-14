import useHttp from "../../hooks/use-http";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {

  const {sendRequest, isLoading, error} = useHttp();

  const applyData = (taskText, data) => {
    if (data) {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    }
  };

  const enterTaskHandler = async (taskText) => {
    const requestData = {
      url: "https://tasks-f704d-default-rtdb.firebaseio.com/tasks.json",
      method: "POST",
      body: JSON.stringify({ text: taskText }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    await sendRequest(requestData, applyData.bind(null, taskText));
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
