import React from 'react';

function DeleteItem({ item, onDelete }) {
  const handleDelete = () => {
    onDelete(item); // Call the onDelete function passed from the parent
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default DeleteItem;
