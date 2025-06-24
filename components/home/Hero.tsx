export function Hero() {
  return (
    <section className="relative py-12 mt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dilbujbhi/image/upload/v1750746682/ZkRBPQ_g4eyul.jpg')`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">MKM</span>{" "}
          <span className="text-gray-400 font-light">Garage</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
          Where Wild Roads Meet Untamed Spirits
        </p>

        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-200">
          <p>
            At MKM Garage, we understand that the best adventures happen off the
            beaten path. For over two decades, we&apos;ve equipped riders with machines
            built to conquer mountain trails, forest paths, and endless highways.
          </p>
          <p>
            Our mission is to connect adventurous souls with motorcycles that
            thrive in nature&apos;s playground. Whether you&apos;re planning a cross-country
            expedition or exploring hidden forest trails, we have the perfect
            companion for your journey into the wild.
          </p>
        </div>

        <div className="mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            Discover Your Adventure
          </button>
        </div>
      </div>
    </section>
  );
}
