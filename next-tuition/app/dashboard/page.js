import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import authOptions from '@/pages/api/auth/[...nextauth]'

export default async function Dashboard(){
  const session = await getServerSession(authOptions)
  if(!session) return redirect('/auth/login')
  const role = session.user.role
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Dashboard</h1>
      {role === 'student' && <StudentView />}
      {role === 'teacher' && <TeacherView />}
      {role === 'admin' && <AdminView />}
    </div>
  )
}

function Card({title,children}){
  return <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6"> <h3 className="text-xl font-semibold">{title}</h3><div className="mt-3">{children}</div></div>
}

function StudentView(){
  return (
    <div className="mt-8 grid md:grid-cols-3 gap-6">
      <Card title="Enrolled Courses">View your classes, schedules and materials.</Card>
      <Card title="Join Live Class">Zoom/Meet link will appear for your schedule.</Card>
      <Card title="Payments">Track fees and invoices.</Card>
    </div>
  )
}
function TeacherView(){
  return (
    <div className="mt-8 grid md:grid-cols-3 gap-6">
      <Card title="Assigned Classes">Manage your sessions and students.</Card>
      <Card title="Upload Materials">Share notes, assignments, and recordings.</Card>
      <Card title="Attendance & Progress">Mark attendance and review progress.</Card>
    </div>
  )
}
function AdminView(){
  return (
    <div className="mt-8 grid md:grid-cols-3 gap-6">
      <Card title="Manage Courses">Add/edit/delete courses and pricing.</Card>
      <Card title="Users">Manage teachers and students.</Card>
      <Card title="Messages">Review enquiries from Contact page.</Card>
    </div>
  )
}
