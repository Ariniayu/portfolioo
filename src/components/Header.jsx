export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-16 bg-gradient-to-br from-black via-gray-900 to-gray-800 ">
      <div className="text-white text-lg font-bold">ARINI AYU</div>
      <nav className="space-x-6 text-sm font-semibold">
        <a href="#about" className="hover:text-yellow-400">About</a>
        <a href="#portfolio" className="hover:text-yellow-400">Portfolio</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </nav>
    </header>
  );
}
