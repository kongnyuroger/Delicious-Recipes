export default function Contact() {
  return (
    <div className="max-w-lg mx-auto bg-white shadow rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent! (You can integrate FormSubmit.co or EmailJS)");
        }}
        className="space-y-4"
      >
        <input type="text" placeholder="Name" className="w-full border p-3 rounded" required />
        <input type="email" placeholder="Email" className="w-full border p-3 rounded" required />
        <textarea placeholder="Message" className="w-full border p-3 rounded" required />
        <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
          Send Message
        </button>
      </form>
    </div>
  );
}

