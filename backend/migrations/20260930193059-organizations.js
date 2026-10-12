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
            }
        ],
        "atividades": [
            {
                _id: 1,
                "name": "Escolinha de Voleibol",
                "turmas": [
                    {
                        _id: 1,
                        "nome": "Escolinha de Voleibol - 3º e 4º ano",
                        "detalhes": "Ginásio. Sextas, das 9h30 às 10h30"
                    },
                    {
                        _id: 2,
                        "nome": "Escolinha de Voleibol - 5º ano",
                        "detalhes": "Ginásio. Sextas, das 10h30 às 11h30"
                    },
                    {
                        _id: 3,
                        "nome": "Escolinha de Voleibol - 6º ao 8º ano + Médio",
                        "detalhes": "Ginásio. Sextas, das 13h40 às 15h40"
                    }
                ],
                "professorNome": "Jonas",
                "image": "/atividades/ESCOLINHA-DE-VOLEIBOL.jpg"
            }
        ]
    });

    await db.collection('organizations').insertOne({
        _id: 2,
        "@type": "colegios",
        "city": "Santa Maria",
        "slug": "santa-maria",
        "image": "geral/FACHADA-SANTA-MARIA.jpg",
        "cep": "97010-033",
        "address": "RS-287, KM 234, Trevo de Uglione",
        "phone": "55 9 9125-8480",
        "whatsapp": "(55) 9 9125-8480",
        "email": "santamaria@colegiototem.com.br",
        "facebook": "https://www.facebook.com/totemvestibular/",
        "instagram": "https://www.instagram.com/totemvestibulares/",
        "maps": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2312.7482640472363!2d-53.81819665087276!3d-29.713761335139225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503cb1424027733%3A0x29a4830246f042e2!2sCol%C3%A9gio%20Totem%20Santa%20Maria!5e0!3m2!1spt-BR!2sbr!4v1784497464004!5m2!1spt-BR!2sbr",
        "levels": [
            "Educação Infantil",
            "Ensino Fundamental I",
            "Ensino Fundamental II",
            "Ensino Médio"
        ],
        "infraestrutura": [],
        "banners": [
            "/geral/BANNER-1-CACHOEIRA.jpg",
            "/geral/FACHADA-SANTA-MARIA.jpg"
        ],
        "panoramas": [],
        "diferenciais" : [
            "Atendimento personalizado, afetuoso, com equipe altamente qualificada e experiente;",
            "Estrutura física moderna, planejada para maior segurança, conforto e produtividade detodos",
            "Projeto pedagógico focado no resultado e na formação para a vida real",
            "Material didático colorido, atualizado e com suporte digital, em plataformas modernas e interativas",
            "Reconhecido pelo ambiente familiar – Família Totem – e pelo total apoio ao estudante e seus responsáveis",
            "Salas de aula com mobiliário adequado a cada nível de ensino, climatizadas, com acesso à internet e recursos multimídia completos",
            "Plataformas Digitais com jogos e conteúdos multimídias totalmente articulados com os conhecimentos abordados em sala de aula",
            "Segurança aos estudantes e tranquilidade aos pais",
            "Metodologia com aprendizagem cooperativa, lúdica e científica",
            "Recursos educacionais e pedagógicos adequados à faixa etária",
            "Aulas de Inglês, Arte, Educação Física com professores especializados",
            "Viagens pedagógicas",
            "Vivências em família com apresentações de talentos (arte, música, dança, poesia e teatro)",
            "Concurso de Fotografia, Literário e Simulados",
            "Técnicas contextualizadas à valorização do meio ambiente",
            "Participação na Olimpíada de Matemática - OBMEP e demais olimpíadas do conhecimento",
            "Atendimento individualizado aos pais",
            "Realização do Simulado Enemzinho ou Avaliação Unificada Totem (AUT) como preparação para as provas do ENEM",
            "Viagens de estudo e visitas às universidades;",
            "Acompanhamento do estudante às principais excursões e eventos do Totem Vestibulares para integração e familiarização com a rede"
        ],
        "depoimentos": [],
        "infraestrutura": [],
        "professores": [],
        "atividades": []        
    });

    await db.collection("organizations").insertOne({
        "id": 3,
        "@type": "colegios",
        "city": "Cruz Alta",
        "slug": "cruz-alta",
        "image": "geral/FACHADA-CRUZ-ALTA.jpg",
        "cep": "98700-000",
        "address": "General Felipe Portinho, 1216",
        "phone": "(55) 3333-8569",
        "whatsapp": "(55) 9 9076-7990",
        "email": "cruzalta@colegiototem.com.br",
        "facebook": "https://www.facebook.com/totemvestibular/",
        "instagram": "https://www.instagram.com/totemvestibulares/",
        "maps": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1909.2088506259433!2d-53.61070915676212!3d-28.644612207439764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fd97c87e5202ab%3A0xc4883daf58e00f03!2sCol%C3%A9gio%20Totem%20Cruz%20Alta!5e0!3m2!1spt-BR!2sbr!4v1784497585649!5m2!1spt-BR!2sbr",
        "levels": [
            "Educação Infantil",
            "Ensino Fundamental I",
            "Ensino Fundamental II",
            "Ensino Médio"
        ],
        "infraestrutura": [
            "/infraestrutura/cachoeira-do-sul/B-1.jpg",
            "/infraestrutura/cachoeira-do-sul/B-2.jpg",
            "/infraestrutura/cachoeira-do-sul/B-3.jpg",
            "/infraestrutura/cachoeira-do-sul/B-4.jpg",
            "/infraestrutura/cachoeira-do-sul/B-5.jpg",
            "/infraestrutura/cachoeira-do-sul/B-6.jpg"
        ],
        "banners": [
            "/geral/BANNER-1-CACHOEIRA.jpg",
            "/geral/FACHADA-CRUZ-ALTA.jpg"
        ],
        "panoramas": [],
        "diferenciais" : [
            "Atendimento personalizado, afetuoso, com equipe altamente qualificada e experiente;",
            "Estrutura física moderna, planejada para maior segurança, conforto e produtividade detodos",
            "Projeto pedagógico focado no resultado e na formação para a vida real",
            "Material didático colorido, atualizado e com suporte digital, em plataformas modernas e interativas",
            "Reconhecido pelo ambiente familiar – Família Totem – e pelo total apoio ao estudante e seus responsáveis",
            "Salas de aula com mobiliário adequado a cada nível de ensino, climatizadas, com acesso à internet e recursos multimídia completos",
            "Plataformas Digitais com jogos e conteúdos multimídias totalmente articulados com os conhecimentos abordados em sala de aula",
            "Segurança aos estudantes e tranquilidade aos pais",
            "Metodologia com aprendizagem cooperativa, lúdica e científica",
            "Recursos educacionais e pedagógicos adequados à faixa etária",
            "Aulas de Inglês, Arte, Educação Física com professores especializados",
            "Viagens pedagógicas",
            "Vivências em família com apresentações de talentos (arte, música, dança, poesia e teatro)",
            "Concurso de Fotografia, Literário e Simulados",
            "Técnicas contextualizadas à valorização do meio ambiente",
            "Participação na Olimpíada de Matemática - OBMEP e demais olimpíadas do conhecimento",
            "Atendimento individualizado aos pais",
            "Realização do Simulado Enemzinho ou Avaliação Unificada Totem (AUT) como preparação para as provas do ENEM",
            "Viagens de estudo e visitas às universidades;",
            "Acompanhamento do estudante às principais excursões e eventos do Totem Vestibulares para integração e familiarização com a rede"
        ],
        "depoimentos": [],
        "infraestrutura": [],
        "professores": [],
        "atividades": []
    })
};

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const down = async (db, client) => {
    await db.collection('organizations').drop();
};
