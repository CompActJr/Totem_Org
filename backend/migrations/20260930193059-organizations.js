/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const up = async (db, client) => {
    await db.collection('organizations').insertOne({
        _id: 1,
        "@type": "colegios",
        "city": "Cachoeira do Sul",
        "slug": "cachoeira-do-sul",
        "image": "geral/FACHADA-CACHOEIRA.jpg",
        "cep": "98900-000",
        "address": "Rua Santa Rosa, 305",
        "phone": "(55) 3722-2977",
        "whatsapp": "(55) 9 9088-3334",
        "email": "cachoeira@colegiototem.com.br",
        "facebook": "https://www.facebook.com/totemvestibular/",
        "instagram": "https://www.instagram.com/totemvestibulares/",
        "maps": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.4459269831603!2d-52.90042467518325!3d-30.043062487779572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10bd3a1f59f31b7%3A0x8ee2bf50c91b4ae3!2sCol%C3%A9gio%20Totem%20Cachoeira%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1784490880093!5m2!1spt-BR!2sbr",
        "levels": [
            "Berçário",
            "Educação Infantil",
            "Ensino Fundamental I",
            "Ensino Fundamental II",
            "Ensino Médio"
        ],
        "banners": [
            "/geral/BANNER-1-CACHOEIRA.jpg",
            "/geral/FACHADA-CACHOEIRA.jpg"
        ],
        "panoramas": [
            {
                _id: 1,
                name: 'Hall de entrada',
                panorama: '/panoramas/cachoeira_do_sul/c_sala1.jpeg'
            },
            {
                _id: 2,
                name: 'Biblioteca',
                panorama: '/panoramas/cachoeira_do_sul/c_refeitorio.jpeg'
            }
        ],
        "diferenciais": [
            "Ambientes diferenciados para cada nível de ensino",
            "Calendário escolar prolongado",
            "Mundo Kids com refeitório",
            "Playground interno e externo com ambientes de recreação",
            "Momentos de vivências e de interação entre escola e família",
            "Apresentações artísticas com aptidões exploradas a partir da arte, da música, do teatro e da dança",
            "Projetos interdisciplinares de acordo com o interesse de cada estudante",
            "Metodologia com personagens que acompanham o desenvolvimento",
            "Horários diferenciados de entrada e saída: 13h15min até às 18h, de segunda à sexta",
            "Segurança aos estudantes e tranquilidade aos pais",
            "Material didático do J. Piaget sem custo adicional",
            "Plataforma digital do J. Piaget com mais de 500 jogos e conteúdo multimídia totalmente articulados com os conhecimentos abordados em sala de aula*",
            "Aulas de Educação Física e de Língua Inglesa (Projeto Bilíngue) com profissional especializado**",
            "Programa União Faz a Vida",
            "Projetos de transição dos alunos que se encontram no Nível II para o 1° ano do Ensino Fundamental",
            "Entrevistas individuais com os professores, no início do ano letivo",
            "Reuniões de acolhimento e orientação a cada turma",
            "Lindo Cerimonial de Formatura do Nível II, registrando a conclusão desta etapa da vida escolar",
            "Encontro Reflexivo da Aprendizagem Escolar",
            "Plataforma educacional Totem, possibilitando acesso e acompanhamento escolar dos alunos."
        ],
        "depoimentos": [
            {
                _id: 1,
                "nome": "Carine",
                "imagem": "/geral/Carine.jpg",
                "depoimento": "O Totem transmite confiança, segurança e estimula os alunos ao aprendizado. A equipe diretiva está constantemente envolvida e próxima dos alunos."
            },
            {
                _id: 2,
                "nome": "Vanessa Giroldi",
                "imagem": "/geral/Vanessa.jpg",
                "depoimento": "Escolhi o Totem porque quero que meus filhos cresçam em um ambiente onde se sintam acolhidos, valorizados e felizes. Aqui encontrei não só qualidade no ensino, mas também cuidado, carinho e valores que fazem diferença na formação deles como pessoas. Confio na proposta pedagógica e acredito que aqui meus filhos terão um bom desenvolvimento acadêmico e pessoal. Sem dúvida foi uma das melhores escolhas que fiz para o futuro deles."
            },
            {
                _id: 3,
                "nome": "Luisa Felix Muller",
                "imagem": "/geral/Luisa.jpg",
                "depoimento": "Vejo meu filho se desenvolvendo com alegria, autonomia e valores sólidos. Vejo diariamente o brilho nos olhos dele, a curiosidade florescendo e a autonomia se fortalecendo. É uma escola que prepara o mundo, sem abrir mão da infância. E isso, para mim, é transformador. A escola supera minhas expectativas ao educar com afeto e propósito. "
            },
            {
                _id: 4,
                "nome": "Vanice Moraes",
                "imagem": "/geral/Vanice.jpg",
                "depoimento": "Quem escolheu o Totem foram eles. O Eduardo e o Guilherme escolheram pela qualidade do ensino, pelos professores (ótimos) que transmitem segurança aos alunos e pelo acolhimento de todos."
            }
        ],
        "infraestrutura": [
            "/infraestrutura/cachoeira-do-sul/B-1.jpg",
            "/infraestrutura/cachoeira-do-sul/B-2.jpg",
            "/infraestrutura/cachoeira-do-sul/B-3.jpg",
            "/infraestrutura/cachoeira-do-sul/B-4.jpg",
            "/infraestrutura/cachoeira-do-sul/B-5.jpg",
            "/infraestrutura/cachoeira-do-sul/B-6.jpg"
        ],
        "professores": [
            {
                _id: 1,
                "nome": "Cássia Machado",
                "areaEnsino": "Matemática",
                "levels": [
                    "Ensino Médio"
                ],
                "imagemUrl": "",
                "texto": "para Professores pela FURG. Atuo há 15 anos em sala de aula, período em que tenho a oportunidade de guiar meus alunos na descoberta da magia e dos mistérios que a matemática revela, sendo uma linguagem que desenvolve raciocínio, criatividade e autonomia."
            },
            {
                _id: 2,
                "nome": "Márcio Macedo",
                "areaEnsino": "Geografia",
                "levels": [
                    "Ensino Fundamental I",
                    "Ensino Fundamental II"
                ],
                "imagemUrl": "",
                "texto": "Formado em Ciências Sociais pela UFSM e Pós-graduado em Filosofia, Ética e Cidadania. É professor de Filosofia e Sociologia há 8 anos, com foco na preparação de alunos para o ENEM e os vestibulares, dedicando-se a desenvolver o pensamento crítico para o seu melhor desempenho nas mais diversas avaliações. Sua experiência é enriquecida pela atuação como Inspetor de Polícia Civil no Rio Grande do Sul (PC-RS), o que traz para a sala de aula uma visão prática e profunda sobre temas de ética, justiça e a complexidade das relações sociais. Nos momentos de folga, é praticante de esportes e um músico apaixonado, dedicando- se a tocar instrumentos como violão, cavaco, ukulele e piano. Mariane Paiva Licenciada e bacharela em Educação Física, atua há mais de 10 anos no ambiente escolar, trabalhando com diferentes faixas etárias. Cria aulas dinâmicas que estimulam autonomia, cooperação e movimento com propósito. Acredita que a Educação Física vai além do “fazer exercícios”: é um espaço de descoberta, expressão, construção de confiança, valores e conquistas que os alunos levam para a vida inteira. Ama esportes e está sempre se atualizando na área de bem-estar e práticas integrativas, trazendo um olhar humano e acolhedor para a escola. Sua maior satisfação é ver os alunos superando desafios, descobrindo suas capacidades e se reconhecendo como protagonistas do próprio processo."
            }
        ],
        "atividades": [
            {
                _id: 1,
                "name": "Escolinha de Voleibol",
                "turmas": [
                    {
                        "nome": "Escolinha de Voleibol - 3º e 4º ano",
                        "detalhes": "Ginásio. Sextas, das 9h30 às 10h30"
                    },
                    {
                        "nome": "Escolinha de Voleibol - 5º ano",
                        "detalhes": "Ginásio. Sextas, das 10h30 às 11h30"
                    },
                    {
                        "nome": "Escolinha de Voleibol - 6º ao 8º ano + Médio",
                        "detalhes": "Ginásio. Sextas, das 13h40 às 15h40"
                    }
                ],
                "professorNome": "",
                "image": "/atividades/ESCOLINHA-DE-VOLEIBOL.jpg"
            },
            {
                _id: 2,
                "name": "Voleibol",
                "turmas": [
                    {
                        "nome": "Voleibol Totem",
                        "detalhes": "Ginásio. Quintas, das 18h às 20h"
                    }
                ],
                "professorNome": "Professor Gideone",
                "image": "/atividades/VOLEIBOL.jpg"
            }
        ]
    });
};

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const down = async (db, client) => {
    await db.collection('organizations').deleteOne({
        _id: 1
    });
};
