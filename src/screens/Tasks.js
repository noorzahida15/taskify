import React from "react";

const Tasks = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-yellow-500">
      <h1 className="text-center text-2xl my-5">TASK MANAGER</h1>
      <div className="flex flex-row justify-center space-x-10">
        <section className="flex flex-col border-2 border-white p-10">
          <h2 className="text-center">Add Task</h2>
          <form className="flex flex-col ">
            <label for="taskName">Task Name:</label>
            <input type="text" id="taskName" name="taskName" required />

            <label for="dueDate">Due Date:</label>
            <input type="date" id="dueDate" name="dueDate" required></input>
            <button
              type="submit"
              className="bg-black flex self-center text-lg text-white rounded-lg px-4 py-2 mt-3  hover:bg-gray-500"
            >
              Add Task
            </button>
          </form>
        </section>

        <section className="border-2 border-white p-10">
          <h2>Task List</h2>
          <ul id="tasks"></ul>
          <div className="bg-white rounded-lg p-3 my-2">
            <p className="text-center">Task 1</p>
            <p className="font-semibold">Date: 28-12-23</p>
          </div>
          <div className="bg-white rounded-lg p-3 my-2">
            <p className="text-center">Task 2</p>
            <p className="font-semibold">Date: 29-12-23</p>
          </div>
          <div className="bg-white rounded-lg p-3 my-2">
            <p className="text-center">Task 3</p>
            <p className="font-semibold">Date: 30-12-23</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tasks;
