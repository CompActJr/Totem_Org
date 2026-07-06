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
    name: 'Carine',
    role: 'mãe da Sofia Comassetto - Totem Cachoeira do Sul',
    photo: new URL('../assets/imagens/Carine.jpg', import.meta.url).href,
    text: 'O Totem transmite confiança, segurança e estimula os alunos ao aprendizado. A equipe diretiva está constantemente envolvida e próxima dos alunos.',
  },
  {
    name: 'Vanessa Giroldi',
    role: 'mãe do Otávio e do Inácio Adolfo Giroldi - Totem Cachoeira do Sul',
    photo: new URL('../assets/imagens/Vanessa.jpg', import.meta.url).href,
    text: 'Escolhi o Totem porque quero que meus filhos cresçam em um ambiente onde se sintam acolhidos, valorizados e felizes. Aqui encontrei não só qualidade no ensino, mas também cuidado, carinho e valores que fazem diferença na formação deles como pessoas. Confio na proposta pedagógica e acredito que aqui meus filhos terão um bom desenvolvimento acadêmico e pessoal. Sem dúvida foi uma das melhores escolhas que fiz para o futuro deles.',
  },
  {
    name: 'Luisa Felix Muller',
    role: 'mãe - Totem Cachoeira do Sul',
    photo: new URL('../assets/imagens/Luisa.jpg', import.meta.url).href,
    text: 'Vejo meu filho se desenvolvendo com alegria, autonomia e valores sólidos. Vejo diariamente o brilho nos olhos dele, a curiosidade florescendo e a autonomia se fortalecendo. É uma escola que prepara o mundo, sem abrir mão da infância. E isso, para mim, é transformador. A escola supera minhas expectativas ao educar com afeto e propósito. ',
  },
  {
    name: 'Vanice Moraes',
    role: 'vó do Eduardo e do Guilherme - Totem Cachoeira do Sul',
    photo: new URL('../assets/imagens/Vanice.jpg', import.meta.url).href,
    text: 'Quem escolheu o Totem foram eles. O Eduardo e o Guilherme escolheram pela qualidade do ensino, pelos professores (ótimos) que transmitem segurança aos alunos e pelo acolhimento de todos.',
  },

]

export function buildWhatsappLink(whatsapp, message) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`
}
