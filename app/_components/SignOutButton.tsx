"use client"

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function SignOutButton() {

  const handleButtonClick = () => {
    signOut({callbackUrl: "/"})
  }

  return (
    <Button onClick={handleButtonClick}>
      Log Out
    </Button>

  )
}