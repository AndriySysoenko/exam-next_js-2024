"use client";

import React from 'react';
import styles from './RatingStyle.module.css'; // Подключаем стили

type RatingProps = {
    voteAverage: number; // Рейтинг от 0 до 10
};

const Rating: React.FC<RatingProps> = ({ voteAverage }) => {
    // Переводим рейтинг из 10-балльной системы в 5-балльную
    const normalizedRating = Math.round((voteAverage / 2) * 10) / 10;

    const stars = [];
    for (let i = 0; i < 5; i++) {
        let klass = styles.starRating;

        // Полностью закрашенная звезда
        if (normalizedRating >= i + 1) {
            klass += ` ${styles.selected}`;
        }
        // Частично закрашенная звезда
        else if (normalizedRating > i) {
            klass += ` ${styles.halfSelected}`;
        }

        stars.push(
            <span key={i} className={klass}>
        ★
      </span>
        );
    }

    return (
        <div className={styles.starRatingContainer}>

            <div>{stars}</div>
            <div className={styles.ratingText}>{`Rating: ${voteAverage.toFixed(1)} / 10`}</div>
        </div>
    );
};

export default Rating;