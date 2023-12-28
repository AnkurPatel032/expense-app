import bannerImage from '../assets/bi1.png';
import bannerBackground from '../assets/banner_wallpaper.svg';

const Expertise = () => {
    return <>
        <div className="my-container">
            <h1 className="mb-3 pb-8 text-4xl underline font-bold text-center">My Expertise</h1>
            {/* box section */}
            <div
                style={{
                    backgroundImage: `url(${bannerBackground})`,
                    backgroundSize: "cover",
                }}

                className="box-container flex items-center py-16">
                <div className="w-2/3  flex justify-center  text-white">
                    {/* text container */}
                    <div className=" w-2/3  text-center space-y-4">  <h1 className="text-4xl font-bold">I love this Technlogies</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quibusdam officiis neque repellendus, alias quidem.</p>
                        <button className="px-4 py-2 bg-orange-500 shadow-lg rounded-full text-1xl">Hire Me</button>
                    </div>
                </div>
                <div className="w-2/3 flex justify-center">
                    {/* skill container */}
                    <div className=" flex justify-center h-fit flex-wrap space-x-3">
                        <p className="bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Core Java</p>
                        <p className="bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer">J2EE</p>
                        <p className="bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Hibernate(ORM Tool) Java</p>
                        <p className="bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Spring Framework</p>
                        <p className="bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Spring MVC</p>
                        <p className="bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Spring Boot</p>
                        <p className="bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Spring Security</p>
                        <p className="bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Microservices</p>
                        <p className="bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer">React Js</p>
                        <p className="bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Tailwind CSS</p>
                        <p className="bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Angular</p>
                        <p className="bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer">JavaScript</p>
                        <p className="bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer">NodeJs</p>
                        <p className="bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer">State Mangement</p>
                        <p className="bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer">EC2</p>
                        <p className="bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer">AWS Cloud</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Expertise;