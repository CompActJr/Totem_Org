export type NavLink = {
  label: string
  href: string
  children?: NavLink[]
}

export type WhatsappButton = {
    _id: number,
    slug: string,
    whatsapp: string,
}