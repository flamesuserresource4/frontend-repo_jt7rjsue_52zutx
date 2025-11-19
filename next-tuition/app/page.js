import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#60a5fa,transparent_40%)]" />
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_30%,#ec4899,transparent_40%)]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Transform Learning with Our Online & Offline Tuition
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.15,duration:0.6}} className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
            From Nursery to Degree — structured courses, live classes, materials, tests and progress tracking.
          </motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3,duration:0.6}} className="mt-10 flex items-center justify-center gap-4">
            <Link href="/courses" className="rounded-xl bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 font-semibold transition">Explore Courses</Link>
            <Link href="/auth/login" className="rounded-xl border border-gray-300 dark:border-gray-700 px-6 py-3 font-semibold transition">Login</Link>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Why Choose Us</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[{title:'Qualified Teachers',desc:'Handpicked experts for each subject.'},{title:'Doubt Support',desc:'Live chat and doubt-solving sessions.'},{title:'Affordable',desc:'Flexible pricing with monthly/quarterly/yearly plans.'}].map((f,i)=> (
            <motion.div key={i} whileHover={{y:-6}} className="rounded-2xl p-6 border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/5 backdrop-blur">
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
