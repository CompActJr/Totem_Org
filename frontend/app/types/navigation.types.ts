export type NavLink = {
  label: string
  href: string
  children?: NavLink[]
}

export type WhatsappLinks = {
    _id: number,
    slug: string,
    "@type": "colegios" | "vestibulares",
    whatsapp: string,
} 