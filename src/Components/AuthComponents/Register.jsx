import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {

    const {createNewUser,setUser} = useContext(AuthContext);

    const handleSubmit =(e)=>
    {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({name,photo,email,password})
        
        createNewUser(email,password)
        .then((result) => {
            console.log(result.user)
            setUser(result.user)
        })
        .catch((error)=>
        {
            console.log("ERROR", error)
        })
    }

    
    return (
        <div className="flex justify-center min-h-screen items-center ">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-7">
                <h2 className="text-2xl font-semibold text-center">Register Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-black">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-black">IMG-URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="IMG-URL" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-black">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-black">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered w-full" required />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral w-full rounded-none">Register</button>
                    </div>
                    <h1 className="text-center text-base mt-2">Already Have An Account? Please <Link className="text-blue-600 font-semibold" to="/auth/login">Log-In</Link> </h1>
                </form>
            </div>

        </div>
    );
};

export default Register;