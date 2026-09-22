# VPS Deployment Guide (Hostinger / Ubuntu)

## 1. Initial VPS Setup

Connect to your VPS:
```bash
ssh root@your-vps-ip
```

Install Node.js (via NVM), MongoDB, PM2, and Nginx:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 20

sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx
```

*(For MongoDB, follow the official MongoDB installation guide for Ubuntu 22.04/24.04).*

## 2. Clone Repository

```bash
mkdir -p /var/www/digitalproductpage
cd /var/www/digitalproductpage
# Clone your private repo here
```

## 3. Setup Private Ebook Directory

Create the directory OUTSIDE the public web root:
```bash
mkdir -p /var/www/ebooks
```

Upload your PDF to this folder using SCP from your local machine:
```bash
scp my-ebook.pdf root@your-vps-ip:/var/www/ebooks/ebook.pdf
```
*(Make sure the filename matches the `filePath` you put in the database).*

## 4. Environment Variables

Go to the backend folder:
```bash
cd /var/www/digitalproductpage/backend
cp ../.env.example .env
nano .env
```
Fill in ALL the details, including your Razorpay keys, MongoDB URI, and email settings.

## 5. Admin Password Setup

Generate a secure hash for your admin password:
```bash
node scripts/generate-admin-hash.js YourSuperSecretPassword123!
```
Copy the generated hash starting with `$2b$12$...` and paste it into `.env` under `ADMIN_PASSWORD_HASH`.

## 6. Install Dependencies and Start Server

```bash
npm install
pm2 start server.js --name ebook-backend
pm2 save
pm2 startup
```

## 7. Nginx Configuration

Copy the provided `docs/nginx.conf` to `/etc/nginx/sites-available/yourdomain.com`:
```bash
nano /etc/nginx/sites-available/yourdomain.com
# paste contents
ln -s /etc/nginx/sites-available/yourdomain.com /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

## 8. HTTPS (SSL)

```bash
certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## 9. Final Checklist
- [ ] Go to `https://yourdomain.com` (Should see landing page)
- [ ] Go to `https://yourdomain.com/admin` (Should see login page)
- [ ] Make a test payment using Razorpay Test Mode
- [ ] Check if the download link in the email works
- [ ] Check if `https://yourdomain.com/private/ebooks/ebook.pdf` gives a 404 (It MUST give 404)
