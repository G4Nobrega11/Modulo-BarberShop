import { useEffect, useState } from 'react';
      import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
      import type { Database } from '@/lib/database.types';

      interface Appointment {
        id: string;
        start_time: string;
        end_time: string;
        service: string;
        client_name: string;
        client_email?: string; // Optional, as it might not always be available
        notes?: string;
      }

      export default function Calendar() {
        const [appointments, setAppointments] = useState<Appointment[]>([]);
        const supabase = createClientComponentClient<Database>();

        useEffect(() => {
          const fetchAppointments = async () => {
            const { data, error } = await supabase
              .from('appointments')
              .select('*');

            if (error) {
              console.error('Error fetching appointments:', error);
              return;
            }

            if (data) {
              // Transform Supabase data to match our Appointment interface
              const transformedAppointments = data.map((appointment) => ({
                id: appointment.id,
                start_time: appointment.start_time,
                end_time: appointment.end_time,
                service: appointment.service,
                client_name: appointment.client_name,
                client_email: appointment.client_email || undefined, // Handle potential null values
                notes: appointment.notes || undefined,
              }));
              setAppointments(transformedAppointments);
            }
          };

          fetchAppointments();
        }, [supabase]);

        return (
          <div>
            <h2>Appointments</h2>
            <ul>
              {appointments.map((appointment) => (
                <li key={appointment.id}>
                  <strong>{appointment.client_name}</strong> ({appointment.client_email || 'No email'}) - {appointment.service}
                  <br />
                  {appointment.start_time} - {appointment.end_time}
                  {appointment.notes && <p>Notes: {appointment.notes}</p>}
                </li>
              ))}
            </ul>
          </div>
        );
      }
