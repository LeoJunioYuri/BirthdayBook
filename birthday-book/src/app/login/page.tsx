
import React from "react";
import Link from "next/link";
import logo from "public/balloons.svg";
import Image from 'next/image'
import dotenv from "dotenv";
import BirthdayList from "../BirthdayList/Page";

dotenv.config();

const generateStateParam = () => {
  const randomString = Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  return randomString;
};

const stateParam = generateStateParam();

const loginUrl = `https://www.facebook.com/v17.0/dialog/oauth?client_id=${
  process.env.FACEBOOK_APP_ID
}&redirect_uri=${encodeURI(
  `${process.env.NEXTAUTH_URL}/api/auth/callback/facebook`
)}&state=${stateParam}`;

// const loginUrl = `https://www.facebook.com/v17.0/dialog/oauth?client_id=${
//   process.env.FACEBOOK_APP_ID
// }&redirect_uri=${encodeURI(
//   {process.env.NEXTAUTH_URL}
//   )}`;


export default function Login() {
  const backgroundStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')",
  };
  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
      style={backgroundStyle}
    >
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <Image
              src="https://www.svgrepo.com/show/26572/balloons.svg"
              width="150"
              height="300"
              alt="Ícone dos balões de aniversário"
            />
            <h1 className="mb-2 text-2xl">Birthday Book</h1>
            <span className="text-gray-300">
              Entre com sua conta do Facebook
            </span>
          </div>
          <form action="#">
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="name"
                placeholder="id@email.com"
              />
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="Password"
                name="name"
                placeholder="*********"
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              {/* <button type="submit" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button> */}
              <a href={loginUrl}>
                <span className="block w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-blue-600 sm:text-base">
                  Continue with Facebook
                </span>
              </a>
              <button className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">
                <Link href="/">Voltar</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
