import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github } from "lucide-react";
import { GitHubSignInButton } from "../_components/GitHubSignIn";

export default function AuthPage() {
  return (
    <div className="container flex justify-center pt-32">
      <Card className="w-full max-w-96">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>Sign in in our application to get access to our solutions!</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="flex justify-center items-center gap-4 pt-6 flex-col">
          <GitHubSignInButton />
        </CardContent>
      </Card>
    </div>
  )
}