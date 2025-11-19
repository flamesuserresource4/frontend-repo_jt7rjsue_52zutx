export const metadata = { title: 'Online Classes' }

export default function OnlineClasses() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Online Classes</h1>
      <p className="mt-6 text-gray-600 dark:text-gray-300">Join live classes via Zoom/Google Meet/Jitsi. Access recorded sessions, materials, and live chat. Attendance is tracked automatically.</p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[{
          title:'Live Classroom',desc:'Real-time interaction with teachers and peers. Screen sharing and chat built-in.'
        },{
          title:'Recorded Library',desc:'Missed a class? Access recordings and study materials anytime.'
        },{
          title:'Assessments',desc:'MCQs and assignments to measure progress with instant feedback.'
        }].map((c,i)=> (
          <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 p-6">
        <p className="text-sm text-gray-500">Demo room placeholder — connect Zoom/Meet/Jitsi links per class from the dashboard.</p>
      </div>
    </div>
  )
}
