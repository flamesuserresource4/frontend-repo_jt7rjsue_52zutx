"use client";
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import Link from 'next/link'

export default function Login(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState(null)
  const submit = async (e)=>{
    e.preventDefault()
    const res = await signIn('credentials', { redirect: false, email, password })
    if(res?.error) setError(res.error)
    else window.location.href = '/dashboard'
  }
  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <h1 className="text-3xl font-bold">Login</h1>
      <form onSubmit={submit} className="mt-8 grid gap-4">
        <input type="email" placeholder="Email" className="rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button className="rounded-xl bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 font-semibold">Login</button>
      </form>
      {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
      <p className="mt-6 text-sm text-gray-500">No account? <Link className="underline" href="/auth/register">Register</Link></p>
    </div>
  )
}
