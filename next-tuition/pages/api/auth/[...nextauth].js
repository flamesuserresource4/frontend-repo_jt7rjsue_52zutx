import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { dbConnect } from '@/lib/mongodb'
import User from '@/models/User'
import bcrypt from 'bcryptjs'

export const authOptions = {
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: { email: { label: 'Email', type: 'email' }, password: { label: 'Password', type: 'password' } },
      async authorize(credentials) {
        await dbConnect()
        const user = await User.findOne({ email: credentials.email })
        if(!user) throw new Error('User not found')
        const valid = user.password ? await bcrypt.compare(credentials.password, user.password) : false
        if(!valid) throw new Error('Invalid credentials')
        return { id: user._id.toString(), name: user.name, email: user.email, role: user.role }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if(user) token.role = user.role
      return token
    },
    async session({ session, token }) {
      session.user.role = token.role
      return session
    }
  },
  pages: { signIn: '/auth/login' }
}

export default NextAuth(authOptions)
