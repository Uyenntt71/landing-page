import Image from "next/image";
import React, {useMemo} from "react";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const FEATURES = [
    {
        icon: <Image src={"/assets/features/customized-caching.svg"} width={64} height={64} quality={100}
                     alt={"customized-caching"}/>,
        title: "Customized Caching",
        description: "Cache static content in the edge PoPs as per your requirement, effectively optimizing the response time and web performance."
    },
    {
        icon: <Image src={"/assets/features/file-prefetch.svg"} width={64} height={64} quality={100}
                     alt={"file-prefetch"}/>,
        title: "File Prefetch/Purging",
        description: "Proactively caches, deletes, or invalidates specific content in edge PoPs to increase cache hit ratios."
    },
    {
        icon: <Image src={"/assets/features/protocol-support.svg"} width={64} height={64} quality={100}
                     alt={"protocol-support"}/>,
        title: "Protocols Support",
        description: "Rapid deployment of new protocols including HTTP 2.0, IPv6, QUIC, and TLS 1.3."
    },
    {
        icon: <Image src={"/assets/features/access-control.svg"} width={64} height={64} quality={100}
                     alt={"access-control"}/>,
        title: "Access Control",
        description: "Configures access control rules by IP address, country/region, HTTP headers, and time stamp to ward off unwanted visitors."
    },
    {
        icon: <Image src={"/assets/features/origin-reinforcement.svg"} width={64} height={64} quality={100}
                     alt={"origin-reinforcement"}/>,
        title: "Origin Reinforcement",
        description: "Supports customized back-to-origin policies, instant origin failover, and origin status monitoring to guarantee business continuity."
    }
]

const Feature = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="bg-white-500 dark:bg-black-600 w-full pt-20"
            id="feature"
        >
            <div
                className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center"
            >
                <div className="flex flex-col w-full">
                    <ScrollAnimationWrapper>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 dark:text-white-500 leading-relaxed"
                        >
                            Features
                        </motion.h3>
                    </ScrollAnimationWrapper>
                    <div
                        className="grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6"
                    >
                        {
                            FEATURES.map((feature, index) => (
                                <ScrollAnimationWrapper className="flex justify-between auto-rows-fr"
                                                        key={`feature-${index}`}>
                                    <motion.div
                                        variants={scrollAnimation}
                                        className="flex flex-col justify-center items-start w-full py-4 lg:py-6 px-4 sm:px-2 lg:px-4"
                                        // whileHover={{
                                        //     scale: 1.1,
                                        //     transition: {
                                        //         duration: .2
                                        //     }
                                        // }}
                                    >
                                        {feature.icon}
                                        <p className="text-2xl text-black-600 dark:text-white-500 font-medium capitalize mt-2 mb-4">
                                            {feature.title}
                                        </p>
                                        <p className="text-base text-left leading-loose">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                </ScrollAnimationWrapper>
                            ))
                        }
                    </div>
                    <div className={"flex flex-col gap-y-[4rem]"}>
                        <ScrollAnimationWrapper>
                            <motion.div variants={scrollAnimation} className={"flex flex-col gap-y-8 md:flex-row"}>
                                <div className={"w-full md:w-2/3 text-left text-base flex justify-center flex-col"}>
                                    <p className="text-2xl text-black-600 dark:text-white-500 font-medium capitalize mb-4">
                                        Transmission Optimization
                                    </p>
                                    <ul className={"list-disc pl-[20px] leading-loose text-black-500 dark:text-white-300"}>
                                        <li>Smart Routing empowers your website to provide users with the fastest
                                            and
                                            most
                                            reliable service.
                                        </li>
                                        <li>Load Balancing schedules user requests to the closest PoP available.
                                        </li>
                                        <li>Optimized Transmission Protocol transfers data from 30% to 130% faster
                                            than
                                            standard TCP.
                                        </li>
                                    </ul>
                                </div>
                                <div className={"flex-1 flex justify-center"}>
                                    <img src={"/assets/features/transmission-optimization.svg"}
                                         style={{height: "250px"}} alt={"transmission-optimization"}/>
                                </div>
                            </motion.div>
                        </ScrollAnimationWrapper>
                        <ScrollAnimationWrapper>
                            <motion.div variants={scrollAnimation} className={"flex flex-col gap-y-8 md:flex-row"}>
                                <div className={"flex-1 flex justify-center"}>
                                    <img src={"/assets/features/protection.svg"} style={{height: "250px"}}
                                         alt={"protection"}/>
                                </div>
                                <div className={"w-full md:w-2/3 text-left text-base flex justify-center flex-col"}>
                                    <p className="text-2xl text-black-600 font-medium capitalize mb-4">
                                        Comprehensive Security Protection
                                    </p>
                                    <p className={"leading-loose"}>
                                        With features such as anti-hotlinking, anti-hijacking, anti-tampering and
                                        HTTPDNS, CDNetworks content delivery network not only speeds up your content
                                        distribution, but also secures the content during transmission.
                                    </p>
                                </div>
                            </motion.div>
                        </ScrollAnimationWrapper>
                        <ScrollAnimationWrapper>
                            <motion.div variants={scrollAnimation} className={"flex flex-col gap-y-8 md:flex-row"}>
                                <div className={"w-full md:w-2/3 text-left text-base flex justify-center flex-col"}>
                                    <p className="text-2xl text-black-600 font-medium capitalize mb-4">
                                        Visualized Console
                                    </p>
                                    <p className={"leading-loose"}>
                                        CDNetworks provides a visualized console, where you can self-configure your
                                        domains, gain full insights into your usage data, manage your certificates,
                                        download the logs and so on.
                                    </p>
                                </div>
                                <div className={"flex-1 flex justify-center"}>
                                    <img src={"/assets/features/visual-console.svg"} style={{height: "250px"}}
                                         alt={"visual-console"}/>
                                </div>
                            </motion.div>
                        </ScrollAnimationWrapper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature;