"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar(){
  const path = usePathname()
  const [open,setOpen] = useState(false)
  const links = [
    { href:'/', label:'Home' },
    { href:'/courses', label:'Courses' },
    { href:'/online-classes', label:'Online Classes' },
    { href:'/about', label:'About' },
    { href:'/contact', label:'Contact' }
  ]
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-black/40 border-b border-white/0">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl">Tuition</Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l=> (
            <Link key={l.href} href={l.href} className={`hover:text-brand-600 ${path===l.href?'text-brand-600 font-semibold':''}`}>{l.label}</Link>
          ))}
          <Link href="/auth/login" className="rounded-xl bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 font-semibold">Login</Link>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="menu">☰</button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {links.map(l=> <Link key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</Link>)}
          <Link href="/auth/login" onClick={()=>setOpen(false)} className="rounded-xl bg-brand-600 text-white px-4 py-2">Login</Link>
        </div>
      )}
    </header>
  )
}
