import { brainwave } from "../assets";
import { navigation } from "../constants";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

export default function Header() {
    const { hash } = useLocation();
    const [openNavigation, setOpenNavigation] = useState(true);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 ${
                openNavigation ? "bg-n-8" : "backdrop-blur-sm bg-n-8/90"
            }`}
        >
            <header className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#hero">
                    <img
                        src={brainwave}
                        alt="Brain Wave"
                        className="w-[190px] aspect-auto"
                    />
                </a>

                <nav
                    className={`${
                        openNavigation ? "flex" : "hidden"
                    } fixed top-[5rem] left-0 right-0 bottom-0 max-lg:h-screen bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent max-lg:items-center max-lg:justify-center  `}
                >
                    <div className="flex relative z-2 flex-col items-center justify-center lg:flex-row max-lg:w-full">
                        {navigation.map((item) => (
                            <a
                                key={item.title}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                                    item.onlyMobile ? "lg:hidden" : ""
                                } px-6 py-6 md:py-8 lg:text-xs lg:font-semibold ${
                                    hash === item.url
                                        ? "z-2 lg:text-n-1"
                                        : "lg:text-n-1/50"
                                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                    <HamburgerMenu />
                </nav>
                <a
                    href="#signup"
                    className="button hidden lg:block text-n-1/50 mr-8 transition-colors hover:text-n-1"
                >
                    New Account
                </a>
                <Button className="hidden lg:block">Sign in</Button>

                <Button
                    className="ml-auto lg:hidden"
                    px="px-3"
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </header>
        </div>
    );
}
