// app/UserInformation.tsx

import { signOut } from "next-auth/react";

export interface UserInformationProps {
  username: string;
}

export default function BirthdayList({ username }: UserInformationProps) {
  return (
    <p>
      You are logged in as <span className="font-semibold">{username}</span>.{" "}
      <a href="" onClick={() => signOut({ redirect: true })}>
        Sign out
      </a>
      .
    </p>
  );
}