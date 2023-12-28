import { useState } from "react";

const Service = () => {
    const [data, setData] = useState([
        {
            id: '',
            title: '',
            description: '',
            actionButton: {
                title: '',
                link: ''
            },
        },
    ])
    return <>
        <div className="main-container py-6">
            <h1 className="pb-10 text-4xl underline font-bold text-center">My Service</h1>
            <div className="services-container flex  space-x-6 px-10 ">
                <div className="cursor-pointer hover:bg-gray-200 bg-slate-100 p-5 text-center  shadow-lg rounded-xl service1 space-y-3 ">
                    <i class="text-5xl fa-brands fa-aws"></i>
                    <h1 className="text-4xl"> Web Development</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nobis hic cum explicabo itaque eum iure quasi error sed maiores.</p>
                    <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full">Check</button>
                </div>
                <div className="cursor-pointer hover:bg-gray-200 bg-slate-100 p-5 text-center shadow-lg rounded-xl  service2 space-y-3 ">
                    <i class="text-5xl fa-solid fa-mobile"></i>
                    <h1 className="text-4xl"> Android Development</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nobis hic cum explicabo itaque eum iure quasi error sed maiores.</p>
                    <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full">Check</button>
                </div>
                <div className="cursor-pointer hover:bg-gray-200 bg-slate-100 p-5 text-center shadow-lg rounded-xl service3 space-y-3 ">
                    <i class="text-5xl  fa-solid fa-server"></i>
                    <h1 className="text-4xl"> Backend Development</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nobis hic cum explicabo itaque eum iure quasi error sed maiores.</p>
                    <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full">Check</button>
                </div>
            </div>
        </div>
    </>
};

export default Service;