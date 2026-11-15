<script setup lang="ts">
definePageMeta({ layout: 'colegios' })

// Animação de entrada: aplicada só nos títulos e nos itens de grade (valores).
// Respeita prefers-reduced-motion via as classes `motion-reduce:*`.
const reveal =
	'opacity-0 translate-y-4 transition duration-700 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none'

const vReveal = {
	mounted(el: HTMLElement) {
		if (!('IntersectionObserver' in window)) {
			el.dataset.visible = 'true'
			return
		}
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry?.isIntersecting) {
					el.dataset.visible = 'true'
					io.disconnect()
				}
			},
			{ rootMargin: '0px 0px -10% 0px' },
		)
		io.observe(el)
	},
}

// Estilos reaproveitados dentro desta página
const quote = 'border-l-4 border-orange-500 pl-6 text-xl font-semibold leading-9 text-gray-800'
const lead = 'text-xl font-semibold leading-9 text-orange-700'

const valores = [
	'Realizar com eficácia e eficiência;',
	'Amor por ensinar e aprender;',
	'Melhorar continuamente;',
	'Valorizar e respeitar as pessoas;',
	'Estabelecer um elo forte entre escola e Família;',
	'Buscar o conhecimento;',
	'Trabalhar em equipe;',
	'Responsabilidade e honestidade;',
	'Cidadania;',
	'Franqueza;',
	'Resultado.',
]

const faqs: { q: string; a: string[]; list?: string[] }[] = [
	{
		q: '1. Qual é a proposta pedagógica do Colégio Totem?',
		a: [
			'Nossa proposta une o construtivismo, inspirado em Jean Piaget, com uma metodologia própria desenvolvida ao longo de mais de 25 anos. Aqui, o aluno é protagonista do seu aprendizado, com estímulo à autonomia, pensamento crítico e responsabilidade, sempre aliado a um ensino estruturado e com foco em resultados.',
		],
	},
	{
		q: '2. O Totem realmente prepara para vestibulares e ENEM?',
		a: [
			'Sim, essa é uma das nossas maiores forças. Nascemos como pré-vestibular e carregamos até hoje um sólido DNA de aprovação. No Ensino Médio, oferecemos preparação estratégica, com simulados frequentes, acompanhamento de desempenho e direcionamento individualizado para cada aluno.',
		],
	},
	{
		q: '3. Como funciona o acompanhamento individual do aluno?',
		a: [
			'O acompanhamento no Totem é próximo, contínuo e personalizado. Cada aluno é observado de forma integral, considerando seu desempenho acadêmico, comportamento, organização e evolução individual.',
			'Além disso, oferecemos atendimentos fora do horário de aula, com suporte direto de professores para reforço, dúvidas e aprofundamento. Nosso objetivo é garantir que nenhum aluno fique para trás.',
		],
	},
	{
		q: '4. Existem atendimentos fora do horário de aula?',
		a: [
			'Sim, e esse é um dos nossos grandes diferenciais. O aluno Totem conta com plantões de dúvidas, atendimentos individuais com professores, apoio pedagógico direcionado e momentos de reforço e aprofundamento.',
			'Tudo isso é pensado para oferecer segurança no aprendizado e confiança nos resultados.',
		],
	},
	{
		q: '5. Como funcionam os projetos pedagógicos?',
		a: [
			'Trabalhamos com projetos por turma, que dão voz aos alunos e estimulam o protagonismo. Esses projetos desenvolvem autonomia e responsabilidade, conectam teoria com prática, estimulam criatividade e trabalho em equipe e geram aprendizado com significado.',
			'O aluno participa ativamente, constrói ideias e se torna parte do processo.',
		],
	},
	{
		q: '6. A escola realiza viagens pedagógicas?',
		a: [
			'Sim. As viagens pedagógicas fazem parte da nossa proposta de aprendizagem ampliada. Elas proporcionam experiências reais, contato com diferentes contextos e aprofundamento de conteúdos de forma prática.',
			'Aprender, no Totem, vai além da sala de aula.',
		],
	},
	{
		q: '7. Qual é o diferencial do Colégio Totem em relação a outras escolas?',
		a: [
			'O Totem se destaca por unir três pilares fundamentais: resultados comprovados, formação humana e desenvolvimento integral, e acompanhamento próximo e individualizado.',
			'Além disso, contamos com professores altamente qualificados, metodologia própria e atualizada, um ambiente que equilibra exigência e acolhimento e suporte ao aluno dentro e fora da sala de aula.',
		],
	},
	{
		q: '8. A escola é mais exigente ou acolhedora?',
		a: [
			'Somos os dois, e esse é o nosso diferencial.',
			'No Totem, o aluno encontra exigência para crescer e acolhimento para se desenvolver com segurança. Acreditamos que grandes resultados vêm de um ambiente equilibrado, onde o aluno é desafiado, mas também apoiado.',
		],
	},
	{
		q: '9. Como a escola trabalha a autonomia dos alunos?',
		a: [
			'A autonomia é construída diariamente. Incentivamos o aluno a organizar sua rotina, assumir responsabilidades, tomar decisões e desenvolver pensamento crítico, sempre com orientação próxima dos professores e da equipe pedagógica.',
		],
	},
	{
		q: '10. Como é a relação da escola com as famílias?',
		a: [
			'A parceria com a família é essencial. Mantemos comunicação constante, acompanhamento compartilhado, reuniões, devolutivas e abertura para diálogo.',
			'Acreditamos que os melhores resultados acontecem quando escola e família caminham juntas.',
		],
	},
	{
		q: '11. O aluno recebe apoio emocional além do acadêmico?',
		a: [
			'Sim. Nós nos preocupamos com o desenvolvimento integral. O aluno é acompanhado não apenas no desempenho escolar, mas também em aspectos emocionais, comportamentais e sociais.',
		],
	},
	{
		q: '12. O Totem atende quais níveis de ensino?',
		a: [
			'Atendemos a Educação Básica, com foco no Ensino Fundamental e Ensino Médio, garantindo uma formação contínua, estruturada e alinhada com os desafios atuais.',
		],
	},
	{
		q: '13. O ensino é tradicional ou moderno?',
		a: [
			'O Totem une o melhor dos dois mundos: estrutura e disciplina para resultados, aliadas a metodologias modernas para engajamento e aprendizado real.',
		],
	},
	{
		q: '14. Existem atividades além da sala de aula?',
		a: [
			'Sim, e elas são parte fundamental do nosso ensino. Desenvolvemos projetos interdisciplinares, simulados, eventos pedagógicos, atividades práticas e experiências fora da escola.',
		],
	},
	{
		q: '15. O aluno sai preparado para o futuro?',
		a: [
			'Esse é o nosso compromisso. Formamos alunos preparados para ENEM e vestibulares, com pensamento crítico, autonomia, responsabilidade e valores sólidos.',
		],
	},
	{
		q: '16. Quantas unidades o Totem possui?',
		a: ['Estamos presentes em três cidades:'],
		list: ['Cachoeira do Sul, com 14 anos de história;', 'Santa Maria;', 'Cruz Alta.'],
	},
	{
		q: '17. Como funciona o processo de matrícula?',
		a: [
			'É simples e rápido. Você pode entrar em contato via WhatsApp, agendar uma visita ou conversar diretamente com nossa equipe.',
			'Teremos prazer em apresentar nossa estrutura, metodologia e diferenciais e ajudar sua família a encontrar o melhor caminho para o aluno.',
		],
	},
]
</script>

<template>
	<!-- PORQUE O TOTEM -->
	<section id="porque_o_totem" class="bg-white responsive-padding scroll-mt-20">
		<div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:gap-16">
			<header v-reveal :class="[reveal, 'lg:col-span-4 lg:sticky lg:top-28 lg:self-start']">
				<h2 class="text-3xl font-bold text-gray-700 md:text-4xl">PORQUE O TOTEM?</h2>
				<div class="mt-4 h-1 w-20 bg-orange-600"></div>
			</header>

			<div class="space-y-6 text-lg leading-8 text-gray-700 lg:col-span-8">
				<p :class="lead">
					O nome Totem traduz, em uma única palavra, a essência da nossa história, dos nossos valores e daquilo que acreditamos sobre educação.
				</p>
				<p>
					Nas culturas ancestrais, especialmente entre povos indígenas, o totem é mais do que um símbolo. Ele representa origem, identidade, proteção e pertencimento. É a expressão de uma força que orienta, que sustenta e que conecta o indivíduo a algo maior do que ele mesmo.
				</p>
				<p>
					É com esse significado que nasce o Totem. Nossa trajetória, no entanto, começa antes da escola.
				</p>
				<p>
					Há mais de 25 anos, iniciamos como pré-vestibular, com um propósito claro e inegociável: gerar resultados, transformar vidas e abrir caminhos reais para o futuro. Ao longo dessa caminhada, consolidamos um forte DNA de aprovação, pautado em disciplina, estratégia, excelência acadêmica e compromisso com cada estudante. Esse alicerce construiu a nossa identidade.
				</p>
				<p>
					Com o tempo, impulsionados pela confiança das famílias e pela demanda da comunidade, ampliamos nossa atuação. Assim nasceu o Colégio Totem, que hoje soma 14 anos de educação básica em Cachoeira do Sul, além das unidades em Santa Maria e Cruz Alta, levando adiante o mesmo padrão de qualidade e a mesma filosofia educacional.
				</p>
				<p>
					A expansão aconteceu de forma natural, sustentada por propósito, consistência e resultados. E é nesse contexto que a simbologia do Totem se manifesta também em nossa marca.
				</p>
				<p>
					Os pássaros presentes em nosso símbolo não são apenas elementos gráficos. Eles representam o percurso formativo que acreditamos.
				</p>
				<p>
					O primeiro pássaro, com asas recolhidas, simboliza o início: o estudante que chega, que observa, que se estrutura, que cria base. É o momento da formação, do desenvolvimento de valores, do fortalecimento intelectual e emocional.
				</p>
				<p>
					O segundo pássaro, com asas abertas, representa a maturidade: o aluno que evoluiu, que construiu autonomia, pensamento crítico e segurança para seguir seu próprio caminho. É aquele que está preparado para alçar voos maiores, com consciência, propósito e direção.
				</p>
				<p>
					Essa transição não é acaso, é resultado de um processo educativo intencional.<br />
					No Totem, compreendemos que educar vai além da transmissão de conteúdo.
				</p>
				<p>
					Trata-se de formar indivíduos completos, capazes de enfrentar desafios, tomar decisões e construir trajetórias sólidas, tanto no âmbito acadêmico quanto humano.
				</p>
				<p>
					Nossa origem nos trouxe rigor e foco em resultados. Nossa evolução nos trouxe sensibilidade, acolhimento e visão integral do aluno. Hoje, somos a união desses dois pilares.
				</p>
				<p>
					Seguimos em crescimento, com projetos de expansão e inovação, sempre sustentados por uma base sólida construída ao longo de décadas.
				</p>
				<p :class="quote">
					Porque ser Totem é, acima de tudo:<br />
					Ter identidade, ter direção e ter propósito.<br />
					É carregar uma história consistente.<br />
					É desenvolver potencial com responsabilidade.<br />
					E é garantir que cada aluno esteja verdadeiramente preparado para o seu próximo voo.
				</p>
			</div>
		</div>
	</section>

	<!-- NOSSA HISTÓRIA -->
	<section id="nossa_historia" class="text-spaced bg-orange-50 responsive-padding scroll-mt-20">
		<div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:gap-16">
			<header v-reveal :class="[reveal, 'lg:col-span-4 lg:sticky lg:top-28 lg:self-start']">
				<h2 class="text-3xl font-bold text-gray-700 md:text-4xl">NOSSA HISTÓRIA</h2>
				<div class="mt-4 h-1 w-20 bg-orange-600"></div>
			</header>

			<div class="space-y-6 text-lg leading-8 text-gray-700 lg:col-span-8">
				<p :class="lead">
					Todo colégio nasce de um sonho.<br />
					Mas alguns nascem de um chamado.
				</p>
				<p>
					O Totem não começou como escola.<br />
					Começou como inquietação.
				</p>
				<p>
					Em fevereiro de 2001, em Santa Maria, um grupo de professores decidiu que a educação poderia ser mais. Mais profunda. Mais exigente. Mais verdadeira. Não aceitavam um ensino superficial, distante ou mecânico. Acreditavam que o aluno poderia ser protagonista, alguém capaz de construir, evoluir e conquistar.
				</p>
				<p class="font-semibold">Assim nasceu o Totem.</p>
				<p>
					Primeiro, como um pré-vestibular. Um espaço intenso, movido por propósito, onde cada aula carregava a responsabilidade de transformar destinos. Desde o início, havia método, estratégia e uma busca constante por excelência. E, em pouco tempo, vieram os primeiros sinais de que aquele caminho estava certo.
				</p>
				<p>
					Entre 2001 e 2004, o Totem se consolidava. As aulas dinâmicas, os conteúdos consistentes, os simulados, os aulões e os encontros além da sala criavam algo diferente. Não era apenas um curso, era uma experiência de preparação para a vida.
				</p>
				<p>
					Os resultados começaram a aparecer. As aprovações se multiplicaram. E o nome Totem passou a ser lembrado.
				</p>
				<p>
					Em 2005, o projeto cresceu. Surgia o Toteen, aproximando ainda mais o Totem dos estudantes do Ensino Médio e antecipando sonhos que antes pareciam distantes. Em 2006, nascia a Editora Totem, fortalecendo a identidade pedagógica e garantindo autonomia na construção do conhecimento.
				</p>
				<p>
					Em 2007, o reconhecimento se tornava público. O Totem era eleito Top of Mind Universitário, consolidando sua marca como referência. E, a partir de 2008, outras instituições passaram a adotar seu sistema de ensino, ampliando o alcance de uma metodologia que já demonstrava sua força.
				</p>
				<p>
					Mas, em meio a todas essas conquistas, algo maior começava a tomar forma.<br />
					Vieram as famílias.<br />
					Vieram os vínculos.<br />
					Vieram as histórias que não terminavam no vestibular.
				</p>
				<p>
					E, silenciosamente, surgiram perguntas que mudariam tudo:<br />
					Por que esperar o final da jornada para começar a fazer a diferença?<br />
					Se era possível transformar vidas no momento decisivo, por que não estar presente desde o início?<br />
					Por que não formar desde a base?<br />
					Por que não acompanhar cada etapa do crescimento?
				</p>
				<p>
					Foi dessa reflexão, simples, mas profundamente transformadora, que nasceu o Colégio Totem.
				</p>
				<p>
					A partir de 2011, esse movimento ganha forma. A educação básica passa a fazer parte do propósito. Em 2012, a criação da Totem Educacional organiza a expansão e permite que essa essência alcance novos espaços. E, em 2013, o Totem já está presente em diferentes cidades, levando consigo não apenas um nome, mas uma forma de educar.
				</p>
				<p>
					Mas o Colégio Totem não nasceu como um novo projeto.<br />
					Nasceu como continuidade.<br />
					Continuidade de valores.<br />
					Continuidade de propósito.<br />
					Continuidade de uma história construída com responsabilidade e resultado.
				</p>
				<p>
					Em Cachoeira do Sul, há 14 anos, essa proposta ganha raízes profundas. Depois, expande-se para Santa Maria e Cruz Alta, consolidando um modelo que une aquilo que sempre fez parte do Totem: excelência acadêmica e formação humana.<br />
					A escola cresce.<br />
					Amplia seus espaços.<br />
					Alcança novas cidades.<br />
					Mas permanece fiel à sua essência.<br />
					Porque o Colégio Totem não é apenas um lugar de ensino.<br />
					É um espaço de construção.<br />
					Construção de conhecimento.<br />
					Construção de valores.<br />
					Construção de caminhos.
				</p>
				<p :class="quote">
					Aqui, o aluno não é preparado apenas para provas.<br />
					Ele é preparado para a vida.
				</p>
				<p>
					O nome Totem traduz tudo isso.<br />
					Representa base.<br />
					Representa identidade.<br />
					Representa aquilo que sustenta e orienta.
				</p>
				<p>
					E é exatamente isso que buscamos ser:<br />
					um ponto de partida seguro… e, ao mesmo tempo, um impulso para voos maiores.
				</p>
				<p>
					Hoje, o Totem segue em crescimento, com projetos de expansão e um olhar voltado para o futuro. Mas sua verdadeira medida não está no número de unidades ou no tempo de existência.
				</p>
				<p>
					Está nas histórias que constrói.<br />
					Nos alunos que forma.<br />
					Nos caminhos que ajuda a abrir.
				</p>
				<p :class="quote">
					Porque, no final, nossa história nunca foi apenas sobre educação. Sempre foi sobre acreditar que cada aluno pode ir mais longe, e estar ao lado dele em cada passo desse voo.
				</p>
			</div>
		</div>
	</section>

	<!-- VISÃO DE EDUCAÇÃO -->
	<section id="visao_de_educacao" class="text-spaced bg-white responsive-padding scroll-mt-20">
		<div class="mx-auto max-w-7xl">
			<header v-reveal :class="reveal">
				<h2 class="text-3xl font-bold text-gray-700 md:text-4xl">VISÃO DE EDUCAÇÃO</h2>
				<div class="mt-4 h-1 w-20 bg-orange-600"></div>
			</header>

			<article class="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
				<div class="border-t-4 border-orange-600 pt-6">
					<h3 class="text-2xl font-bold text-gray-700">MISSÃO</h3>
					<p class="mt-4 text-lg leading-8 text-gray-700">
						Nossa missão é desenvolver pessoas, suas habilidades e competências. Construindo o conhecimento com cidadania, trabalho e resultado.
					</p>
				</div>

				<div class="border-t-4 border-orange-600 pt-6">
					<h3 class="text-2xl font-bold text-gray-700">VISÃO</h3>
					<p class="mt-4 text-lg leading-8 text-gray-700">
						Ser referência em educação básica no Rio Grande do Sul, com ensino de qualidade, inovador e de resultado. A melhor escola para estudar, conviver e trabalhar, superando as expectativas de alunos, pais e colaboradores.
					</p>
				</div>
			</article>

			<div class="mt-16">
				<h3 class="text-2xl font-bold text-gray-700">VALORES</h3>

				<ul class="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
					<li
						v-for="(valor, i) in valores"
						:key="valor"
						v-reveal
						:class="[reveal, 'border-t border-gray-300 pt-5']"
						:style="{ transitionDelay: `${(i % 3) * 100}ms` }"
					>
						<div class="mb-4 h-1 w-10 bg-orange-600"></div>
						<span class="text-xl font-semibold leading-8 text-gray-700">{{ valor }}</span>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- METODOLOGIAS -->
	<section id="metodologias" class="text-spaced bg-orange-50 responsive-padding scroll-mt-20">
		<div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:gap-16">
			<header v-reveal :class="[reveal, 'lg:col-span-4 lg:sticky lg:top-28 lg:self-start']">
				<h2 class="text-3xl font-bold text-gray-700 md:text-4xl">METODOLOGIAS</h2>
				<div class="mt-4 h-1 w-20 bg-orange-600"></div>
			</header>

			<div class="space-y-6 text-lg leading-8 text-gray-700 lg:col-span-8">
				<p :class="lead">
					No Totem, acreditamos que aprender não é um ato passivo. É um processo vivo, construído diariamente, com sentido, participação e propósito.
				</p>
				<p>
					Nossa metodologia nasce de uma base sólida: o construtivismo, inspirado nos estudos de Jean Piaget, que compreende o aluno como protagonista do próprio aprendizado, alguém que não apenas recebe informações, mas interpreta, experimenta, questiona e constrói conhecimento a partir das suas vivências.<br />
					Mas, no Totem, fomos além.
				</p>
				<p>
					Ao longo da nossa trajetória, desenvolvemos uma abordagem própria, que une essa base teórica a mais de 25 anos de experiência prática em educação, marcada por resultados concretos e por um profundo entendimento sobre como os alunos aprendem, evoluem e se desenvolvem.
				</p>
				<p :class="quote">Aqui, o conhecimento faz sentido.</p>
				<p>
					Valorizamos o aprendizado ativo, no qual o estudante é incentivado a pensar, argumentar, resolver problemas e se posicionar. Nossos projetos pedagógicos são construídos para dar voz ao aluno, estimular sua curiosidade e desenvolver sua autonomia.
				</p>
				<p>
					O aluno não é apenas parte do processo. Ele é o centro dele. Nesse caminho, o papel do professor é essencial.
				</p>
				<p>
					Mais do que transmitir conteúdos, nossos educadores atuam como mediadores do conhecimento, orientando, provocando reflexões e acompanhando de perto o desenvolvimento de cada estudante. A equipe diretiva, por sua vez, garante a coerência, a qualidade e a intencionalidade de todo o processo pedagógico.
				</p>
				<p>
					Tudo isso acontece dentro de um ambiente cuidadosamente construído.
				</p>
				<p>
					Um espaço que equilibra acolhimento e exigência, liberdade e responsabilidade, autonomia e direcionamento. Um ambiente em que o erro faz parte do aprendizado e onde cada conquista é valorizada.
				</p>
				<p>
					Mas a aprendizagem, para nós, não se limita à sala de aula.
				</p>
				<p>
					No Totem, acreditamos em uma educação que ultrapassa os muros da escola. Nossos projetos e ações buscam envolver a comunidade como um todo, famílias, colaboradores e todos aqueles que fazem parte, direta ou indiretamente, da nossa trajetória.
				</p>
				<p :class="quote">Porque educar é um movimento coletivo.</p>
				<p>
					É na troca, no diálogo e na conexão com o mundo real que o aprendizado ganha profundidade e significado. É assim que formamos alunos mais conscientes, críticos e preparados para atuar na sociedade.
				</p>
				<p>
					Nossa metodologia, portanto, não é apenas um conjunto de práticas. É uma forma de olhar para o aluno. É um compromisso com o desenvolvimento integral. É a união entre teoria, experiência e propósito.
				</p>
				<p :class="quote">
					No Totem, ensinamos conteúdo. Mas, acima de tudo, desenvolvemos competências, despertamos potencial e formamos pessoas prontas para construir o seu próprio caminho. Porque aprender, aqui, é muito mais do que saber. É entender, viver e transformar.
				</p>
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section id="faq" class="text-spaced bg-white responsive-padding scroll-mt-20">
		<div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:gap-16">
			<header v-reveal :class="[reveal, 'lg:col-span-4 lg:sticky lg:top-28 lg:self-start']">
				<h2 class="text-3xl font-bold text-gray-700 md:text-4xl">PERGUNTAS FREQUENTES</h2>
				<div class="mt-4 h-1 w-20 bg-orange-600"></div>
			</header>

			<div class="lg:col-span-8">
				<details
					v-for="(faq, i) in faqs"
					:key="faq.q"
					name="faq"
					:open="i === 0"
					class="group border-b border-gray-200 first:border-t"
				>
					<summary
						class="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-xl font-bold text-gray-700 transition-colors hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 [&::-webkit-details-marker]:hidden"
					>
						<span>{{ faq.q }}</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="mt-1 size-6 shrink-0 text-orange-600 transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
							aria-hidden="true"
						>
							<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 5v14M5 12h14" />
						</svg>
					</summary>

					<div class="space-y-3 pb-6 text-lg leading-8 text-gray-600">
						<p v-for="paragraph in faq.a" :key="paragraph">{{ paragraph }}</p>
						<ul v-if="faq.list" class="list-inside list-disc">
							<li v-for="item in faq.list" :key="item">{{ item }}</li>
						</ul>
					</div>
				</details>
			</div>
		</div>
	</section>
</template>