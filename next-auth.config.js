import GoogleProvider from "next-auth/providers/google";

export default {
  providers: [
    GoogleProvider({
      credentials: {
        ClientId:
          "479088596173-fm37gjacp0r7c2t0pv7d222b8osopd64.apps.googleusercontent.com",
        ClientSecret: "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",
      },
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      return true;
    },
    async redirect(url, baseUrl) {
      return typeof url === "string" && url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/error",
  },
};
