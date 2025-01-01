import Link from "next/link";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container mx-auto py-10 text-center text-lg">
      <h1 className="text-5xl">Willow & Thyme Restaurant</h1>
      <hr className="border-black my-5 mx-40" />
      <p className="mb-8">Ekantakuna - Lalitpur, Nepal</p>
      <div className="space-y-2">
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
      <hr className="border-black my-10 mx-40" />
      <div className="text-base flex justify-center gap-5 underline underline-offset-2">
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
