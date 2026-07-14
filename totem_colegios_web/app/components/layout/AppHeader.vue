<template>
  <header class="header">
    <div class="container header-inner">
      <a href="/" class="logo">
        <img
          src="/geral/logo-totem-colegios.png"
          alt="Colégio Totem"
          class="logo-img"
        />
      </a>

      <nav class="nav" :class="{ 'nav-open': menuOpen }">
        <ul class="nav-list">
          <li v-for="link in navLinks" :key="link.label" class="nav-item">
            <a :href="link.href" class="nav-link" @click="menuOpen = false">{{
              link.label
            }}</a>
          </li>
        </ul>
      </nav>

      <a :href="ctaHref" class="btn btn-interest">{{ ctaLabel }}</a>

      <button
        class="nav-toggle"
        @click="menuOpen = !menuOpen"
        aria-label="Abrir menu"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { navLinks as defaultNavLinks } from "@/data/totem.js";

defineProps({
  navLinks: { type: Array, default: () => defaultNavLinks },
  ctaHref: { type: String, default: "#agende" },
  ctaLabel: { type: String, default: "TENHO INTERESSE" },
});

const menuOpen = ref(false);
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  background: var(--primary);
  max-height: 80px;
  overflow: hidden;
}

.header-inner {
  display: flex;
  align-items: center;
  gap: var(--space-4);

  min-height: 80px;
  padding-block: var(--space-2);
}

.logo-img {
  width: 120px;
  border-radius: 0;
}

.nav {
  flex: 1;
}

.nav-list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);

  list-style: none;
}

.nav-link {
  font-size: 14px;
  font-weight: 600;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 0.02em;

  transition: 0.2s;
}

.nav-link:hover {
  color: var(--black);
}

.btn-interest {
  background: var(--primary-light);
  color: var(--black);
  font-size: 13px;
  white-space: nowrap;
  padding: 12px 24px;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;

  padding: var(--space-1);
}

.nav-toggle span {
  width: 24px;
  height: 2px;
  background: var(--white);
}

@media (max-width: 1024px) {
  .nav {
    display: none;
  }

  .nav-toggle {
    display: flex;
  }

  .nav.nav-open {
    display: block;

    position: absolute;
    top: 100%;
    left: 0;
    right: 0;

    background: var(--primary);

    padding: var(--space-3);
  }

  .nav.nav-open .nav-list {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
