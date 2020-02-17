import React from 'react';
import '../components/styles/errors.css';
import NotFoundImg from '../img/404.png';

const NotFound: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="text-center">
              <h1 className="Error_Text">Error: 404 Not Found</h1>
              <img src={NotFoundImg} alt="404 Not Found" className="Error_Image" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
