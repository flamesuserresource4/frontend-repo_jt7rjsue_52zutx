import { notFound } from 'next/navigation'

const data = {
  'Nursery': {
    subjects:['Alphabet', 'Numbers', 'Colors'],
    syllabus:['Basics of letters','Counting to 50','Shapes & colors'],
    pricing:{ monthly:20, quarterly:55, yearly:200 },
  },
  'LKG': { subjects:['English','Math'], syllabus:['Phonics','Numbers up to 100'], pricing:{ monthly:25, quarterly:70, yearly:240 } },
  'UKG': { subjects:['English','Math','EVS'], syllabus:['Reading','Addition & subtraction','Environment'], pricing:{ monthly:25, quarterly:70, yearly:240 } },
  'Primary': { subjects:['Math','Science','English','Social'], syllabus:['NCERT-aligned modules'], pricing:{ monthly:30, quarterly:85, yearly:300 } },
  'High School': { subjects:['Math','Physics','Chemistry','Biology','English','Social'], syllabus:['Board-focused preparation'], pricing:{ monthly:40, quarterly:110, yearly:380 } },
  'Intermediate': { subjects:['PCM/PCB/Commerce/Arts'], syllabus:['Competitive & board prep'], pricing:{ monthly:50, quarterly:140, yearly:500 } },
  'Degree': { subjects:['B.Com','B.Sc','BBA'], syllabus:['Semester-wise modules'], pricing:{ monthly:60, quarterly:170, yearly:600 } },
}

export default function LevelPage({ params }){
  const level = decodeURIComponent(params.level)
  const course = data[level]
  if(!course) return notFound()
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">{level}</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-xl font-semibold">Syllabus Overview</h2>
          <ul className="mt-3 list-disc pl-5 text-gray-600 dark:text-gray-300">
            {course.syllabus.map((s,i)=> <li key={i}>{s}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-xl font-semibold">Subjects</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {course.subjects.map((s,i)=> <span key={i} className="px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700">{s}</span>)}
          </div>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[{label:'Monthly',price:course.pricing.monthly,plan:'monthly'},{label:'Quarterly',price:course.pricing.quarterly,plan:'quarterly'},{label:'Yearly',price:course.pricing.yearly,plan:'yearly'}].map((p,i)=> (
          <div key={i} className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-semibold">{p.label}</h3>
            <p className="mt-2 text-3xl font-bold">${p.price}</p>
            <form action="/api/enroll" method="POST" className="mt-4">
              <input type="hidden" name="level" value={level} />
              <input type="hidden" name="plan" value={p.plan} />
              <button className="mt-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white px-6 py-2 font-semibold">Enroll</button>
            </form>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-xl font-semibold">Sample Lesson</h2>
        <div className="mt-3 aspect-video rounded-xl bg-black/10 dark:bg-white/10 flex items-center justify-center text-sm text-gray-500">
          Video placeholder
        </div>
      </div>
    </div>
  )
}
