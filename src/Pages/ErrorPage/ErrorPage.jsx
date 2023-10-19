import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-9xl font-bold mb-5">4<span className="text-[#FD0054]">0</span>4</h2>
                    <h4 className="mb-3 text-3xl font-bold text-[#FD0054]">
                        Oops! That page can’t be found
                    </h4>
                    <p className="mb-8 text-lg">
                        Sorry but the page you are looking for does not exist, have been removed, name changed or is <br /> temporarily unavailable.
                    </p>
                    <Link to='/'>
                        <button className="btn bg-[#FD0054] border-[#FD0054] hover:bg-white hover:text-[#FD0054] text-white font-bold">Go Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;