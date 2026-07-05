export interface NavLink {
  label: string
  href: string
}

export default function useNavigation() {
  const navLinks: NavLink[] = [
    {
      label: "Início",
      href: "/"
    },
    {
      label: "Blog",
      href: "/blog"
    }
  ]

  return {
    navLinks
  }
}