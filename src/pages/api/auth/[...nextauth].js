import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "479088596173-fm37gjacp0r7c2t0pv7d222b8osopd64.apps.googleusercontent.com",
    clientSecret: "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",
    }),
    // Add other providers here if needed
  ],
});
