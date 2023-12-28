import { useState } from "react";

const Header = () => {
    const [brandName, setBrandName] = useState("Ankur Patel");
    const [menuLinks, setMenuLinks] = useState([
        {
            title: "Home",
            link: "/home",
            id: 1
        },
        {
            title: "About",
            link: "/about",
            id: 2
        },
        {
            title: "Skills",
            link: "/skills",
            id: 3
        },
        {
            title: "Portfolio",
            link: "/portfolio",
            id: 4
        },
        {
            title: "Contact",
            link: "/contact",
            id: 5
        }

    ]);

    const [actionButton, setAction] = useState({
        title: "Hire Me",
        link: "/hire-me",
    })

    return (
        <>
            <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
                <div>
                    {/* brand logo */}
                    <h1 className="text-2xl font-bold">{brandName}</h1>
                </div>
                <div className="space-x-6">
                    {/* menu links */}
                    {menuLinks.map((link) => (
                        <a key={link.id} href={link.link} className="hover:text-orange-600">{link.title}</a>

                    ))}
                    {/* <a href="/home" className="hover:text-orange-600">Home</a> */}
                    {/* <a href="/about" className="hover:text-orange-600">About</a>
                    <a href="/skills" className="hover:text-orange-600">Skills</a>
                    <a href="/portfolio" className="hover:text-orange-600">Portfolio</a>
                    <a href="/contact" className="hover:text-orange-600">Contact</a> */}
                </div>
                <div>
                    <a href={actionButton.link} className="px-4 py-2 bg-orange-500 shadow-lg rounded-full text-1xl ">{actionButton.title}</a>
                </div>
            </div>
        </>
    );
};

export default Header; 