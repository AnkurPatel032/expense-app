import bannerImage from '../assets/bi1.png';
import bannerBackground from '../assets/banner_wallpaper.svg';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
const Banner = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Full Stack Developer", "Java Developer", "BackEnd Developer"],
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 100,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div
            style={{
                backgroundImage: `url(${bannerBackground})`,
                backgroundSize: "cover",
            }}
            className="main-container flex items-center">
            {/* first block */}
            <div className="w-full flex h-full justify-center items-center">
                {/* text */}
                <div

                    className="w-2/3 space-y-2 ms-10 text-white">
                    <h3 className="text-3xl font-semibold">Hi, I am</h3>
                    <h1 className="text-5xl font-bold">Ankur Patel</h1>
                    <h2 className="text-3xl">I am <span className='font-bold underline' ref={el}></span></h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At voluptas nobis ab debitis, eveniet commodi odio dolores laudantium mollitia necessitatibus sint laborum, earum assumenda doloribus. Earum minima eligendi porro, distinctio eius nesciunt explicabo quidem quaerat possimus libero nemo, soluta enim voluptatibus nobis? Dolore quia nesciunt alias doloremque vel quisquam recusandae.</p>
                    <div className="icons-container space-x-6 flex">
                        <a herf="" className='hover:bg-orange-600 border cursor-pointer px-3 py-4 w-14 h-14 bg-gray-800 rounded-full flex justify-center items-center' ><i class="fa-brands text-4xl fa-facebook"></i>
                        </a>
                        <a herf="" className='hover:bg-orange-600 border cursor-pointer px-3 py-4 w-14 h-14 bg-gray-800 rounded-full flex justify-center items-center' >
                            <i class="fa-brands text-4xl fa-instagram"></i>
                        </a>
                        <a herf="" className='hover:bg-orange-600 border cursor-pointer px-3 py-4 w-14 h-14 bg-gray-800 rounded-full flex justify-center items-center' >
                            <i class="fa-brands text-4xl fa-linkedin"></i>
                        </a>
                        <a herf="" className='hover:bg-orange-600 border cursor-pointer px-3 py-4 w-14 h-14 bg-gray-800 rounded-full flex justify-center items-center' >
                            <i class="fa-brands text-4xl fa-youtube"></i>
                        </a>

                    </div>
                    <br />
                    <a className="text-lg px-3 py-2 bg-orange-500 rounded-full shadow-lg" href='/contact'>Contact Me</a>
                </div>

            </div>
            <div className='my-2 w-full flex justify-center'>
                {/* image */}
                <img className='rounded-full shadow-lg w-fit' src={bannerImage} />
            </div>
        </div >
    )
}

export default Banner;