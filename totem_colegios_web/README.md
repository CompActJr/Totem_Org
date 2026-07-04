# Frontend - Totem Colégios

Projeto frontend desenvolvido com **Nuxt 3** + **Vue 3**

## 📄 Páginas Disponíveis

### 🏠 Home (`/`)
- Apresentação da escola
- Seção de serviços com cards
- Call-to-action principal

### 📰 Blog (`/blog`)
- Listagem de artigos
- Conteúdo sobre educação
- Links para artigos completos

### 👥 Quem Somos (`/quem-somos`)
- Missão e valores
- Estatísticas da instituição
- História da escola

## 🎨 Estilos

Todos os estilos estão centralizados em `assets/css/style.css` com:
- Design System completo
- Grid 12 colunas responsivo
- Variáveis CSS para cores, espaçamentos e tipografia
- Responsividade para mobile, tablet e desktop

## 🚀 Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento (localhost:3000)
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📦 Estrutura de Arquivos

```
front/
├── pages/              # Páginas (rotas automáticas)
│   ├── index.vue       # Home
│   ├── blog.vue        # Blog
│   └── quem-somos.vue  # Quem Somos
├── assets/
│   └── css/
│       └── style.css   # Estilos globais
├── app/
│   └── app.vue         # Layout raiz
├── public/             # Assets estáticos
├── nuxt.config.ts      # Configuração
├── package.json
└── tsconfig.json
```

## 📱 Responsividade

O CSS já inclui breakpoints para:
- Desktop (> 1024px)
- Tablet (768px - 1024px)
- Mobile (< 768px)
