# Totem.Org


## Authors

![Jonas](https://img.shields.io/badge/Jonas-000000?style=for-the-badge&logo=github&logoColor=white)
![A.Asan](https://img.shields.io/badge/A.Asan-360276?style=for-the-badge&logo=github&logoColor=white)
![Jean](https://img.shields.io/badge/Jean-760202?style=for-the-badge&logo=github&logoColor=white)
![A.Pão](https://img.shields.io/badge/A.Pão-016325?style=for-the-badge&logo=github&logoColor=white)
![Matheus](https://img.shields.io/badge/Matheus-c98300?style=for-the-badge&logo=github&logoColor=white)
![Fabricio](https://img.shields.io/badge/Fabricio-0072c4?style=for-the-badge&logo=github&logoColor=white)

---

## Stack
![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?style=for-the-badge&logo=nuxt&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-3-42B883?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Nitro](https://img.shields.io/badge/Nitro-Server-orange?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Nginx](https://img.shields.io/badge/-NGINX-009639?style=flat&logo=nginx&logoColor=white)
<br/>

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)


## Rodando a imagem do mongo localmente pra testes

```bash
cd backend
docker run --name totem_mongo \
  --env-file .env \
  -p 27017:27017 \
  -d mongo:8.3.11-noble
```


## Customize configuration


# Salvando em arquivos .tar para enviar via SCP
```bash
docker save totem-main:latest | gzip > totem-main.tar.gz
docker save totem-colegios:latest | gzip > totem-colegios.tar.gz
docker save totem-vestibulares:latest | gzip > totem-vestibulares.tar.gz
```

Na AWS Lightsail (Servidor de Produção)

No servidor, não precisará do código fonte nem do código de build dos Dockerfiles. precisa apenas
- Dos arquivos .tar.gz (carregados via docker load)
- Do arquivo docker-compose.yml da raiz
- Do arquivo .env (ou arquivos .env específicos) contendo as variáveis de produção e o caminho deles certinho com as pastas


## Como testar localmente na sua máquina antes de subir para a Lightsail

Edite o arquivo hosts da sua máquina (C:\Windows\System32\drivers\etc\hosts no Windows ou /etc/hosts no Linux/Mac) e adicione:

sudo nano /etc/hosts

```bash
127.0.0.1 totem.com
127.0.0.1 colegios.totem.com
127.0.0.1 vestibulares.totem.com
```

Execute o comando docker para executar o script do docker-compose.yml para orquetrar os containers
mas antes certifique de ter as imagens tudo em mão com o nome batendo ali no script

```bash
docker images
docker compose up -d
docker compose stats -> monitora uso de RAM e CPU dos containers
```


## funcionamento das rotas das unidades

No Nuxt, o nome [slug] é o que torna a rota dinâmica. Para cada unidade, você mantém o mesmo arquivo Vue, e o valor do slug muda conforme a URL.
Por exemplo, estas duas URLs carregariam a mesma página index.vue:
- /colegios/unidade/cachoeira-do-sul
- /colegios/unidade/santa-maria
O conteúdo muda porque a página consulta a API usando o slug recebido na rota.
A árvore de arquivos ficaria assim:

pages/
└── colegios/
    └── unidade/
        └── [slug]/
            ├── index.vue
            ├── tour.vue
            ├── diferenciais.vue
            └── niveis/
                ├── bercario.vue
                ├── educacao-infantil.vue
                ├── ensino-fundamental.vue
                └── ensino-medio.vue


## infra

DNS apontando tudo para o mesmo IP e o nginx decidindo pelo server_name. A parte que merece atenção é tirar o prefixo da URL, e ela tem duas metades: o nginx e o Nuxt.

soutotem.com.br          A   IP_DO_SERVIDOR
www                      A   IP_DO_SERVIDOR
colegios                 A   IP_DO_SERVIDOR
vestibulares             A   IP_DO_SERVIDOR
on                       A   IP_DO_SERVIDOR


ssl_certificate precisa cobrir todos os nomes. Opções:

um certificado com vários SANs (certbot -d soutotem.com.br -d colegios... -d vestibulares... -d on... -d api...), ou
um wildcard *.soutotem.com.br, que exige validação DNS-01.