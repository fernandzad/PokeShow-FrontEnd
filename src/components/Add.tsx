import React from 'react';
import { Link } from 'react-router-dom';
import addImg from '../img/add.png';
import './styles/add.css';

const Add: React.FC = () => {
  return (
    <>
      <Link to="/pokemon/add">
        <img alt="" src={addImg} className="Fitness-Add" />
      </Link>
    </>
  );
};

export default Add;
