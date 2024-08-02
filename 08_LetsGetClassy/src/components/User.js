import React, { useEffect } from "react";
const User = ({ name }) => {
  useEffect(() => {}, []);

  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Bengaluru</h3>
      <h4>Contact: +917013634111</h4>
    </div>
  );
};

export default User;
