export const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Nossa Escola', href: '#sobre' },
  { label: 'Unidades', href: '#unidades' },
  { label: 'Matrículas', href: '#agende' },
  { label: 'Estude no Totem', href: '#vocacional' },
  { label: 'Fale com a Gente', href: '#contato' },
]

export const unidades = [
  {
    city: 'Cachoeira do Sul',
    image: new URL('../assets/imagens/FACHADA-CACHOEIRA.jpg', import.meta.url).href,
    levels: ['Berçário', 'Educação Infantil', 'Ensino Fundamental I e II', 'Ensino Médio'],
    link: '#unidade-cachoeira',
    address: 'Avenida Presidente Vargas, 1958',
    phone: '55 3722-2977',
    whatsapp: '55 9 9088-3334',
    email: 'cachoeira@colegiototem.com.br',
    facebook: '#',
    instagram: '#',
  },
  {
    city: 'Cruz Alta',
    image: new URL('../assets/imagens/FACHADA-CRUZ-ALTA.jpg', import.meta.url).href,
    levels: ['Ensino Fundamental I e II', 'Ensino Médio'],
    link: '#unidade-cruzalta',
    address: 'General Felipe Portinho, 1216',
    phone: '55 3521-7990',
    whatsapp: '55 9 9076-7990',
    email: 'cruzalta@colegiototem.com.br',
    facebook: '#',
    instagram: '#',
  },
  {
    city: 'Santa Maria',
    image: new URL('../assets/imagens/FACHADA-SANTA-MARIA.jpg', import.meta.url).href,
    levels: ['Ensino Fundamental I e II', 'Ensino Médio'],
    link: '#unidade-santamaria',
    address: 'RS-287, KM 234, Trevo de Uglione',
    phone: '55 3025-8480',
    whatsapp: '55 9 9125-8480',
    email: 'santamaria@colegiototem.com.br',
    facebook: '#',
    instagram: '#',
  },
]

export const educationLevels = [
  'Berçário',
  'Educação Infantil',
  'Ensino Fundamental I',
  'Ensino Fundamental II',
  'Ensino Médio',
]

export const testimonials = [
  {
    name: 'Alberto Martins',
    role: 'Pai Totem em Cachoeira do Sul',
    photo: new URL('../assets/imagens/depoimento-alberto.jpg', import.meta.url).href,
    text: 'Escolhi o Totem porque quero que meu filho cresça em um ambiente onde ele seja visto, ouvido e respeitado como indivíduo. No Totem, ele não é apenas mais um aluno, ele é parte ativa de uma comunidade que valoriza o afeto, o pensamento crítico e o aprendizado real, para a vida. Desde que começou lá, vejo diariamente o brilho nos olhos dele, a curiosidade florescendo e a autonomia se fortalecendo.',
  },
  {
    name: 'Carla Souza',
    role: 'Mãe Totem em Cruz Alta',
    photo: new URL('../assets/imagens/depoimento-carla.jpg', import.meta.url).href,
    text: 'A troca de escola foi uma decisão difícil, mas o acolhimento do Totem fez toda diferença. Minha filha se sente segura para errar, perguntar e criar, e isso mudou a relação dela com aprender.',
  },
  {
    name: 'Rodrigo Lima',
    role: 'Pai Totem em Santa Maria',
    photo: new URL('../assets/imagens/depoimento-rodrigo.jpg', import.meta.url).href,
    text: 'O que mais me chama atenção é o cuidado com cada aluno individualmente. Os professores conhecem meus filhos pelo nome e pelo jeito de ser, não é só mais um número.',
  },
]

export function buildWhatsappLink(whatsapp, message) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`
}
