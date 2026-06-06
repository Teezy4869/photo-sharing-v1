import React from "react";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function UserPhotos() {
  const { userId } = useParams();

  const user = models.userModel(userId);
  const photos = models.photoOfUserModel(userId);

  if (!user) {
    return (
      <div className="user-photos">
        <h2>Không tìm thấy người dùng</h2>
        <p>Không có dữ liệu ảnh để hiển thị.</p>
      </div>
    );
  }

  return (
    <div className="user-photos">
      <h2>
        Ảnh của {user.first_name} {user.last_name}
      </h2>

      {photos.length === 0 ? (
        <p>Người dùng này chưa có ảnh.</p>
      ) : (
        photos.map((photo) => (
          <div key={photo._id} className="photo-card">
            <p className="photo-time">{new Date(photo.date_time).toLocaleString()}</p>
            <img className="photo-image" src={`/images/${photo.file_name}`} alt={photo.file_name} />
          </div>
        ))
      )}
    </div>
  );
}

export default UserPhotos;