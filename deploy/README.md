# Publicar o site numa VPS (Docker + Nginx)

- O **contentor Docker** compila o site e serve-o com Nginx em `127.0.0.1:8081`.
- O **Nginx do servidor** trata do HTTPS (Let's Encrypt) e reencaminha para o contentor.

Domínio: `premiumcorretoraseguros.com` (o `www` redireciona para o domínio sem `www`).

## Testar localmente

```bash
docker compose up -d --build
# abrir http://localhost:8081
docker compose down
```

## 1. DNS

Criar registos **A** para `@` e para `www` a apontar para o IP da VPS.

## 2. Preparar a VPS (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install -y nginx certbot git
curl -fsSL https://get.docker.com | sudo sh
sudo mkdir -p /var/www/certbot
```

## 3. Código e contentor

```bash
git clone git@github.com:aidasamogudo/corretora-seguros-app.git
cd corretora-seguros-app
docker compose up -d --build
curl -I http://127.0.0.1:8081   # deve responder 200
```

## 4. Certificado HTTPS (Let's Encrypt)

O Nginx é parado durante a emissão; as renovações automáticas fazem o mesmo.

```bash
sudo certbot certonly --standalone \
  -d premiumcorretoraseguros.com -d www.premiumcorretoraseguros.com \
  --pre-hook "systemctl stop nginx" --post-hook "systemctl start nginx"
```

## 5. Nginx do servidor

```bash
sudo cp deploy/nginx/premiumcorretoraseguros.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/premiumcorretoraseguros.conf /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

## Atualizar o site (a cada alteração)

Na VPS, dentro da pasta do projeto:

```bash
git pull
docker compose up -d --build
```

## Verificar

```bash
curl -I https://premiumcorretoraseguros.com/contactos   # 200 (rotas da SPA)
curl -I http://premiumcorretoraseguros.com              # 301 -> https
curl -I https://www.premiumcorretoraseguros.com         # 301 -> sem www
```
