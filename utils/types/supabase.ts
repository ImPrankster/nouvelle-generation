export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      entry: {
        Row: {
          category: string
          content: string
          created_at: string | null
          created_by: string
          description: string | null
          id: string
          name: string
          tags: string[] | null
        }
        Insert: {
          category?: string
          content?: string
          created_at?: string | null
          created_by: string
          description?: string | null
          id?: string
          name: string
          tags?: string[] | null
        }
        Update: {
          category?: string
          content?: string
          created_at?: string | null
          created_by?: string
          description?: string | null
          id?: string
          name?: string
          tags?: string[] | null
        }
      }
      user_entry_role: {
        Row: {
          can_edit: boolean
          created_at: string | null
          entry_id: string
          id: number
          user_id: string
        }
        Insert: {
          can_edit?: boolean
          created_at?: string | null
          entry_id: string
          id?: number
          user_id: string
        }
        Update: {
          can_edit?: boolean
          created_at?: string | null
          entry_id?: string
          id?: number
          user_id?: string
        }
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
