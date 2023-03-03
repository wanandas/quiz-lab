## Getting Started

Install dependencies,

```bash
npm install
# or
yarn
# or
pnpm install
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Task List

A. Write a task list application that allows users to create, view, update, and delete tasks. The app should have the following features:

- A form for creating a new task, with a text input for the task description and a submit button.
- A list of tasks, with each task displaying its description, due date, and completion status.
- A checkbox that allows users to mark tasks as complete or incomplete.
- The ability to edit or delete a task.

To complete this task, you will need to:

- Use React to create a task list component that includes the above features.
- Use state to manage the list of tasks and their completion status.
- Use local storage to persist the list of tasks between page reloads.
- Add appropriate error handling and validation to ensure that tasks are entered correctly.
- The task list should be sortable by due date, completion status, or task description.
- Tasks should be displayed in different colors depending on their completion status.
- Users should be able to filter tasks by completion status.
- Users should be able to delete all completed tasks at once.

## Room

B. Write a reservation system for meeting rooms. The app should allow users to view available rooms, reserve a room for a specified time period, and cancel a reservation.
To complete this task, you will need to:

- Use an array to store the list of available rooms and their properties (e.g., room number, capacity, available time slots).
- Use an object to store the list of reservations and their properties (e.g., room number, date, start time, end time, person who reserved).
- Create a user interface that allows users to view available rooms, reserve a room for a specified time period, and cancel a reservation.
- Add appropriate error handling and validation to ensure that reservations are entered correctly.
- Users should be able to search for available rooms based on their capacity and the desired time period.
- Users should be able to see the list of existing reservations and their details.
- Users should be able to cancel their own reservations.
- The app should have an admin interface that allows administrators to view and manage all reservations.
