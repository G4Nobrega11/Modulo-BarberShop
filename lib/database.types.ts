export type Json =
        | string
        | number
        | boolean
        | null
        | { [key: string]: Json | undefined }
        | Json[]

      export interface Database {
        public: {
          Tables: {
            appointments: {
              Row: {
                client_email: string | null
                client_name: string
                end_time: string
                id: string
                notes: string | null
                service: string
                start_time: string
                user_id: string | null
              }
              Insert: {
                client_email?: string | null
                client_name: string
                end_time: string
                id?: string
                notes?: string | null
                service: string
                start_time: string
                user_id?: string | null
              }
              Update: {
                client_email?: string | null
                client_name?: string
                end_time?: string
                id?: string
                notes?: string | null
                service?: string
                start_time?: string
                user_id?: string | null
              }
              Relationships: [
                {
                  foreignKeyName: "appointments_user_id_fkey"
                  columns: ["user_id"]
                  isOneToOne: false
                  referencedRelation: "users"
                  referencedColumns: ["id"]
                }
              ]
            }
          }
          Views: {
            [_ in never]: never
          }
          Functions: {
            [_ in never]: never
          }
          Enums: {
            [_ in never]: never
          }
          CompositeTypes: {
            [_ in never]: never
          }
        }
      }
