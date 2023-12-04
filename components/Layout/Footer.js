import React from "react";
import LogoCDN from "../../public/assets/LogoCDN.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();

    return (
        <div className="bg-white-300 pt-12 lg:pt-20 pb-24 dark:bg-black-500">
            <div
                className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-2 sm:grid-cols-12 gap-4">
                <div className="row-span-2 sm:col-span-4 col-start-1 col-end-3 sm:col-end-5 flex flex-col items-start ">
                    <div className={"flex gap-x-2 items-center mb-6"}>
                        <LogoCDN className="h-12 w-auto"/>
                    </div>
                    <p className="mb-4 dark:text-white-300">
                        <strong className="font-medium text-dark_blue-500">EdgeFS</strong> is a private
                        virtual network that has unique features and has high security.
                    </p>
                    <div className="flex w-full mt-2 mb-8 -mx-2">
                        <div
                            className="mx-2 bg-white-500 dark:bg-black-600 rounded-full items-center justify-center flex p-2 shadow-md">
                            <Facebook className="h-6 w-6"/>
                        </div>
                        <div
                            className="mx-2 bg-white-500 dark:bg-black-600 rounded-full items-center justify-center flex p-2 shadow-md">
                            <Twitter className="h-6 w-6"/>
                        </div>
                        <div
                            className="mx-2 bg-white-500 dark:bg-black-600 rounded-full items-center justify-center flex p-2 shadow-md">
                            <Instagram className="h-6 w-6"/>
                        </div>
                    </div>
                    <p className="text-gray-400">
                        ©{new Date().getFullYear()} - EdgeFS
                    </p>
                </div>
                <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
                    <p className="text-black-600 dark:text-white-500 mb-4 font-medium text-lg">
                        {t("footer.product")}
                    </p>
                    <ul className="text-black-500 dark:text-white-300 ">
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            {t("footer.download")}{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            {t("footer.pricing")}{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            {t("footer.locations")}{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            {t("footer.server")}{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            {t("footer.countries")}{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            {t("footer.blogs")}{" "}
                        </li>
                    </ul>
                </div>
                <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
                    <p className="text-black-600 dark:text-white-500 mb-4 font-medium text-lg">
                        {" "}
                        {t("footer.engage")}
                    </p>
                    <ul className="text-black-500 dark:text-white-300">
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            EdgeFS ?{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            {t("footer.FAQ")}{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            {t("footer.tutorials")}{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            {t("footer.aboutUs")}{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            {t("footer.privacyPolicy")}{" "}
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            {t("footer.termsofService")}{" "}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
