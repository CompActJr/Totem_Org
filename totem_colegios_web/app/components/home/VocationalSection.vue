<template>
  <section class="section-vocational">
    <div class="container grid">
      <div class="col-4 vocational-image">
        <img src="/assets/imagens/TESTE-VOCACIONAL.jpg" alt="Estudante do Colégio Totem pensativa" />
      </div>

      <div class="col-8 vocational-text">
        <p class="eyebrow">TESTE VOCACIONAL</p>
        <h2>QUAL É O SEU TALENTO?</h2>

        <p>
          Escolher uma profissão ou área de estudo é uma decisão importante — e o
          <strong>teste vocacional</strong> pode trazer mais clareza para esse momento. Em
          apenas 8 minutos, você acessa uma experiência rápida, prática e pensada para ajudar a
          identificar seus interesses, pontos fortes e possibilidades de futuro.
        </p>
        <p>
          Se você quer tomar essa decisão com mais segurança, vale dar esse passo importante.
          Clique e faça o teste vocacional do Totem.
        </p>

        <a href="#" class="btn btn-primary btn-sm">ACESSE AGORA &rarr;</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vocational-image img {
  border-radius: var(--radius-lg);
  aspect-ratio: 3 / 4;
  object-fit: cover;
}

.vocational-text {
  align-self: center;
}

.btn-sm {
  padding: var(--space-1) var(--space-2);
  font-size: 13px;
}
</style>
