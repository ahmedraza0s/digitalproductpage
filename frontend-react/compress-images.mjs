import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, 'src/assets/images');

const targets = [
  // Hero & critical images → heavy compression, keep as jpg for compatibility
  { file: 'new_awkward_cover.jpg', quality: 82, width: 600 },
  { file: 'logo.jpg',              quality: 80, width: 300 },
  { file: 'confident_chat.jpg',    quality: 78, width: 900 },
  { file: 'social_college.jpg',    quality: 78, width: 900 },
  { file: 'hero_book_mockup.jpg',  quality: 80, width: 600 },
  { file: 'hero_mobile.jpg',       quality: 78, width: 800 },
  { file: 'hero_pc.jpg',           quality: 78, width: 900 },
];

async function compress() {
  for (const { file, quality, width } of targets) {
    const input = path.join(imagesDir, file);
    const output = path.join(imagesDir, file); // overwrite in place
    const tmpOut = input + '.tmp';

    try {
      const before = (await stat(input)).size;

      await sharp(input)
        .resize({ width, withoutEnlargement: true })
        .jpeg({ quality, progressive: true, mozjpeg: true })
        .toFile(tmpOut);

      const after = (await stat(tmpOut)).size;

      // Only replace if smaller
      if (after < before) {
        const { rename } = await import('fs/promises');
        await rename(tmpOut, output);
        console.log(
          `✅ ${file}: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB ` +
          `(saved ${((1 - after/before)*100).toFixed(1)}%)`
        );
      } else {
        const { unlink } = await import('fs/promises');
        await unlink(tmpOut);
        console.log(`⏭  ${file}: already optimal (${(before/1024).toFixed(0)}KB)`);
      }
    } catch (e) {
      console.error(`❌ ${file}: ${e.message}`);
    }
  }
}

compress();
