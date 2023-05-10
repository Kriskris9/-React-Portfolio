import React from "react";

export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="social-icons">
              <a href="https://github.com/developerusername" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/developerusername/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
              <a href="https://stackoverflow.com/users/1234567/developerusername" target="_blank" rel="noopener noreferrer"><i className="fa fa-stack-overflow"></i></a>
              <a href="https://twitter.com/developerusername" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
