import React from "react";

const notifications = [
  "Your application was viewed",
  "New job posted",
  "Recruiter sent message",
];

const NotificationPanel = () => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-md">
      <h2 className="font-bold mb-4">
        Notifications
      </h2>

      {notifications.map((item, index) => (
        <div
          key={index}
          className="border-b py-2"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default NotificationPanel;