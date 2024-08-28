import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="bg-blue-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-blue-800 mb-4">
          Live Longer, Live Better
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover innovative solutions for longevity and improved quality of life with Looong Life.
        </p>
        <Link 
          href="#signup" 
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Join the Waitlist
        </Link>
      </div>
    </div>
  );
};

export default Hero;