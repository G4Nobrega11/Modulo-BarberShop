'use client';

      import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
      import { useRouter } from 'next/navigation';

      export default function AuthButton() {
        const router = useRouter();
        const supabase = createClientComponentClient();

        const handleSignIn = async () => {
          await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
              scopes: 'https://www.googleapis.com/auth/calendar',
              redirectTo: `${location.origin}/auth/callback`,
            },
          });
        };

        const handleSignOut = async () => {
          await supabase.auth.signOut();
          router.refresh();
        };

        return (
          <button
            onClick={
              (supabase.auth.getUser() ? handleSignOut : handleSignIn) as () => void
            }
          >
            {supabase.auth.getUser() ? 'Sign out' : 'Sign in with Google'}
          </button>
        );
      }
