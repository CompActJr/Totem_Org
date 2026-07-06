export interface NavLink {
  label: string
  href: string
}

export default function useNavigation() {
  const navLinks: NavLink[] = [
    {
      label: "INÍCIO",
      href: "/"
    },
    {
      label: "BLOG",
      href: "/blog"
    },
    {
      label: "VOCACIONAL",
      href: "/vocacional/"
    }
  ]

  return {
    navLinks
  }
}