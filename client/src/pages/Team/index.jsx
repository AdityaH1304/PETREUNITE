import React from 'react';
import './Team.css'; // Import your custom CSS file

const Team = () => {
  return (
    <div className="team-container">
      <div className="container text-light my-5">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h2 className="display-4 mb-4">Meet Our Team</h2>
            <p className="lead">
              We are a team of passionate and dedicated professionals who are committed to making a difference
              in the lives of pets and their families. With a wealth of experience in animal welfare, we're always
              looking for new ways to improve our services.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="card bg-light text-dark mb-4">
              <div className="card-body">
                <h5 className="card-title">How You Can Help</h5>
                <p className="card-text">
                  There are many ways you can help us reunite lost pets with their families. Here are a few things you can do:
                </p>
                <ul className="list-unstyled">
                  <li><i className="fas fa-paw mr-2"></i>Report lost pets to our database</li>
                  <li><i className="fas fa-share mr-2"></i>Share lost pet reports on social media</li>
                  <li><i className="fas fa-hands-helping mr-2"></i>Volunteer your time for search and rescue efforts</li>
                  <li><i className="fas fa-donate mr-2"></i>Donate to support our work</li>
                </ul>
                <p>By working together, we can make a difference in the lives of lost pets and their families.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card bg-light text-dark mb-4">
              <div className="card-body">
                <h5 className="card-title">Contact Us</h5>
                <p className="card-text">
                  We're here to help! If you have any questions or concerns, please feel free to contact us.
                </p>
                <p>
                  <strong>Email:</strong> <a href="mailto:Petsreunite@gmail.com" className="text-primary">Petsreunite@gmail.com</a>
                  <br />
                  <strong>Phone Number:</strong> 1800230232
                </p>
                <p>We hope you'll join us in our mission to reunite lost pets with their families. Thank you for your support!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

