import prisma from '@/lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL;

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  cookies: {
    sessionToken: {
      name: `${VERCEL_DEPLOYMENT ? '__Secure-' : ''}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        // When working on localhost, the cookie domain must be omitted entirely (https://stackoverflow.com/a/1188145)
        domain: VERCEL_DEPLOYMENT ? '.mindplanr.com' : undefined,
        secure: VERCEL_DEPLOYMENT,
      },
    },
  },
  pages: {
    error: '/app/login',
  },
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      console.log({ user, account, profile });
      if (!user.email) {
        return false;
      }
      const userExists = await prisma.user.findUnique({
        where: { email: user.email },
        select: { name: true },
      });

      // if the user already exists via email,
      // update the user with their name and image from Google
      if (userExists && !userExists.name) {
        await prisma.user.update({
          where: { email: user.email },
          data: {
            name: profile?.name,
            //@ts-ignore - this is a bug in the types, `picture` is a valid on on the `Profile` type
            image: profile?.picture,
          },
        });
      }

      return true;
    },
    jwt: async ({ token, account, user, trigger }) => {
      if (!token.email) return {};

      if (user) {
        token.user = user;
      }

      if (trigger === 'update') {
        const refreshedUser = await prisma.user.findUnique({
          where: { id: token.sub },
        });
        if (refreshedUser) {
          token.user = refreshedUser;
        } else {
          return {};
        }
      }

      return token;
    },
    session: async ({ session, token }) => {
      session.user = {
        id: token.sub,
        // @ts-ignore
        ...(token || session).user,
      };
      return session;
    },
  },
  events: {
    async signIn(message) {
      if (message.isNewUser) {
        const email = message.user.email as string;
        const user = prisma.user.findUnique({
          where: { email },
          select: {
            name: true,
            createdAt: true,
          },
        });
        // only send welcome email if the user was create in the last 10 seconds
        // (this is a workaround because the `isNewUser` flag is triggered when a user does `dangerousEmailAccountLinking`)
        if (
          user?.createdAt &&
          new Date().getTime() - new Date(user.createdAt).getTime() < 10000
        ) {
          // TODO: Send Welcome Email
        }
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
