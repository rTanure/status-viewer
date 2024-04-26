"use client"

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react"

export function GitHubSignInButton() {

  const handleButtonClick = () => {
    signIn("github", {callbackUrl: "/dashboard"})
  }

  return (
    <Button onClick={handleButtonClick}>
      <Github className="size-4 mr-4" />
      sign in with GitHub 
    </Button>
  )
}