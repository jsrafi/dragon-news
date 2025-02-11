import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-slate-100 p-2">
            <p className="bg-[#D72050] px-4 py-1 text-gray-200 text-lg">Latest</p>
            <Marquee pauseOnHover={true} speed={100} className="space-x-10 text-black  ">
                 <Link className="mr-5" to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                 <Link className="mr-5" to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                 <Link className="mr-5" to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                  </Marquee>
        </div>
    );
};

export default LatestNews;