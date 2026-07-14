<template>
  <section class="section-about">
    <div class="container grid">
      <div class="col-6 about-text">
        <p class="eyebrow">POR QUE O TOTEM</p>
        <h1>É MAIS QUE<br />COLÉGIO...</h1>

        <p>Bem-vindo(a) ao SEU FUTURO! Prepare-se para construir o amanhã.</p>
        <p>
          No <strong>Colégio Totem</strong>, acreditamos que a escolha certa é a que motiva,
          acolhe e faz feliz. Aqui, nossos estudantes encontram um ambiente onde o afeto e a
          atenção são prioridades, proporcionando bem-estar e segurança para todos. Oferecemos
          a educação que desperta a criatividade e entrega um mundo de conhecimento nas mãos de
          nossas crianças e jovens.
        </p>
        <p><strong>É MAIS QUE COLÉGIO: É TOTEM!</strong></p>
      </div>

      <div class="col-6 about-image">
        <img src="/geral/POR-QUE-O-TOTEM.jpg" alt="Pátio do Colégio Totem visto de cima" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-about {
  background: var(--surface);
  min-height: 800px;
  padding: 0;
}

.grid {
  min-height: 800px;
}

.about-text {
  align-self: center;
  padding-top: var(--space-9);
  padding-bottom: var(--space-8);
}

.about-image {
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-left: var(--space-8);
}

.about-image img {
  display: block;
  width: 100%;
  max-height: 800px;
  height: 90%;
  object-fit: cover;
  object-position: bottom;


  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
