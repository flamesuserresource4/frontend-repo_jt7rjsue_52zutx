Tuition Next.js App (JavaScript)

How to run locally:
1. npm install
2. Create .env.local with:

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret
MONGODB_URI=mongodb+srv://...
EMAIL_FROM=hello@tuition.com
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=user
EMAIL_SERVER_PASSWORD=pass

3. npm run dev

Features in this MVP:
- Next.js App Router (JS), Tailwind CSS
- Role-based auth (student/teacher/admin) via Credentials provider
- Dashboard with role views
- Courses pages (Nursery → Degree) with pricing
- About, Online Classes, Contact (DB + optional email)
- MongoDB models: User, Course, Message
- API routes: auth (register/login), courses, contact, enroll placeholder

Next steps:
- Stripe/Razorpay payments + invoices
- Zoom/Meet/Jitsi integration
- Materials, attendance, tests/quizzes, results
- Admin content management
- Dark/light toggle, i18n, blog, SEO meta per page
