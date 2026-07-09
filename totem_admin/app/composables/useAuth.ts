import type { Session } from '@supabase/supabase-js'

export function useAuthSession() {
  // useState = jeito do Nuxt de guardar estado reativo compartilhado
  return useState<Session | null>('auth-session', () => null)
}

export async function login(email: string, senha: string) {
  const supabase = useSupabase()
  const session = useAuthSession()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password: senha,
  })

  if (error) throw error

  session.value = data.session
  return data.session
}

export async function logout() {
  const supabase = useSupabase()
  const session = useAuthSession()

  await supabase.auth.signOut()
  session.value = null
}