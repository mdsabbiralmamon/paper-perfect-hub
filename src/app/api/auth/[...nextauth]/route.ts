import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";

export const authOptions = {
  session: {
    strategy: "jwt" as const,
  },
  pages: {
    signIn: "/signin",
    signUp: "/signup",
  },
  // Configure one or more authentication providers
  providers: [
    // email provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(
          auth,
          (credentials as any).email || "",
          (credentials as any).password || ""
        )
          .then((userCredential) => {
            const user = {email: userCredential.user.email, name: userCredential.user.displayName};
            if (user) {
              return user;
            }
            return null;
            
          })
          .catch((error) => console.log(error))
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
          });
      },
    }),
    // github provider
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    })
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };