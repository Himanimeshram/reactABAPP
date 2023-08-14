import React from 'react';
import { useLocation } from 'react-router-dom';

const UserDetails = () => {
  const location = useLocation();
  const userData = location.state?.userData;
    debugger;
  console.log('userData:', userData); 

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { data, Message } = userData;

  return (
    <div>
      <h1>User Details</h1>
      <p>createdAt: {data[0]['createdAt']}</p>
      <p>emailId: {data[0]['emailId']}</p>
      <p>firstName: {data[0]['firstName']}</p>
      <p>lastName: {data[0]['lastName']}</p>
      <p>passwordHash: {data[0]['passwordHash']}</p>
      <p>phoneNumber: {data[0]['phoneNumber']}</p>
      <p>role: {data[0]['role']}</p>
      <p>updatedAt: {data[0]['updatedAt']}</p>
      <p>Username: {data[0]['createdAt']}</p>
      <p>Id: {data[0]['_id']}</p>
      {/* Display other user data here */}
    </div>
  );
};

export default UserDetails;
