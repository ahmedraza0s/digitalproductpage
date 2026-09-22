# Admin Setup Guide

## How Admin Authentication Works
The admin panel at `/admin` does not use a database table for the password. The password hash is securely stored in your backend's `.env` file. This prevents brute-force database attacks from compromising the admin account.

## Setting Up the Password

1. SSH into your VPS.
2. Go to the backend directory:
   ```bash
   cd /var/www/digitalproductpage/backend
   ```
3. Run the hash generator script with your desired password:
   ```bash
   node scripts/generate-admin-hash.js "MySecurePassword2026!"
   ```
4. The script will output a bcrypt hash. It looks like this:
   `$2b$12$L8yGq8...`
5. Edit your `.env` file:
   ```bash
   nano .env
   ```
6. Set `ADMIN_USERNAME=admin` (or whatever you prefer)
7. Set `ADMIN_PASSWORD_HASH=$2b$12$L8yGq8...` (paste the hash here)
8. Save the file and restart the backend:
   ```bash
   pm2 restart ebook-backend
   ```

## Resetting a Lost Password
If you forget the password, simply repeat steps 3-8 to generate and apply a new hash. No database changes are required.
