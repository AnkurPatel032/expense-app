import { useState } from 'react';
import bannerImage from '../assets/bi2.png';

const About = () => {
    const [data, setData] = useState({
        image: bannerImage,
        title: " Fulll Stack Developer",
        desc1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eveniet quae hic, pariatur non quidem harum provident perferendis nobis molestias!`,
        desc2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora aperiam at eum minima, odio eveniet facere, non incidunt minus accusamus similique laborum velit placeat. Quae unde inventore odit at.`,
        actionButton: {
            title: "Read More..",
            link: "/readMore"
        }
    })
    return <>
        <div className="main-container border  bg-gray-100 py-6">
            <h1 className="pb-16 text-4xl underline font-bold text-center">About Me</h1>
            <div className="flex items-center">
                {/* image container */}
                <div className='w-full flex justify-center'>
                    <img
                        className='w-fit'
                        src={data.image} alt="Ankur Patel "></img>
                </div>
                {/* text-container */}
                <div className='w-full flex justify-center'>
                    <div className='space-y-5 w-2/3'>
                        <h1 className='text-5xl  font-semibold'>{data.title}</h1>
                        <p>{data.desc1}</p>
                        <p>{data.desc2}</p>
                        <button href={data.actionButton.link} className='bg-orange-500 px-3 py-2 rounded-full shadow-lg'>{data.actionButton.title}</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default About;