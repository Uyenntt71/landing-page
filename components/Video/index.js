import React from "react";
import videojs from "video.js"
import VideoJS from "./VideoJS";

const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
        // src: 'http://home.cdnvt.net:8686/hls-stream/6817040a-a769-4547-94d3-e94085102ead/master.m3u8'
        // src: 'http://home.cdnvt.net:8686/livestream/vtv1_2/index.m3u8',
        // src: 'http://home.cdnvt.net:8686/dash-stream/6817040a-a769-4547-94d3-e94085102ead/output.mpd',
        // src: 'https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8',
        // src: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_3360.m3u8',
        src: 'https://strm.voh.com.vn/radio/channel1/playlist.m3u8'
        // type: 'application/x-mpegURL'
        // type: 'application/dash+xml'
    }]
};

const Video = () => {
    const playerRef = React.useRef(null);

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };

    return (
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady}/>
    )
}

export default Video