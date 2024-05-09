import {} from "react";

const Navbar = () => {
  return (
    <nav className="  p-4">
      <div className="container mx-auto flex justify-between items-center ">
        <div>
          <h1 className="text-3xl text-blue-800">
            Hygge<span className="font-bold">X</span>
          </h1>{" "}
        </div>
        <div className="flex space-x-4 gap-6">
          <a href="/" className="text-black">
            Home
          </a>
          <a href="/" className="text-black">
            Flashcard
          </a>
          <a href="/contact" className="text-black">
            Contact
          </a>
          <a href="/faq" className="text-black">
            FAQ
          </a>
          <button
            href="/faq"
            className="text-white bg-blue-800 rounded-full px-9 py-3 "
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
