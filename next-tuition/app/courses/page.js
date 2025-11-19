import Link from 'next/link'

const levels = [
  { key:'Nursery', title:'Nursery' },
  { key:'LKG', title:'LKG' },
  { key:'UKG', title:'UKG' },
  { key:'Primary', title:'Primary (1–5)' },
  { key:'High School', title:'High School (6–10)' },
  { key:'Intermediate', title:'Intermediate (11–12)' },
  { key:'Degree', title:'Degree' },
]

export default function Courses() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Courses</h1>
      <p className="mt-6 text-gray-600 dark:text-gray-300">Browse class levels and view pricing, syllabus and sample content.</p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {levels.map(l => (
          <Link key={l.key} href={`/courses/${encodeURIComponent(l.key)}`} className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold">{l.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">View plans and syllabus</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
