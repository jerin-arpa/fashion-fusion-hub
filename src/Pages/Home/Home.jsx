import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import BrandCard from "../../Components/BrandCard/BrandCard";

const Home = () => {

    const brands = useLoaderData();

    return (
        <div>
            <Banner></Banner>

            <div className="container mx-auto px-5 py-16">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                    {
                        brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;