import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-3 gap-6 text-sm text-gray-500">
        <div>
          <div className="font-bold text-gray-900 dark:text-gray-100">Tuition</div>
          <p className="mt-2">Excellence from Nursery to Degree.</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="font-semibold text-gray-700 dark:text-gray-200">Company</div>
            <ul className="mt-2 space-y-1">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/online-classes">Online Classes</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-700 dark:text-gray-200">Legal</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="text-right md:text-left">© {new Date().getFullYear()} Tuition</div>
      </div>
    </footer>
  )
}
