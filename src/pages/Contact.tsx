export default function Contact() {
  return (
    <div className="bg-[#FFF8EE] min-h-screen flex items-center justify-center px-6 py-10">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          Have questions or feedback? We’d love to hear from you!
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
          />
          <textarea
            placeholder="Message..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
