import logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 px-5 sm:px-8 lg:px-6 py-10 ">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5  gap-8  ">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4 md:col-span-2  items-center md:items-start text-center md:text-left">
          <div className="w-28 sm:w-32 cursor-pointer">
            <img src={logo} alt="DevStack Logo" className="w-full h-auto" />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          {/* Social Links */}
          <div className="flex flex-wrap gap-4 items-center ">
            <button className="hover:text-[#FF5722] transition cursor-pointer">
              Github
            </button>
            <svg
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className= "md:hidden"
            >
              <path
                d="M1.875 3.75002C1.53125 3.75002 1.21733 3.66622 0.933239 3.4986C0.649148 3.32815 0.421875 3.10087 0.25142 2.81678C0.0838068 2.53269 0 2.21877 0 1.87502C0 1.52843 0.0838068 1.21451 0.25142 0.933261C0.421875 0.64917 0.649148 0.423317 0.933239 0.255704C1.21733 0.0852492 1.53125 2.19345e-05 1.875 2.19345e-05C2.22159 2.19345e-05 2.53551 0.0852492 2.81676 0.255704C3.10085 0.423317 3.3267 0.64917 3.49432 0.933261C3.66477 1.21451 3.75 1.52843 3.75 1.87502C3.75 2.21877 3.66477 2.53269 3.49432 2.81678C3.3267 3.10087 3.10085 3.32815 2.81676 3.4986C2.53551 3.66622 2.22159 3.75002 1.875 3.75002Z"
                fill="#4B5563"
              />
            </svg>
            <button className="hover:text-[#FF5722] transition cursor-pointer">
              Twitter
            </button>
            <svg
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className= "md:hidden"
            >
              <path
                d="M1.875 3.75002C1.53125 3.75002 1.21733 3.66622 0.933239 3.4986C0.649148 3.32815 0.421875 3.10087 0.25142 2.81678C0.0838068 2.53269 0 2.21877 0 1.87502C0 1.52843 0.0838068 1.21451 0.25142 0.933261C0.421875 0.64917 0.649148 0.423317 0.933239 0.255704C1.21733 0.0852492 1.53125 2.19345e-05 1.875 2.19345e-05C2.22159 2.19345e-05 2.53551 0.0852492 2.81676 0.255704C3.10085 0.423317 3.3267 0.64917 3.49432 0.933261C3.66477 1.21451 3.75 1.52843 3.75 1.87502C3.75 2.21877 3.66477 2.53269 3.49432 2.81678C3.3267 3.10087 3.10085 3.32815 2.81676 3.4986C2.53551 3.66622 2.22159 3.75002 1.875 3.75002Z"
                fill="#4B5563"
              />
            </svg>
            <button className="hover:text-[#FF5722] transition cursor-pointer">
              LinkedIn
            </button>
          </div>
        </div>
        {/* Product */}
        <div className="hidden md:flex flex-col gap-4 ">
          <h3 className="font-semibold text-gray-900"> PRODUCT </h3>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-600 hover:text-[#FF5722] cursor-pointer transition">
              Home
            </li>
            <li className="text-gray-600 hover:text-[#FF5722] cursor-pointer transition">
              Technologies
            </li>
            <li className="text-gray-600 hover:text-[#FF5722] cursor-pointer transition">
              Projects
            </li>
          </ul>
        </div>
        {/* Company */}
        <div className="hidden md:flex flex-col gap-4">
          <h3 className="font-semibold text-gray-900"> COMPANY </h3>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-600 hover:text-[#FF5722] cursor-pointer transition">
              About
            </li>
            <li className="text-gray-600 hover:text-[#FF5722] cursor-pointer transition">
              Contact
            </li>
            <li className="text-gray-600 hover:text-[#FF5722] cursor-pointer transition">
              Careers
            </li>
          </ul>
        </div>
        {/* Legal */}
        <div className="hidden md:flex flex-col gap-4">
          <h3 className="font-semibold text-gray-900"> LEGAL </h3>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-600 hover:text-[#FF5722] cursor-pointer transition">
              Privacy Policy
            </li>
            <li className="text-gray-600 hover:text-[#FF5722] cursor-pointer transition">
              Terms of Service
            </li>
          </ul>
        </div>
      </div>
      {/* Divider */} <hr className="max-w-7xl mx-auto my-8 border-gray-300" />
      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 text-sm text-center sm:text-left">
        <p className="text-gray-600">© 2026 DevStack. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-[#FF5722] transition">
            Privacy
          </a>
          <a href="#" className="hover:text-[#FF5722] transition">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
