import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from './login/page'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // </main>
    // <Login />
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
    <div className="text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao BirthdayBook</h1>
      <p className="text-lg">Celebre os aniversários dos seus amigos de uma maneira especial!</p>
      <button className="mt-8 bg-white text-purple-500 px-6 py-3 rounded-full font-bold shadow-md hover:bg-purple-100 hover:text-purple-600 transition-colors duration-300">
      <Link href="/login">
        Começar
      </Link>
      </button>
    </div>
  </div>
  )
}
