import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
      import { cookies } from 'next/headers';
      import { redirect } from 'next/navigation';
      import AuthButton from '../components/AuthButton.client';

      export default async function Login() {
        const supabase = createServerComponentClient({ cookies });
        const { data } = await supabase.auth.getSession();

        if (data.session) {
          redirect('/');
        }

        return (
          <div>
            <h1>Login</h1>
            <p>Please sign in with Google to continue.</p>
            <AuthButton />
          </div>
        );
      }
