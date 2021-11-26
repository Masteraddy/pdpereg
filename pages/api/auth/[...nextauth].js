import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "../../../data";
import bcrypt from "bcryptjs";

import User from "../../../models/User";
import dbConnect from "../../../libs/dbConnect";

const authConfig = NextAuth({
  session: {
    strategy: "jwt",
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        const { username, password } = credentials;
        await dbConnect();
        // Add logic here to look up the user from the credentials supplied
        // const user = users.find(
        //   (val) => val.username === credentials.username && val.password === credentials.password
        // );
        // const salt = await bcrypt.genSalt(10);
        // this.password = await bcrypt.hash(this.password, salt);

        const user = await User.findOne({ username });
        if (!user) {
          return null;
        }
        const ans = await bcrypt.compare(password, user.password);
        if (ans) {
          // Any object returned will be saved in `user` property of the JWT
          const result = await User.findOne({ username }).select("-password");

          return result;
        } else {
          // If you return null or false then the credentials will be rejected
          return null;
        }
      },
    }),
  ],

  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   return true;
    // },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    async session({ session, user, token }) {
      const userRel = await User.findOne({ email: session.user.email }).select("-password");
      session.user = userRel;
      return session;
    },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token;
    // },
  },
  secret: "grtyuihjbvgytuyiuojkhbgtyu678",
  jwt: {
    secret: "qwertyuiop[",
    encryption: true,
  },
});

export default authConfig;
