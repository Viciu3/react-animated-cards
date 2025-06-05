import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ title, description }) => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};

export default Card;
