import React, { useRef, useState } from 'react';
import Input from './Input';

const NewProject = ({ onAdd,handleCancelProject }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const [error, setError] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = dueDate.current.value;

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDate.trim() === '') {
      setError('Please fill in all fields');
      setModalOpen(true);
      return;
    }
    setError('');
    setModalOpen(false);

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDate,
    });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-[35rem] mt-16">
      <main className="flex items-center gap-4 justify-end my-4">
        <button className="text-stone-800 hover:text-stone-950" onClick={handleSave}>
          Save
        </button>
        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleCancelProject}>Cancel</button>
      </main>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textArea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded">
            <p className="text-red-500">{error}</p>
            <button className="mt-4 px-4 py-1 rounded-md text-right  bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewProject;
