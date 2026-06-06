import React from "react";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function UserDetail() {
  const { userId } = useParams();

  const user = models.userModel(userId);

  if (!user) {
    return (
      <div className="user-detail">
        <h2>User not found</h2>
        <p>Không tìm thấy thông tin người dùng.</p>
      </div>
    );
  }

  return (
    <div className="user-detail">
      <h2>
        {user.first_name} {user.last_name}
      </h2>

      <p>
        <strong>Location:</strong> {user.location}
      </p>

      <p>
        <strong>Occupation:</strong> {user.occupation}
      </p>

      <p>
        <strong>Description:</strong> {user.description}
      </p>

      <Link className="photos-link" to={`/photos/${user._id}`}>
        View photos of {user.first_name}
      </Link>
    </div>
  );
}

export default UserDetail;