import { signOut } from 'next-auth/react';

export default async function handler(req, res) {
  await signOut({ callbackUrl: '/' });
  res.end();
}