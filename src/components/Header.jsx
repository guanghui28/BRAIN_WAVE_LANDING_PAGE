import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";

export default function Header() {
    const { hash } = useLocation();
    return (
        <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 backdrop-blur-sm bg-n-8/90">
            <header className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#hero">
                    <img
                        src={brainwave}
                        alt="Brain Wave"
                        className="w-[190px] aspect-auto"
                    />
                </a>

                <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
                    <ul className="relative z-2 flex flex-col items-center justify-center mx-auto lg:flex-row">
                        {navigation.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.url}
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
                            </li>
                        ))}
                    </ul>
                </nav>
                <a
                    href="#signup"
                    className="button hidden lg:block text-n-1/50 mr-8 transition-colors hover:text-n-1"
                >
                    New Account
                </a>
                <Button className="hidden lg:block">Sign in</Button>
            </header>
        </div>
    );
}
