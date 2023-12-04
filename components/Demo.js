import React, { useEffect, useState } from "react";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import VideoJS from "./VideoJS";
import { Tab } from "@headlessui/react";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Demo = () => {
  const playerRef = React.useRef(null);
  let [categories, setCategories] = useState({
    "VOD-HLS": [],
    "VOD-DASH": [],
    TV360: [],
  });

  const [videoJsOptions, setVideoJsOptions] = useState({
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: null,
        type: "application/x-mpegURL",
      },
    ],
  });

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  const handleGetVODList = async () => {
    try {
      const res = await axios.get(`${process.env.API_ORIGIN}/stream/list`);
      const hlsData = res.data?.map((item) => {
        return {
          id: item.id,
          url: `${process.env.API_ORIGIN}${item.hlsURL}`,
          name: item.name,
          thumb: `${process.env.API_ORIGIN}${item.thumb}`,
          type: "application/x-mpegURL",
        };
      });

      const dashData = res.data?.map((item) => {
        return {
          id: item.id,
          url: `${process.env.API_ORIGIN}${item.dashURL}`,
          name: item.name,
          thumb: `${process.env.API_ORIGIN}${item.thumb}`,
          type: "application/dash+xml",
        };
      });
      return {
        hls: hlsData,
        dash: dashData,
      };
    } catch (err) {
      return [];
    }
  };

  const handleGetTV360List = async () => {
    try {
      const res = await axios.get(
        `${process.env.API_ORIGIN}/tv360/get-recommend`
      );
      const data = res.data?.map((item) => {
        return {
          id: item.id,
          url: null,
          name: item.name,
          thumb: item.coverImage,
          type: "application/x-mpegURL",
        };
      });
      return data;
    } catch (err) {
      return [];
    }
  };

  const handleGetTV360Link = async (id) => {
    try {
      const res = await axios.get(`${process.env.API_ORIGIN}/tv360/get-link`, {
        params: {
          id: id,
        },
      });
      return res.data?.urlStreaming;
    } catch (err) {
      return "";
    }
  };

  useEffect(() => {
    (async () => {
      const [vod, tv360] = await Promise.all([
        handleGetVODList(),
        handleGetTV360List(),
      ]);
      setCategories({
        ...categories,
        "VOD-HLS": vod.hls,
        "VOD-DASH": vod.dash,
        TV360: tv360,
      });
    })();
  }, []);

  const handleClick = async (video) => {
    if (video.url) {
      setVideoJsOptions((prev) => ({
        ...prev,
        sources: [
          {
            src: video.url,
            type: video.type,
          },
        ],
        autoplay: true,
      }));
      return;
    } else {
      const url = await handleGetTV360Link(video.id);
      setVideoJsOptions((prev) => ({
        ...prev,
        sources: [
          {
            src: url,
            type: "application/x-mpegURL",
          },
        ],
        autoplay: true,
        preload: "auto",
      }));
      return;
    }
  };

  return (
    <div
      className="bg-white-500 dark:bg-black-600 w-full pt-20 pb-14"
      id="demo"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 dark:text-white-500 leading-relaxed">
              Demo
            </h3>
            <div>
              <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            </div>
            <div className="w-full px-2 py-16 sm:px-0">
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                  {Object.keys(categories).map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        classNames(
                          "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                          "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                          selected
                            ? "bg-white-500 text-orange-500 shadow"
                            : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                        )
                      }
                    >
                      {category}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                  {Object.values(categories).map((posts, idx) => (
                    <Tab.Panel
                      key={idx}
                      className={classNames("rounded-xl p-3", "")}
                    >
                      <ul
                        className={classNames(
                          "grid grid-cols-2 lg:grid-cols-4",
                          ""
                        )}
                      >
                        {posts.map((post) => (
                          <li
                            key={post.id}
                            className="cursor-pointer relative p-3 hover:opacity-60"
                            onClick={() => handleClick(post)}
                          >
                            <div>
                              <img
                                src={post.thumb}
                                className="w-full h-full rounded-lg"
                              />
                              <h5 className="w-full justify-between">
                                {post.name}
                              </h5>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Tab.Panel>
                  ))}
                  {}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Demo;
