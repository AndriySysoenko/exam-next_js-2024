import { IVideo } from '@/app/models/IMovie';
import React, { FC } from 'react';
import styles from './TrailerStyle.module.css'


type TrailerProps = {
    videos: IVideo[] | undefined;
};

const TrailerComponent: FC<TrailerProps> = ({ videos }) => {
    if (!videos || videos.length === 0) return <p>No videos available.</p>

    const officialTrailer = videos.find((video) => video.type === 'Trailer' && video.site === 'YouTube' &&
            video.name.toLowerCase().includes('official'));

    const fallbackVideo = videos.find((video) => video.site === 'YouTube');

    const otherVideos = videos.filter((video) =>
            video.key !== (officialTrailer?.key || fallbackVideo?.key) && video.site === 'YouTube');

    return (
        <div className={styles.videoContainer}>
            <h3>Videos:</h3>
            {officialTrailer || fallbackVideo ? (
                <div>
                    <p>{officialTrailer?.name || fallbackVideo?.name || 'Official'}</p>
                    <iframe
                        src={`https://www.youtube.com/embed/${officialTrailer?.key || fallbackVideo?.key}`}
                        title={officialTrailer?.name || fallbackVideo?.name || 'Video'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className={styles.mainIframe}>
                    </iframe>

                </div>) : (<p>No videos available.</p>
            )}
            <h3>Other videos:</h3>
            {otherVideos && otherVideos.length > 0 && (
                <div className={styles.videoList}>
                    {otherVideos.map((video) => (
                        <p key={video.id} >
                            <a href={`https://www.youtube.com/watch?v=${video.key}`}
                                target="_blank"
                                rel="noopener noreferrer" className={styles.videoItem}>
                                {video.name}
                            </a>
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TrailerComponent;