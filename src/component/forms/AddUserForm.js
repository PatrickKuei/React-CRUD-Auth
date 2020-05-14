import React, { useState } from "react";

const AddUserForm = ({ addUser, handleClick }) => {
  const initialFormState = {
    id: null,
    gameId: "",
    name: "",
    username: "",
    joinTime: "",
    identity: "",
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        handleClick();
        addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>遊戲ID</label>
      <input
        type="number"
        name="gameId"
        value={user.gameId}
        placeholder={"number only"}
        onChange={handleInputChange}
      />
      <label>LINE名稱</label>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder={"Tania"}
        onChange={handleInputChange}
      />

      <label>LINE ID</label>
      <input
        type="text"
        name="username"
        value={user.username}
        placeholder={"floppydiskette"}
        onChange={handleInputChange}
      />
      <label>入會時間</label>
      <input
        type="datetime-local"
        name="joinTime"
        value={user.joinTime}
        placeholder={"1995-12-17 03:24"}
        onChange={handleInputChange}
      />
      <label>身分</label>
      <input
        type="text"
        name="identity"
        value={user.identity}
        placeholder={"股東/會長"}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
      <button
        onClick={() => {
          setUser(initialFormState);
          handleClick();
        }}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default AddUserForm;
