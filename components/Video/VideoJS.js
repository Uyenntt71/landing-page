import React, { useEffect } from "react";
import videojs from "video.js";
import "videojs-contrib-quality-levels";
import "videojs-http-source-selector";

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");
      videoElement.id = "element-video";
      // videoElement.classList.add('vjs-big-play-centered');
      videoElement.classList.add("video-js");
      videoElement.classList.add("vjs-lime");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(
        videoElement,
        {
          ...options,
          liveui: true,
          liveTracker: {
            trackingThreshold: 0,
          },
          plugins: {
            httpSourceSelector: { default: "auto" },
          },
          html5: {
            vhs: {
              experimentalLLHLS: true,
              overrideNative: true,
            },
          },
          // controlBar: {
          //     children: [
          //         "playToggle",
          //         "progressControl",
          //         "volumePanel",
          //         "currentTimeDisplay",
          //         "timeDivider",
          //         "durationDisplay",
          //         "liveDisplay",
          //         "playbackRateMenuButton",
          //         "chaptersButton",
          //         "fullscreenToggle"
          //     ]
          // }
        },
        () => {
          videojs.log("player is ready");
          onReady && onReady(player);
        }
      ));

      let qualityLevels = player.qualityLevels();

      qualityLevels.on("change", function () {
        console.log("Quality Level changed!");
        console.log("New level:", qualityLevels[qualityLevels.selectedIndex]);
      });

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;
      if (options?.audioPosterMode !== undefined) {
        player.audioPosterMode(options.audioPosterMode);
      }
      if (options?.poster) {
        player.poster(options.poster);
      }
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoJS;
