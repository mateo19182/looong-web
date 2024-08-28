import { useState } from 'react';

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    // Reset the form
    setEmail('');
  };

  return (
    <section id="signup" className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Join Our Waitlist</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-grow px-4 py-2 rounded-md"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-100 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSignup;