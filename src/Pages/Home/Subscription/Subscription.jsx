import { useState } from 'react';

const Subscription = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed:', email);
    // Reset the email field
    setEmail('');
  };

  return (
    <div className="bg-gray-100 py-8 ">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center"> Newsletter</h2>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="email"
            className="w-full rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="btn bg-custom-gradient"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscription;
