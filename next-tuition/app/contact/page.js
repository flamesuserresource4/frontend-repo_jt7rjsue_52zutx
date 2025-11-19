"use client";
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' })
  const [status, setStatus] = useState(null)
  const submit = async (e)=>{
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
      const data = await res.json()
      if(!res.ok) throw new Error(data.error||'Failed')
      setStatus('Message sent. We will reach out soon!')
      setForm({ name:'', email:'', phone:'', message:'' })
    } catch (e){ setStatus(e.message) }
  }
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
      <p className="mt-6 text-gray-600 dark:text-gray-300">Have questions? Send us a message.</p>

      <form onSubmit={submit} className="mt-8 grid gap-4">
        <input required placeholder="Your Name" className="rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
        <input required type="email" placeholder="Email" className="rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <input placeholder="Phone" className="rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
        <textarea required placeholder="Message" className="rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3" rows={6} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
        <button className="rounded-xl bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 font-semibold">Send</button>
      </form>

      {status && <p className="mt-4 text-sm text-gray-500">{status}</p>}

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="font-semibold">Email</h3>
          <p className="text-gray-600 dark:text-gray-300">hello@tuition.com</p>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="font-semibold">Phone</h3>
          <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="font-semibold">Office Hours</h3>
          <p className="text-gray-600 dark:text-gray-300">Mon–Sat: 9am–7pm</p>
        </div>
      </div>
    </div>
  )
}
