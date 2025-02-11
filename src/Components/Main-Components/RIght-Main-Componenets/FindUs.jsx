import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUs = () => {
    return (
        <div className="mt-6">
            <h1 className="font-bold  text-xl mb-3">Find US On</h1>
            <div className="join flex join-vertical *:bg-white *:border-black/40">
                <button className="btn justify-start join-item space-x-3"> <FaFacebook className="text-lg text-blue-500"></FaFacebook> <span className=" text-base bg-gradient-to-r from-blue-500 to-gray-500 bg-clip-text text-transparent">Facebook</span></button>
                <button className="btn justify-start join-item space-x-3"> <FaInstagram className="text-lg text-pink-400"></FaInstagram> <span className=" text-base bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">Instagram</span></button>
                <button className="btn justify-start join-item space-x-3"> <FaTwitter className="text-lg text-blue-500"></FaTwitter> <span className=" text-base bg-gradient-to-r from-blue-500 to-gray-500 bg-clip-text text-transparent">Twitter</span></button>
            </div>
        </div>
    );
};

export default FindUs;