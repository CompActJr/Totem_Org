<template>
  <div class="app">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="container">
        <div class="nav-content">
          <NuxtLink to="/" class="logo">
            <h2>Totem Colégios</h2>
          </NuxtLink>
          <div class="nav-links">
            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
            <NuxtLink to="/quem-somos" class="nav-link">Quem Somos</NuxtLink>
            <button class="btn btn-primary">Contato</button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <main>
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="grid">
          <div class="col-3">
            <h4>Totem Colégios</h4>
            <p>Educação de qualidade para o futuro.</p>
          </div>
          <div class="col-3">
            <h4>Links</h4>
            <ul>
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/blog">Blog</NuxtLink></li>
              <li><NuxtLink to="/quem-somos">Quem Somos</NuxtLink></li>
            </ul>
          </div>
          <div class="col-3">
            <h4>Contato</h4>
            <p>Email: contato@totemcolegios.com</p>
            <p>Telefone: (XX) 3333-3333</p>
          </div>
          <div class="col-3">
            <h4>Redes Sociais</h4>
            <p>Facebook | Instagram | LinkedIn</p>
          </div>
        </div>
        <div style="text-align: center; margin-top: 48px; padding-top: 24px; border-top: 1px solid #e0e0e0;">
          <p>&copy; 2024 Totem Colégios. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Totem Colégios - Educação de Qualidade',
  meta: [
    {
      name: 'description',
      content: 'Totem Colégios - Educação de qualidade para o futuro dos seus filhos'
    }
  ]
})
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

/* Navbar */
.navbar {
  background: white;
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}

.logo {
  text-decoration: none;
  color: var(--primary);
}

.logo h2 {
  margin: 0;
  font-size: 24px;
}

.nav-links {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav-link {
  color: var(--text);
  font-weight: 500;
  transition: color 0.25s;
  text-decoration: none;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link.router-link-active {
  color: var(--primary);
  border-bottom: 2px solid var(--primary);
}

/* Footer */
.footer {
  background: var(--surface);
  padding: 64px 0;
  margin-top: 96px;
  border-top: 1px solid #e0e0e0;
}

.footer h4 {
  margin-bottom: 16px;
}

.footer p {
  margin-bottom: 8px;
  font-size: 14px;
}

.footer ul {
  list-style: none;
  padding: 0;
}

.footer ul li {
  margin-bottom: 8px;
}

.footer a {
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.25s;
}

.footer a:hover {
  color: var(--primary);
}

/* Responsividade */
@media (max-width: 768px) {
  .nav-links {
    gap: 16px;
    flex-wrap: wrap;
  }

  .nav-link {
    font-size: 14px;
  }

  .btn {
    width: auto;
  }
}
</style>
