<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <img src="/assets/imagens/logo-totemf.png" alt="Colégio Totem" class="footer-logo" />
        <p class="footer-tagline">É MAIS QUE COLÉGIO:<br />É TOTEM!</p>
      </div>

      <div class="grid footer-units">
        <div class="col-4" v-for="unit in unidades" :key="unit.city">
          <h5>{{ unit.city }}</h5>
          <p>{{ unit.address }}</p>
          <p>Telefone: {{ unit.phone }}</p>
          <p>WhatsApp: {{ unit.whatsapp }}</p>
          <a :href="`mailto:${unit.email}`">{{ unit.email }}</a>

          <div class="footer-social">
            <a :href="unit.facebook" aria-label="Facebook">
              <svg viewBox="0 0 24 24" class="icon-sm" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z"/></svg>
            </a>
            <a :href="unit.instagram" aria-label="Instagram">
              <svg viewBox="0 0 24 24" class="icon-sm" fill="currentColor"><path d="M12 2c2.7 0 3 0 4.1.1 1.1 0 1.8.2 2.5.5.7.3 1.2.6 1.8 1.2.6.6.9 1.1 1.2 1.8.3.7.5 1.4.5 2.5.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1.1-.2 1.8-.5 2.5-.3.7-.6 1.2-1.2 1.8-.6.6-1.1.9-1.8 1.2-.7.3-1.4.5-2.5.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.8-.2-2.5-.5-.7-.3-1.2-.6-1.8-1.2-.6-.6-.9-1.1-1.2-1.8-.3-.7-.5-1.4-.5-2.5C2 15 2 14.7 2 12s0-3 .1-4.1c0-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.2-1.8.6-.6 1.1-.9 1.8-1.2.7-.3 1.4-.5 2.5-.5C9 2 9.3 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; Copyright {{ year }} Colégio Totem. Todos os direitos reservados.</p>
        <p>
          O TOTEM está de acordo com a Lei Geral de Proteção de Dados Sul 13.709/18. Para dúvidas
          sobre questões relativas a dados pessoais, nosso canal de comunicação é
          <a href="mailto:privacidade@totem.com.br">privacidade@totem.com.br</a>.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { unidades as defaultUnidades } from '@/data/totem.js'

defineProps({
  unidades: { type: Array, default: () => defaultUnidades },
})

const year = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: var(--gray);
  color: var(--white);

  padding: var(--space-7) 0 var(--space-4);
}

.footer-top {
  display: flex;
  align-items: center;
  gap: var(--space-4);

  margin-bottom: var(--space-6);
}

.footer-logo {
  width: 100px;
}

.footer-tagline {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-light);
}

.footer-units h5 {
  color: var(--white);
  margin-bottom: var(--space-2);
}

.footer-units p {
  color: rgba(255,255,255,.7);
  font-size: 14px;
  margin-bottom: var(--space-1);
}

.footer-units a {
  font-size: 14px;
  color: var(--primary-light);
}

.footer-social {
  display: flex;
  gap: var(--space-2);
  margin-top: var(--space-2);
}

.footer-social a {
  color: var(--white);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,.15);
  margin-top: var(--space-6);
  padding-top: var(--space-3);
}

.footer-bottom p {
  color: rgba(255,255,255,.5);
  font-size: 12px;
  margin-bottom: var(--space-1);
}

.footer-bottom a {
  color: rgba(255,255,255,.7);
  text-decoration: underline;
}

@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2);
  }

  .footer-tagline {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .footer-logo {
    width: 80px;
  }
}
</style>
