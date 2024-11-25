import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomeSection9 = () => {
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        // Fetch the video URL from the API
        const fetchVideo = async () => {
            try {
                const response = await axios.get('https://highleveltecknology.com/bahaa/public/all_slides/5');
                const videoPath = response.data?.video[0]?.img;
                if (videoPath) {
                    setVideoUrl(`https://highleveltecknology.com/bahaa/public/${videoPath}`);
                }
            } catch (error) {
                console.error('Error fetching the video URL:', error);
            }
        };

        fetchVideo();
    }, []);

    return (
        <div className="my-20">
            <div className="flex justify-center">
                {videoUrl ? (
                    <video
                        width="100%"
                        height="500"
                        controls
                        src={videoUrl}
                    >
                    </video>
                ) : (
                    <p>Loading video...</p>
                )}
            </div>
        </div>
    );
};

export default HomeSection9;
