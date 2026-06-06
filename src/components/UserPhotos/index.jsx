import React from "react";
import { Link, useParams } from "react-router-dom";
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
            <p className="photo-time">
              Thời gian đăng: {new Date(photo.date_time).toLocaleString()}
            </p>

            <img
              className="photo-image"
              src={`/images/${photo.file_name}`}
              alt={photo.file_name}
            />

            <div className="comments-section">
              <h3>Comments</h3>

              {photo.comments && photo.comments.length > 0 ? (
                photo.comments.map((comment) => (
                  <div key={comment._id} className="comment-card">
                    <p className="comment-time">
                      {new Date(comment.date_time).toLocaleString()}
                    </p>

                    <p>
                      <Link
                        className="comment-user-link"
                        to={`/users/${comment.user._id}`}
                      >
                        {comment.user.first_name} {comment.user.last_name}
                      </Link>
                    </p>

                    <p className="comment-text">{comment.comment}</p>
                  </div>
                ))
              ) : (
                <p className="no-comment">Chưa có comment nào.</p>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default UserPhotos;