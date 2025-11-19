"use client";
import { useState } from 'react'

export default function Register(){
  const [form,setForm] = useState({ name:'', email:'', password:'', role:'student' })
  const [status,setStatus] = useState(null)
  const submit = async (e)=>{
    e.preventDefault()
    setStatus('Creating account...')
    try{
      const res = await fetch('/api/auth/register', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
      const data = await res.json()
      if(!res.ok) throw new Error(data.error||'Failed')
      setStatus('Account created. You can login now.')
      setForm({ name:'', email:'', password:'', role:'student' })
    }catch(err){ setStatus(err.message) }
  }
  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <h1 className="text-3xl font-bold">Register</h1>
      <form onSubmit={submit} className="mt-8 grid gap-4">
        <input required placeholder="Name" className="rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
        <input required type="email" placeholder="Email" className="rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <input required type="password" placeholder="Password" className="rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
        <select className="rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3" value={form.role} onChange={e=>setForm({...form,role:e.target.value})}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
        <button className="rounded-xl bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 font-semibold">Create account</button>
      </form>
      {status && <p className="mt-4 text-sm text-gray-500">{status}</p>}
    </div>
  )
}
