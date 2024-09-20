import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* about */}
      <section className="text-center my-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to our website! We are committed to providing you with the best products
          and services. Our goal is to ensure that you have a seamless and enjoyable experience while browsing through our collection of top-tier items.
        </p>
      </section>
   
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our mission is to bring you the latest and greatest products in the tech industry. We aim to provide high-quality items that cater to your needs, whether its the newest phones, accessories, or other gadgets.
        </p>
      </section>
      
      {/* about Team */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Our dedicated team works tirelessly to ensure that we provide top-notch services and products. From our developers to our customer support, every member of our team is here to make your experience outstanding.
        </p>

        {/* Team Members */}
        <div className="flex flex-col items-center gap-6">
          <div>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
          </div>
          {/* Add more team members if needed */}
        </div>
      </section>
      
      {/* satisfaction */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
        <ul className="list-disc pl-5 text-lg text-gray-600">
          <li>Customer satisfaction is our top priority.</li>
          <li>We believe in transparency and honesty in our business practices.</li>
          <li>We are passionate about technology and innovation.</li>
          <li>We strive to offer products of the highest quality.</li>
        </ul>
      </section>
      
      {/* contact */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600">
          Have any questions or concerns? Feel free to <Link href="/contact" className="text-blue-500 hover:underline">contact us</Link>, and our support team will get back to you as soon as possible.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;