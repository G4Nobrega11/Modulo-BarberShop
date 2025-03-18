import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';
import type { Database } from '@/lib/database.types';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  // TEMPORARY: Hardcode the Supabase URL for debugging.  REPLACE with your actual URL.
  const supabase = createMiddlewareClient<Database>({ req, res }, { supabaseUrl: 'https://your-project-id.supabase.co' });
  await supabase.auth.getSession();
  return res;
}
