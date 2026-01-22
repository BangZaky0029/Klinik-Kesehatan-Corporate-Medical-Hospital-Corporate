
# 🏥 MedicaCorp - Hospital & Clinic Portfolio Template

**MedicaCorp** adalah template landing page premium yang dirancang khusus untuk sektor kesehatan, klinik, dan rumah sakit. Dengan desain *Corporate Medical* yang bersih, profesional, dan terstruktur, template ini siap membantu institusi kesehatan membangun kepercayaan pasien secara digital.

## 🚀 Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) + [React 18+](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)

## 📦 Daftar Dependency Utama

- `react` & `react-dom`
- `framer-motion` (Untuk animasi masuk viewport yang elegan)
- `lucide-react` (Opsional, atau menggunakan Emoji/SVG)
- `tailwindcss` (Utility-first CSS)

## 🛠️ Cara Install

1. Pastikan Anda memiliki Node.js terinstall.
2. Jalankan perintah berikut di terminal:
   ```bash
   npm install
   ```

## 🏃 Cara Menjalankan

Jalankan mode development:
```bash
npm run dev
```
Buka `http://localhost:5173` di browser Anda.

## 📁 Struktur Folder

```text
src/
 ├─ components/    # Reusable UI sections (Hero, About, dll)
 ├─ pages/         # High-level page layouts
 ├─ data/          # Dummy data (Source of Truth)
 ├─ App.tsx        # Root Component & Navigation
 └─ main.tsx       # Entry point
```

## ✍️ Cara Mengganti Konten

Semua teks, gambar, dan data statistik dikelola di satu file: `src/data/dummy.ts`.
Anda hanya perlu mengedit objek `dummyData` untuk mengubah seluruh isi website tanpa menyentuh logika komponen.

## 🎨 Cara Mengganti Warna & Theme

Buka `index.html` dan cari bagian `tailwind.config`. Anda bisa mengganti:
- `medical`: Warna primer (Biru medis).
- `corporate`: Warna aksen dan teks gelap.
- `font-family`: Menggunakan Inter dan Plus Jakarta Sans.

## ✨ Animasi (Framer Motion)

Animasi diatur agar muncul saat elemen masuk ke viewport (*While In View*). 
- **Durasi**: 0.4s – 0.8s
- **Easing**: `easeOut`
- **Logic**: Terpusat pada properti `initial`, `whileInView`, dan `transition` pada setiap komponen di folder `src/components/`.

## 📌 Catatan Penting
- **No Backend**: Template ini murni frontend (SPA).
- **No External API**: Semua data bersifat lokal.
- **Marketplace Ready**: Kode bersih, ber-type, dan mudah dideploy ke platform seperti Vercel, Netlify, atau cPanel.

---
*Dibuat dengan ❤️ oleh Senior Frontend Engineer.*
