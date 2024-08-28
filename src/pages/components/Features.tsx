import { LightBulbIcon, HeartIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Features: React.FC = () => {
  const features = [
    {
      icon: LightBulbIcon,
      title: "Cutting-edge Research",
      description: "Stay at the forefront of longevity science with our ongoing research and developments."
    },
    {
      icon: HeartIcon,
      title: "Personalized Health Plans",
      description: "Receive tailored strategies to optimize your health and extend your lifespan."
    },
    {
      icon: SparklesIcon,
      title: "Advanced Supplements",
      description: "Access our specially formulated supplements designed to support longevity and vitality."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;