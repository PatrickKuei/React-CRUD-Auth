import React from "react";

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>遊戲ID</th>
        <th>LINE名稱</th>
        <th>LINE ID</th>
        <th>入會時間</th>
        <th>身分</th>
        <th>管理</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.gameId}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.joinTime.replace("T", " ")}</td>
            <td>{user.identity}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                  props.handleClick();
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
