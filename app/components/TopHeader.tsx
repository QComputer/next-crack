import ThemeToggle from './ThemeToggle'

export default function TopHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-900/70 border-b border-white/10 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-lg font-display">Crack Coffee</h1>
        <nav className="flex items-center gap-6">
          <a href="#about" className="text-sm hover:text-white">About</a>
          <a href="#products" className="text-sm hover:text-white">Products</a>
          <a href="#courses" className="text-sm hover:text-white">Courses</a>
          <a href="#blog" className="text-sm hover:text-white">Blog</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
