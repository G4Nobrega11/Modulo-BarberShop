import Calendar from './components/Calendar';
      import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
      import { cookies } from 'next/headers';
      import { redirect } from 'next/navigation';

      export default async function Home() {
        const supabase = createServerComponentClient({ cookies });

        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) {
          redirect('/login'); // Redirect to login if no session
        }

        return (
          <div>
            <h1>Welcome to the Barbershop Scheduler</h1>
            <Calendar />
          </div>
        );
      }
