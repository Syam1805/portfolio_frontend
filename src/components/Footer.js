import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-600 py-4 mt-8">
      <div className="container mx-auto flex justify-center space-x-8">
        <a
          href="https://www.instagram.com/syam_panga/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-pink-400 transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/SyamsundarPanga"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-blue-300 transition-colors"
        >
          <FaFacebook />
        </a>
        <a
          href="https://wa.me/918919004890"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-green-400 transition-colors"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/panga-syamsundar-rao-39b192226/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-blue-400 transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;