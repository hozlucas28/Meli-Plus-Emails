export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
	public: {
		Tables: {
			users: {
				Row: {
					avatar_url: string | null
					created_at: string
					email_verified: boolean | null
					full_name: string | null
					id: string
					name: string | null
				}
				Insert: {
					avatar_url?: string | null
					created_at?: string
					email_verified?: boolean | null
					full_name?: string | null
					id: string
					name?: string | null
				}
				Update: {
					avatar_url?: string | null
					created_at?: string
					email_verified?: boolean | null
					full_name?: string | null
					id?: string
					name?: string | null
				}
				Relationships: [
					{
						foreignKeyName: 'users_id_fkey'
						columns: ['id']
						referencedRelation: 'users'
						referencedColumns: ['id']
					},
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
