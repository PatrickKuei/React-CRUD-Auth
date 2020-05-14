import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.handleClick();
        props.updateUser(user.id, user);
      }}
    >
      <label>遊戲ID</label>
      <input
        type="text"
        name="gameId"
        value={user.gameId}
        onChange={handleInputChange}
      />
      <label>LINE名稱</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />

      <label>LINE ID</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <label>入會時間</label>
      <input
        type="datetime-local"
        name="joinTime"
        value={user.joinTime}
        onChange={handleInputChange}
      />
      <label>身分</label>
      <input
        type="text"
        name="identity"
        value={user.identity}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button
        onClick={() => {
          props.setEditing(false);
          props.handleClick();
        }}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
