import React, { useState, Fragment } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";
import ToggleDisplay from "react-toggle-display";
import { Button } from "./forms/AuthForm";
import { useAuth } from "../context/auth";

const Admin = () => {
  // Data
  const usersData = [
    {
      id: 1,
      gameId: "1029238",
      name: "Tania",
      username: "floppydiskette",
      joinTime: "1995-12-17 03:24",
      identity: "股東/會長",
    },
    {
      id: 2,
      gameId: "1293920",
      name: "Tony",
      username: "aaaaaaaaaaaaa",
      joinTime: "1995-12-17 03:24",
      identity: "總代理/副會長",
    },
    {
      id: 3,
      gameId: "0293818",
      name: "Frank",
      username: "qwefa",
      joinTime: "1995-12-17 03:24",
      identity: "代理/副會長",
    },
  ];

  const initialFormState = {
    id: null,
    gameId: "",
    name: "",
    username: "",
    joinTime: "",
    identity: "",
  };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
      gameId: user.gameId,
      joinTime: user.joinTime,
      identity: user.identity,
    });
  };

  //Edit display
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  //logout

  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div className="container">
      <Button style={{ width: "82px" }} onClick={logOut}>
        Log out
      </Button>
      <div className="flex-row" style={{ position: "relative" }}>
        <ToggleDisplay show={show}>
          <div
            className="flex-large"
            style={{
              position: "absolute",
              backgroundColor: "white",
              top: "32px",
              left: "300px",
              border: "2px solid black",
              width: "600px",
            }}
          >
            {editing ? (
              <Fragment>
                <h2>Edit user</h2>
                <EditUserForm
                  handleClick={handleClick}
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </Fragment>
            ) : (
              <Fragment>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} handleClick={handleClick} />
              </Fragment>
            )}
          </div>
        </ToggleDisplay>
        <div className="flex-large">
          <h2>俱樂部會員({users.length}/500)</h2>
          <button onClick={handleClick}>Add user</button>
          <UserTable
            users={users}
            editRow={editRow}
            deleteUser={deleteUser}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
