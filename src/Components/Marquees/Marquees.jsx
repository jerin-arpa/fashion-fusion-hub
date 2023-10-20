import Marquee from "react-fast-marquee";

const Marquees = () => {
    return (
        <div className="container mx-auto px-5 py-10 bg-white rounded-xl">
            <Marquee speed={80} pauseOnHover={true} autoFill={true}>
                <img className="w-44" src="https://i.ibb.co/z5QMDXy/IMG-20231018-WA0004.jpg" alt="" />

                <img className="w-32" src="https://i.ibb.co/SQNsYhJ/IMG-20231018-WA0006.jpg" alt="" />

                <img className="w-32" src="https://i.ibb.co/D81WP1k/IMG-20231018-WA0016.jpg" alt="" />

                <img className="w-44" src="https://i.ibb.co/sjVMcWK/IMG-20231018-WA0014.jpg" alt="" />

                <img className="w-44" src="https://i.ibb.co/v3KkmR0/1697629113702.png" alt="" />

                <img className="w-44" src="https://i.ibb.co/Jny0wTL/IMG-20231018-WA0003.jpg" alt="" />
            </Marquee>
        </div>
    );
};

export default Marquees;