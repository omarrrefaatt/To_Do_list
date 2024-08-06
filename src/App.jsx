import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from './redux/taskSlice';

export default function App() {
  const [task, setTask] = useState('');
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  const handleRemoveTask = (index) => {
    dispatch(removeTask(index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-700 mb-4">To-Do List</h1>
        <div className="mb-4 flex">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            className="border border-gray-300 rounded-lg p-2 flex-grow mr-2"
          />
          <button
            onClick={handleAddTask}
            className="bg-green-500 text-white rounded-lg px-4 py-2"
          >
            Add
          </button>
        </div>
        <ul className="list-disc pl-5">
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{task}</span>
              <button
                onClick={() => handleRemoveTask(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
