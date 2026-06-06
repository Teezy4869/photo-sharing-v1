import React from "react";
import { Link } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function UserList() {
  const users = models.userListModel();

  return (
    <div className="user-list">
      <h2>Users</h2>

      <ul className="user-list-items">
        {users.map((user) => (
          <li key={user._id} className="user-list-item">
            <Link to={`/users/${user._id}`}>
              {user.first_name} {user.last_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;