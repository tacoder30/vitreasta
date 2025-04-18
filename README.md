# Vite + React + TypeScript + Tailwind CSS Starter Template

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Fitur Utama

✅ **Modern Stack**: Vite + React 18 + TypeScript  
✅ **Styling**: Tailwind CSS dengan dark mode  
✅ **Routing**: React Router v6  
✅ **Responsif**: Layout yang bekerja di semua perangkat  
✅ **Komponen Siap Pakai**: Navbar, Footer, Dropdown  
✅ **Absolute Imports**: Konfigurasi import yang rapi  

## Struktur Proyek

```
vitreasta/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layouts/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx (Navbar)
│   │   │   └── Layout.tsx
│   │   └── ui/
│   │   │   ├── Dropdown.tsx
│   │   │   └── ThemeToggle.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   ├── routes/
│   │   ├── router.tsx
│   ├── styles/
│   │   ├── globals.css
│   ├── types/
│   │   ├── menuItem.ts
│   ├── main.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.js
```

## Cara Menggunakan

1. **Clone repositori**:
   ```bash
   git clone https://github.com/username/repo.git
   cd vite-react-starter
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Jalankan development server**:
   ```bash
   npm run dev
   ```

4. **Build untuk produksi**:
   ```bash
   npm run build
   ```

## Fitur Khusus

### Dark/Light Mode
Toggle otomatis dengan penyimpanan preferensi di localStorage

### Navbar Responsif
- Menu desktop horizontal
- Hamburger menu untuk mobile
- Highlight route aktif

### Absolute Imports
Contoh penggunaan:
```typescript
import Header from '@components/layouts/Header'
import Home from '@pages/Home'
```

## Customisasi

1. **Menambah Halaman**:
   - Buat file baru di `src/pages`
   - Tambahkan route di `src/routes/router.tsx`

2. **Mengubah Styling**:
   - Edit `tailwind.config.js` untuk theme
   - Custom class di `src/styles/globals.css`

3. **Menambah Komponen**:
   - Buat file baru di `src/components`
   - Gunakan absolute import untuk menggunakannya

## Script NPM

| Perintah       | Deskripsi                     |
|----------------|-------------------------------|
| `npm run dev`  | Jalankan development server   |
| `npm run build`| Build untuk produksi          |
| `npm run preview`| Preview build produksi     |
