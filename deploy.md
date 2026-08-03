# Compilando e gerando as imagens
```bash
docker build -t totem-main:latest ./totem_main
docker build -t totem-colegios:latest ./totem_colegios_web
docker build -t totem-vestibulares:latest ./totem_vestibulares_web
```

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


## Deploy do Backend


## Gerar certificado ssl no nginx


> ENV no Dockerfile

```bash
-e / --env (no docker run):
```

- Momento: Fica gravado dentro da imagem durante o build (construção) e persiste na execução do contêiner.
- Visibilidade: Fica embutido na imagem; qualquer pessoa que inspecionar a imagem (docker inspect) consegue ler os valores.
- Uso ideal: Definir padrões fixos, caminhos de sistema (PATH) ou configurações padrão que não mudam entre ambientes


> ARG (no Dockerfile)

- Momento: Disponível apenas durante o processo de build da imagem.
- Visibilidade: Não persiste no contêiner em execução (desaparece após gerar a imagem).
- Uso ideal: Definir parâmetros transitórios para compilar o código (ex: versão de um pacote ou chave temporária de build).

> Arquivo .env / env_file (Docker Compose)

- Momento: Carregado externamente em tempo de execução pelo Docker Compose.
- Visibilidade: Mantido fora do código-fonte da imagem (geralmente ignorado no controle de versão).
- Uso ideal: Organizar múltiplos segredos e parâmetros de configuração local ou de produção de forma limpa.
