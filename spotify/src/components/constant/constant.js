export const SONGS_API = "https://cms.samespace.com/items/songs";

function formatDuration(seconds) {
    const mins = Math.floor(seconds / 60);
    const sec = Math.round(seconds % 60); // Using `Math.round` for precision
    return `${mins}:${sec < 10 ? '0' : ''}${sec}`;
}

export async function addDuration(data) {
    const processTrack = async (track) => {
        try {
            const audio = new Audio(track.url);

            const getDuration = () =>
                new Promise((resolve) => {
                    const handleMetadata = () => {
                        resolve(audio.duration);
                        audio.removeEventListener('loadedmetadata', handleMetadata); // Clean up listener
                    };

                    const handleError = () => {
                        console.warn(`Failed to load audio for track: ${track.url}`);
                        resolve(0);
                        audio.removeEventListener('error', handleError); // Clean up listener
                    };

                    audio.addEventListener('loadedmetadata', handleMetadata);
                    audio.addEventListener('error', handleError);
                });

            const duration = await getDuration();
            track.duration = formatDuration(duration);
        } catch (err) {
            console.error('Error handling audio processing:', err);
            track.duration = '0:00';
        }
        return track;
    };

    const updatedTracks = await Promise.all(data.map(processTrack));
    return updatedTracks;
}
