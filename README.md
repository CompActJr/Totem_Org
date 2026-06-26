# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.



Framework Principal
Nuxt 4

> Dependência:

```bash
"nuxt": "^4.4.8"
```

O Nuxt é o framework principal da aplicação e oferece uma série de recursos nativos que simplificam o desenvolvimento.

Principais recursos
- Server Side Rendering (SSR)
- Static Site Generation (SSG)
- Roteamento automático baseado em arquivos
- Carregamento automático de componentes
- Plugins e módulos oficiais pela documentação oficial do nuxt
- Renderização híbrida
- SEO otimizado
- Code Splitting automático
- Lazy Loading
- Suporte nativo ao TypeScript
- Vue 3

> Dependência:

```bash
"vue": "^3.5.38"
```

Biblioteca responsável pela construção da interface da aplicação.

Recursos utilizados
Composition API
Componentização
Reatividade
Composables
Lifecycle Hooks
Vue Router

Dependência:

```bash
"vue-router": "^5.1.0"
```

Gerencia toda a navegação da aplicação.

O Nuxt abstrai praticamente toda sua configuração através do sistema de páginas (pages/), porém o Vue Router continua sendo o mecanismo responsável pelas rotas.

Interface
Tailwind CSS

> Dependência

```bash
"@nuxtjs/tailwindcss": "^6.14.0"
```

Framework CSS utilitário utilizado para toda estilização do projeto.

> Dependência

```bash
"@nuxt/image": "^2.0.0"
```

Módulo responsável pela otimização automática das imagens.

Recursos
Lazy Loading
Conversão automática para WebP
Imagens responsivas
Compressão
Melhor desempenho em dispositivos móveis
SEO
Sitemap

> Dependência

```bash
"@nuxtjs/sitemap": "^8.2.2"
```

Geração automática do arquivo Sitemap utilizado por mecanismos de busca.

Benefícios
Melhor indexação no Google
SEO otimizado
Atualização automática das páginas
Compatível com renderização SSR e SSG
Banco de Dados e Backend
Supabase

> Dependência

```bash
"@nuxtjs/supabase": "^2.0.9"
```

Serviço Backend as a Service (BaaS) utilizado pelo projeto.

Recursos previstos
PostgreSQL
API REST automática
Autenticação
Storage para arquivos
Controle de permissões
Integração nativa com Nuxt
Utilização no projeto

O Supabase será responsável pelo gerenciamento dos dados da aplicação, incluindo conteúdos dinâmicos como: posts, imagens, eventos, depoimentos e professores e atividades

> Dependência

```bash
"@googlemaps/js-api-loader": "^2.1.1"
```

Biblioteca oficial da Google responsável pelo carregamento da API do Google Maps.

Funcionalidades previstas Exibição do mapa Marcadores personalizados
Localização das unidades Geolocalização Informações das escolas

A utilização da biblioteca oficial garante maior compatibilidade com futuras atualizações da API do Google.


A arquitetura foi planejada considerando:

Código modular
Fácil manutenção
Alta escalabilidade
Boa performance
SEO otimizado
Componentização
Responsividade
Integração simplificada com serviços externos
Facilidade para implantação utilizando Docker e AWS Lightsail
Próximas Dependências Previstas

Conforme a evolução do projeto, está prevista a integração de bibliotecas adicionais para ampliar as funcionalidades da aplicação.

Biblioteca	Finalidade
Pinia	Gerenciamento de estado global da aplicação
Swiper	Carrosséis, banners e galerias de imagens
Photo Sphere Viewer	Exibição de tours virtuais em 360°
Docker	Containerização da aplicação
Nginx	Servidor web para disponibilização da aplicação em produção
AWS Lightsail	Hospedagem da aplicação utilizando containers Docker

Essa documentação fornece uma visão clara da stack atual, explica o papel de cada dependência e já registra a evolução planejada do projeto, facilitando a integração de novos desenvolvedores e a manutenção futura.