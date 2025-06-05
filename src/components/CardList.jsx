import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';

const cardsData = [
  { id: 1, title: 'Карточка 1', description: 'Описание 1' },
  { id: 2, title: 'Карточка 2', description: 'Описание 2' },
  { id: 3, title: 'Карточка 3', description: 'Описание 3' },
];

const CardList = () => {
  return (
    <div className="card-container">
      <AnimatePresence>
        {cardsData.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card title={card.title} description={card.description} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CardList;
