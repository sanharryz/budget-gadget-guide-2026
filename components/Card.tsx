import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  price: string;
  compatibility: string;
  imageSrc: string;
  alt?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, price, compatibility, imageSrc, alt, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardMeta}>
          <span>{price}</span>
          <span>{compatibility}</span>
        </div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardImage}>
          <img src={imageSrc} alt={alt || title} />
        </div>
        <div className={styles.cardContent}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
