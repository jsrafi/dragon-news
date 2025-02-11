import { FaGithub, FaGoogle } from "react-icons/fa";


const LoginButtons = () => {
    return (
        <div>
            <h1 className="font-bold  text-xl">Login With</h1>
            <div className="mt-4 *:w-full space-y-2">
                <button className="btn text-blue-500 bg-white border border-blue-500"> <FaGoogle></FaGoogle> Log In With Google </button>
                <button className="btn bg-white border border-black"> <FaGithub></FaGithub> Log In With Github </button>
            </div>
        </div>
    );
};

export default LoginButtons;