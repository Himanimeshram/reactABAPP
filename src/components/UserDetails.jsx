import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserDetails = () => {
  const location = useLocation();
  const userData = location.state?.userData;

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { data } = userData;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">User Details</h1>
      <div className="card">
        <div className="card-body">
          <div className="mb-3">
            <p><strong>ID:</strong> {data[0]._id}</p>
            <p><strong>Username:</strong> {data[0].userName}</p>
            <p><strong>First Name:</strong> {data[0].firstName}</p>
            <p><strong>Last Name:</strong> {data[0].lastName}</p>
            <p><strong>Email:</strong> {data[0].emailId}</p>
            <p><strong>Phone Number:</strong> {data[0].phoneNumber}</p>
            <p><strong>Role:</strong> {data[0].role}</p>
          </div>
          <div className="text-center">
            <Link to="/bookAppointment" className="btn btn-primary">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
