function Reviews() {
  return (
    <div className="w-full bg-transparent py-16">
      <div className="font-bold text-2xl text-center">What Customers say about GREEMIND?</div>

     
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {/* Review 1 */}
        <div className="bg-blue-100 border border-blue-300 p-6 rounded-lg shadow-lg">
          <div>
            <h1 className="text-2xl font-bold mb-4">John Doe</h1>
            <p>⭐⭐⭐⭐</p>
            <p className="mt-2">
              &quot;Great experience overall! The plants I ordered arrived in perfect condition, and they look exactly as pictured on the website. The only reason I&apos;m giving it 4 stars is because the delivery took a bit longer than expected, but the quality of the plants made up for it. Highly recommend!&quot;
            </p>
          </div>
        </div>

        {/* Review 2 */}
        <div className="bg-blue-100 border border-blue-300 p-6 rounded-lg shadow-lg">
          <div>
            <h1 className="text-2xl font-bold mb-4">Emily R.</h1>
            <p>⭐⭐⭐⭐⭐</p>
            <p className="mt-2">
              &quot;This shop is a plant lover&apos;s dream! I&apos;ve been buying from them for over a year now, and every plant I&apos;ve purchased has been vibrant and healthy. Their customer service is top-notch too. They helped me pick the perfect low-light plants for my office. Couldn&apos;t be happier!&quot;
            </p>
          </div>
        </div>

        
        <div className="bg-blue-100 border border-blue-300 p-6 rounded-lg shadow-lg">
          <div>
            <h1 className="text-2xl font-bold mb-4">Sarah K.</h1>
            <p>⭐⭐⭐⭐⭐</p>
            <p className="mt-2">
              &quot;Absolutely love this store! The plants are always healthy, and the delivery is quick. Their website is easy to navigate, and I love the variety of plants they offer. A must-visit for anyone looking for quality plants!&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
