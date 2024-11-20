import Link from 'next/link';

const Navbar = () => (
  <div className="flex justify-around items-center p-5 bg-[#1A2238]">
    <div className="text-2xl font-bold text-white"><a href="#">BrandName</a></div>
    <ul className="flex gap-5 text-gray-300 -ml-60">
      <li><Link href="#">Home</Link></li>
      <li><Link href="#">Product</Link></li>
      <li><Link href="#">Pricing</Link></li>
      <li><Link href="#">Contact</Link></li>
    </ul>
    <div className="flex gap-3 items-center">
      <Link href="#" className="text-white">Login</Link>
      <Link href="#" className="bg-blue-500 text-white px-4 py-2 rounded">JOIN US</Link>
    </div>
  </div>
);

export default Navbar;
