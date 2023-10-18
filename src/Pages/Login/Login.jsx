import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { signIn, googleSignUp } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('Location in the login page', location);
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);

                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setLoginError('Invalid email or password. Please try again.');
            })
    }


    const handleGoogleSignUp = () => {
        googleSignUp()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })

    }


    return (
        <div className="bg-slate-900 py-10">
            <div className="flex justify-center my-12 container mx-auto px-5">
                <div className="bg-slate-950 rounded-xl w-full md:w-3/4 lg:w-2/4 py-8">
                    <h2 className="text-3xl font-bold text-center pt-10 pb-5"><span className="text-amber-600">Login</span> your account</h2>
                    <form onSubmit={handleLogin} className="px-4 md:px-14">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"}
                                name="password" placeholder="Enter your Password" className="input input-bordered w-full" required />
                            <div className="relative flex justify-end">
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute bottom-4 right-4">
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div>
                            {
                                loginError && <p className="text-red-500 text-xl text-center">{loginError}</p>
                            }
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-amber-600 border-amber-600 hover:bg-white hover:text-amber-600 text-white font-bold">Login</button>
                        </div>

                        <div>
                            <button onClick={handleGoogleSignUp} className="btn btn-outline mt-5 mb-4 w-full">
                                <FcGoogle className='text-xs md:text-xl'></FcGoogle>
                                <span className="text-xs md:text-md">Continue with Google</span>
                            </button>
                        </div>
                    </form>


                    <div className="flex justify-center mb-4">
                        <h2 className="text-xs md:text-lg mt-6 md:mt-8 mb-6">Do not have an account? <Link to='/signup' className="text-amber-600 underline font-bold">SignUp</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;