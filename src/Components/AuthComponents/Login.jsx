import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {

    const {signInUser,setUser} = useContext(AuthContext)
    const handleSubmit =(e)=>
    {
          e.preventDefault();

          const email = e.target.email.value;
          const password = e.target.password.value;
          signInUser(email,password)
          .then((result)=> {
            console.log(result)
            setUser(result.user)
        })
        .catch((error)=>
        {
            alert(error.code)
        })
    }
    return (
        <div className="flex justify-center min-h-screen items-center ">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-7">
                <h2 className="text-2xl font-semibold text-center">Log In Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered w-full" required />
                        <label className="label">
                            <a href="#" className="label-text text-black-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral w-full rounded-none">Login</button>
                    </div>
                    <h1 className="text-center text-base mt-2">New Here? Please <Link className="text-blue-600 font-semibold" to="/auth/register">Register</Link> First</h1>
                </form>
            </div>

        </div>
    );
};

export default Login;