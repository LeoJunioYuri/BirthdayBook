import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from './login/page'
import Link from 'next/link'
import BirthdayList from './BirthdayList/Page'

import { getServerSession } from "next-auth/next";
import { authOptions } from '../pages/api/auth/[...nextauth]'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session?.user?.name ? (
        <BirthdayList username={session?.user.name} />
      ) : (
    
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="text-white text-center">
        {session?.user?.name ? (<h1 className="text-4xl font-bold mb-4">Bem-vindo de volta ao BirthdayBook</h1>) : (<h1 className="text-4xl font-bold mb-4">BirthdayBook</h1>) }
          <p className="text-lg">Celebre os aniversários dos seus amigos de uma maneira especial!</p>
          <button className="mt-8 bg-white text-purple-500 px-6 py-3 rounded-full font-bold shadow-md hover:bg-purple-100 hover:text-purple-600 transition-colors duration-300">
          <Link href="/login">
            Começar
          </Link>
          </button>
        </div>
      </div>
      )}
    </div>
  );
}
