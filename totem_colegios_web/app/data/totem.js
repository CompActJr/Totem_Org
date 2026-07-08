/**
 * Fonte única de dados do Colégio Totem.
 * Usada pela Home, pelo Header/Footer e pelas páginas de unidade.
 */
 
export const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Nossa Escola', href: '#sobre' },
  { label: 'Unidades', href: '#unidades' },
  { label: 'Matrículas', href: '#agende' },
  { label: 'Estude no Totem', href: '#vocacional' },
  { label: 'Fale com a Gente', href: '#contato' },
]
 
export const educationLevels = [
  'Berçário',
  'Educação Infantil',
  'Ensino Fundamental I',
  'Ensino Fundamental II',
  'Ensino Médio',
]
 
export const unidades = [
  {
    city: 'Cachoeira do Sul',
    slug: 'cachoeira',
    image: new URL('../assets/imagens/FACHADA-CACHOEIRA.jpg', import.meta.url).href,
    heroImage: new URL('../assets/imagens/BANNER-1-CACHOEIRA.jpg', import.meta.url).href,
    levels: ['Berçário', 'Educação Infantil', 'Ensino Fundamental I e II', 'Ensino Médio'],
    link: '#unidade-cachoeira',
    address: 'Avenida Presidente Vargas, 1958',
    phone: '55 3722-2977',
    whatsapp: '55 9 9088-3334',
    email: 'cachoeira@colegiototem.com.br',
    facebook: '#',
    instagram: '#',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCol%C3%A9gio+Totem+-+Cachoeira+do+Sul!5e0!3m2!1spt-BR!2sbr',
    infraGallery: [
      new URL('../assets/imagens/BERÇÁRIO-1.jpg', import.meta.url).href,
      new URL('../assets/imagens/BERÇÁRIO-2.jpg', import.meta.url).href,
      new URL('../assets/imagens/BERÇÁRIO-3.jpg', import.meta.url).href,
      new URL('../assets/imagens/BERÇÁRIO-4.jpg', import.meta.url).href,
      new URL('../assets/imagens/BERÇÁRIO-5.jpg', import.meta.url).href,
      new URL('../assets/imagens/BERÇÁRIO-6.jpg', import.meta.url).href,
    ],
  },
  {
    city: 'Cruz Alta',
    slug: 'cruzalta',
    image: new URL('../assets/imagens/FACHADA-CRUZ-ALTA.jpg', import.meta.url).href,
    // TODO: trocar pelas imagens reais da unidade Cruz Alta
    heroImage: new URL('../assets/imagens/FACHADA-CRUZ-ALTA.jpg', import.meta.url).href,
    levels: ['Ensino Fundamental I e II', 'Ensino Médio'],
    link: '#unidade-cruzalta',
    address: 'General Felipe Portinho, 1216',
    phone: '55 3521-7990',
    whatsapp: '55 9 9076-7990',
    email: 'cruzalta@colegiototem.com.br',
    facebook: '#',
    instagram: '#',
    // TODO: gerar embed do Google Maps real para esta unidade
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCol%C3%A9gio+Totem+-+Cruz+Alta!5e0!3m2!1spt-BR!2sbr',
    // TODO: substituir pelas fotos reais da infraestrutura desta unidade
    infraGallery: [],
  },
  {
    city: 'Santa Maria',
    slug: 'santamaria',
    image: new URL('../assets/imagens/FACHADA-SANTA-MARIA.jpg', import.meta.url).href,
    // TODO: trocar pelas imagens reais da unidade Santa Maria
    heroImage: new URL('../assets/imagens/FACHADA-SANTA-MARIA.jpg', import.meta.url).href,
    levels: ['Ensino Fundamental I e II', 'Ensino Médio'],
    link: '#unidade-santamaria',
    address: 'RS-287, KM 234, Trevo de Uglione',
    phone: '55 3025-8480',
    whatsapp: '55 9 9125-8480',
    email: 'santamaria@colegiototem.com.br',
    facebook: '#',
    instagram: '#',
    // TODO: gerar embed do Google Maps real para esta unidade
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCol%C3%A9gio+Totem+-+Santa+Maria!5e0!3m2!1spt-BR!2sbr',
    // TODO: substituir pelas fotos reais da infraestrutura desta unidade
    infraGallery: [],
  },
]
 
/**
 * Busca uma unidade pelo slug (usado nas páginas /unidade-*).
 */
export function findUnidadeBySlug(slug) {
  return unidades.find((u) => u.slug === slug)
}
 
/* -----------------------------------------------------
   DEPOIMENTOS
----------------------------------------------------- */
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
 
/* -----------------------------------------------------
   NÍVEIS DE ENSINO (com imagem — usado nas páginas de unidade)
----------------------------------------------------- */
export const educationLevelsInfo = [
  {
    name: 'Berçário',
    image: new URL('../assets/imagens/NIVEL-BERÇARIO.jpg', import.meta.url).href,
    link: '#',
  },
  {
    name: 'Educação Infantil',
    image: new URL('../assets/imagens/NIVEL-INFANTIL.jpg', import.meta.url).href,
    link: '#',
  },
  {
    name: 'Ensino Fundamental I',
    image: new URL('../assets/imagens/NIVEL-FUNDAMENTAL-1.jpg', import.meta.url).href,
    link: '#',
  },
  {
    name: 'Ensino Fundamental II',
    image: new URL('../assets/imagens/NIVEL-FUNDAMENTAL-2.jpg', import.meta.url).href,
    link: '#',
  },
  {
    name: 'Ensino Médio',
    image: new URL('../assets/imagens/NIVEL-MEDIO.jpg', import.meta.url).href,
    link: '#',
  },
]
 
/* -----------------------------------------------------
   ATIVIDADES EXTRACLASSE
----------------------------------------------------- */
export const activities = [
  {
    name: 'Escolinha de Voleibol',
    icon: new URL('../assets/imagens/ESCOLINHA-DE-VOLEIBOL.jpg', import.meta.url).href,
    link: '#',
  },
  {
    name: 'Voleibol',
    image: new URL('../assets/imagens/VOLEIBOL.jpg', import.meta.url).href,
    details: [''],
    link: '#',
  },
  {
    name: 'Teatro',
    image: new URL('../assets/imagens/TEATRO.jpg', import.meta.url).href,
    details: [''],
    link: '#',
  },
  {
    name: 'Patinação',
    image: new URL('../assets/imagens/PATINAÇÃO.jpg', import.meta.url).href,
    details: [''],
    link: '#',
  },
  {
    name: 'Ballet',
    image: new URL('../assets/imagens/BALLET.jpg', import.meta.url).href,
    details: [''],
    link: '#',
  },
  {
    name: 'Cooking Class',
    icon: new URL('../assets/imagens/COOKING-CLASS.jpg', import.meta.url).href,
    details: [''],
    link: '#',
  },
  {
    name: 'Escolinha de Futsal',
    icon: new URL('../assets/imagens/FUTSAL-1.jpg', import.meta.url).href,
    link: '#',
  },
  {
    name: 'Futsal Juvenil',
    icon: new URL('../assets/imagens/FUTSAL-2.jpg', import.meta.url).href,
    details: [''],
    link: '#',
  },
  {
    name: 'Desenho',
    icon: new URL('../assets/imagens/DESENHO.jpg', import.meta.url).href,
    details: [''],
    link: '#',
  },
]
 
/* -----------------------------------------------------
   PLATAFORMAS PARCEIRAS
----------------------------------------------------- */
export const platforms = [
  {
    name: 'Somos Educação',
    logo: new URL('../assets/imagens/MACMILLAN.jpg', import.meta.url).href,
    description:
      'Sistema de ensino parceiro do Colégio Totem que integra material didático, plataforma digital e acompanhamento pedagógico, apoiando o estudante em todas as etapas da aprendizagem.',
    link: '#',
    linkLabel: 'somos.com.br',
  },
  {
    name: 'SAS Plataforma de Educação',
    logo: new URL('../assets/imagens/SAS.jpg', import.meta.url).href,
    description:
      'Plataforma que une conteúdo, tecnologia e metodologia ativa, oferecendo recursos digitais complementares às aulas e fortalecendo o vínculo entre escola, aluno e família.',
    link: '#',
    linkLabel: 'sas.com.br',
  },
  {
    name: 'Eleva Educação',
    logo: new URL('../assets/imagens/PLURALL.jpg', import.meta.url).href,
    description:
      'Parceria voltada à preparação para os principais vestibulares do país, com foco em resultados, acompanhamento individualizado e conteúdo atualizado para o Ensino Médio.',
    link: '#',
    linkLabel: 'eleva.com.br',
  },
]
 
/* -----------------------------------------------------
   RESULTADOS INCRÍVEIS
----------------------------------------------------- */
export const results = [
  {
    title: 'TERCEIRÃO 2025',
    subtitle: '17 aprovações em Medicina',
    image: new URL('../assets/imagens/RESULTADO-1-CS.jpg', import.meta.url).href,
  },

]
 
/* -----------------------------------------------------
   NOVIDADES
----------------------------------------------------- */
export const news = [
  {
    title: 'Crianças e telas: como encontrar o equilíbrio',
    date: '17 de março de 2026',
    excerpt:
      'O uso de telas na infância e na adolescência é motivo de dúvida entre famílias e educadores. Conheça sinais de alerta e caminhos para um uso mais saudável e consciente da tecnologia no dia a dia.',
    image: new URL('../assets/imagens/NOTÍCIA-1-CACHOEIRA.jpg', import.meta.url).href,
    link: '#',
  },
]
 
/**
 * Monta o link wa.me.
 * NOTA: esta função não remove espaços/traços — espera que `whatsapp`
 * já seja só dígitos (com DDI+DDD, ex. "555199088334"). Os valores em
 * `unidades[].whatsapp` acima estão formatados para exibição (com
 * espaços e traço, ex. "55 9 9088-3334") — se forem passados direto
 * pra esta função, o link do wa.me sai quebrado. Ou ajuste os valores
 * de `whatsapp` nas unidades para ficarem só com dígitos, ou limpe a
 * string antes de chamar esta função (ex.: whatsapp.replace(/\D/g,'')).
 */
export function buildWhatsappLink(whatsapp, message) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`
}