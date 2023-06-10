import { signOut } from 'next-auth/client';

export default async function handler(req, res) {
  await signOut({ callbackUrl: '/' });
  res.end();
}