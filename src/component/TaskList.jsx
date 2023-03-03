import styled from "@emotion/styled";
import { Checkbox } from "./Checkbox";

export const TaskList = ({
  data = [],
  onCompletion,
  onDelete,
  onEdit,
  onSorting,
}) => {
  return (
    <TaskListWrapper>
      <h1>Task List</h1>

      {data.length > 0 && (
        <ListWrapper>
          <div
            style={{ width: "200px", display: "flex", justifyContent: "start" }}
          >
            <Checkbox
              checked={data.every((item) => item.completed) && data.length > 0}
              onChange={() => onCompletion("all")}
            />{" "}
            Check all
          </div>

          {data.map((item) => (
            <div key={item.id}>
              <Checkbox
                checked={item.completed}
                onChange={() => onCompletion(item.id)}
              />
              <span onClick={() => onSorting("description")}>
                {item.description}
              </span>
              <span onClick={() => onSorting("dueDate")}>{item.dueDate}</span>
              <span
                style={{
                  color: item.completed ? "green" : "red",
                }}
                onClick={() => onSorting("completed")}
              >
                {item.completed ? "completed" : "not complete"}
              </span>

              <button onClick={() => onEdit(item.id)}>Edit</button>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </div>
          ))}
          {/* btn delete all complete */}
          <button onClick={() => onDelete("all")}>Delete all Complate</button>
        </ListWrapper>
      )}
    </TaskListWrapper>
  );
};

const TaskListWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  height: 100%;
  background-color: #f5f5f5;
  color: #333333;
  & > h1 {
    margin: 10px;
  }
`;

const ListWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  width: 400px;

  height: 100%;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 10px 10px 0;
    height: 100%;
  }
  & > div > button {
    width: 100px;
  }
  & > div > span {
    width: 100px;
    cursor: pointer;
  }
  & > div > label {
    margin: 10px;
  }
`;
