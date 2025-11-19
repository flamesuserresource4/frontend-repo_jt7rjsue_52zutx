export const metadata = { title: 'About Us' }

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">About Our Institute</h1>
      <p className="mt-6 text-gray-600 dark:text-gray-300 leading-7">
        We are a modern tuition institute focused on outcome-driven learning. Our mission is to make high-quality education accessible through structured courses, live interactive classes, and continuous assessments. With a network of experienced teachers and an integrated platform, we support both online and offline learning needs.
      </p>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-xl font-semibold">Our Vision</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Empower learners from Nursery to Degree with adaptive learning and personalized mentorship.</p>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-xl font-semibold">Teaching Methodology</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Concept-first learning, regular assessments, practice-driven modules, and analytics-led progress tracking.</p>
        </div>
      </div>
    </div>
  )
}
