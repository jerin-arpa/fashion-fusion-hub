import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="bg-slate-950 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-9xl font-bold text-white mb-5">4<span className="text-amber-600">0</span>4</h2>
                    <h4 className="mb-3 text-2xl font-semibold text-amber-600">
                        Oops! That page can’t be found
                    </h4>
                    <p className="mb-8 text-lg text-white">
                        The page you are looking for it maybe deleted
                    </p>
                    <Link to='/'>
                        <button className="btn btn-warning btn-outline">GO Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;