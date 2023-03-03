import styled from "@emotion/styled";

export const Form = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.description.value, e.target.dueDate.value);
    // clear input
    e.target.description.value = "";
    e.target.dueDate.value = "";
  };

  return (
    <div>
      <h1 style={{ marginBottom: "1rem" }}>Task list application</h1>

      <FormWrapper onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <input required type="text" id="description" name="description" />
        <label htmlFor="dueDate">Due Date</label>
        <input required type="date" id="dueDate" name="dueDate" />
        <button type="submit">submit</button>
      </FormWrapper>
    </div>
  );
};

const FormWrapper = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 500px;
  height: 100%;
  color: #000;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
  label {
    display: block;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`;
