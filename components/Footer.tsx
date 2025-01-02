import Link from "next/link";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="md:py-10 py-4 text-center md:text-lg">
      <h1 className="md:text-5xl text-2xl">Willow & Thyme Restaurant</h1>
      <hr className="border-black md:my-5 my-3 mx-40 hidden md:block" />
      <p className="md:mb-8 mb-3">Ekantakuna - Lalitpur, Nepal</p>
      <div className="space-y-2 text-xs md:text-base">
        <p>Monday-Friday: 11am - 9pm</p>
        <p>Happy Hour: 2pm - 9pm</p>
        <p>Saturday-Sunday: Closed</p>
      </div>
      <div className="flex space-x-5 justify-center my-5 cursor-pointer hover:opacity-80">
        <FaFacebook size={25} />
        <FaTwitter size={25} />
        <FaYoutube size={25} />
        <FaInstagram size={25} />
      </div>
      <hr className="border-black md:my-10 mx-40 hidden md:block" />
      <div className="md:text-base flex justify-center md:gap-5 gap-3 underline underline-offset-2 text-sm">
        <Link href="/">
          <p className="hover:opacity-80 cursor-pointer">Home</p>
        </Link>
        <Link href='our-menus'>
          <p className="hover:opacity-80 cursor-pointer">Our Menus</p>
        </Link>
        <Link href="/about-us">
          <p className="hover:opacity-80 cursor-pointer">About us</p>
        </Link>
        <Link href='/reservation'>
          <p className="hover:opacity-80 cursor-pointer">Reservations</p>
        </Link>
      </div>
    </div>
  );
}
