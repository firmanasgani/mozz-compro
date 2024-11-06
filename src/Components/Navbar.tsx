import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-slate-800 text-white">
      <div className="flex gap-4">
        <span>Mozz Display</span>
      </div>
      <div className="flex gap-4">
        <Link href="/">
          <span className="hover:bg-white hover:text-black">Home</span>
        </Link>
        <Link href="/product">
          <span className="hover:bg-white hover:text-black">Product</span>
        </Link>
        <Link href="/services">
          <span className="hover:bg-white hover:text-black">Services</span>
        </Link>
        <Link href="/about-us">
          <span className="hover:bg-white hover:text-black">About Us</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
