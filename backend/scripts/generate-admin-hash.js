const bcrypt = require('bcryptjs');

const password = process.argv[2];

if (!password) {
  console.error('Please provide a password as an argument.');
  console.log('Usage: node generate-admin-hash.js <your_password>');
  process.exit(1);
}

const saltRounds = 12;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error generating hash:', err);
    process.exit(1);
  }
  console.log('\nPassword Hash generated successfully:');
  console.log('----------------------------------------------------');
  console.log(hash);
  console.log('----------------------------------------------------');
  console.log('Copy the hash above and paste it into your .env file:');
  console.log('ADMIN_PASSWORD_HASH=' + hash);
  console.log('\n');
});
