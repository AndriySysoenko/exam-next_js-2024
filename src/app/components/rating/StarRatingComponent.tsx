"use client";

import React from 'react';
import styles from './RatingStyle.module.css';

type RatingProps = {
    voteAverage: number; // Рейтинг от 0 до 10
};

const StarRating: React.FC<RatingProps> = ({ voteAverage }) => {

    const normalizedRating = Math.round((voteAverage / 2) * 10) / 10;

    const stars = [];
    for (let i = 0; i < 5; i++) {
        let klass = styles.starRating;

        if (normalizedRating >= i + 1) {
            klass += ` ${styles.selected}`;
        }

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

export default StarRating;