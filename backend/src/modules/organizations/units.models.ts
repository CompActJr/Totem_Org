// src/modules/units/units.models.ts

export interface Panorama {
  _id: number;
  name: string;
  panorama: string;
}

export interface Testimonial {
  _id: number;
  nome: string;
  imagem: string;
  depoimento: string;
}

export interface Teacher {
  _id: number;
  nome: string;
  areaEnsino: string;
  levels: string[];
  imagemUrl: string;
  texto: string;
}

export interface ActivityClass {
  _id: number;
  nome: string;
  detalhes: string;
}

export interface Activity {
  _id: number;
  name: string;
  turmas: ActivityClass[];
  professorNome: string;
  image: string;
}

export type FaqType = {
    _id: number
    question: string
    answer: string
}

export type TurmaType = {
    _id: number;
    titulo: string;
    inicio: string;
    fim: string;
    imagem: string;
    descricao: string;
    horario: string;
    desconto: string;
    caracteristicas: string[];
    material: string;
    kit: string[];
    documentos: string;
};

export interface Organization {
  _id: number;
  "@type": "colegios" | "vestibulares";
  city: string;
  slug: string;
  image: string;
  cep: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  facebook: string;
  instagram: string;
  maps: string;
  levels: string[];
  banners: string[];
  panoramas: Panorama[];
  diferenciais: string[];
  depoimentos: Testimonial[];
  infraestrutura: string[];
  professores: Teacher[];
  atividades: Activity[];
  cursos: TurmaType[];
  faqs: FaqType[];
}