# Staycation

Platform pemesanan akomodasi liburan berbasis web yang dibangun dengan React. Temukan properti terbaik untuk liburanmu — dari hotel, rumah, hingga apartemen — lengkap dengan fitur pemilihan tanggal, rating, dan tampilan yang menarik.

**Live Demo:** [https://hanjarraes.github.io/staycation](https://hanjarraes.github.io/staycation)

---

## Screenshots

> Tambahkan screenshot project di folder `public/screenshots/` lalu update bagian ini.

| Landing Page | Most Picked | Categories |
|:---:|:---:|:---:|
| ![Landing Page](public/screenshots/landing.png) | ![Most Picked](public/screenshots/most-picked.png) | ![Categories](public/screenshots/categories.png) |

| Testimonial | Footer |
|:---:|:---:|
| ![Testimonial](public/screenshots/testimonial.png) | ![Footer](public/screenshots/footer.png) |

---

## Fitur

- **Hero Section** — Tampilan utama dengan statistik: jumlah traveler, properti, dan kota
- **Most Picked** — Grid properti paling populer beserta harga per malam
- **Categories** — Filter properti berdasarkan kategori: Hotel, Rumah, dan Apartemen
- **Testimonial** — Ulasan pelanggan dengan rating bintang
- **Input Date Range** — Pilih tanggal check-in dan check-out
- **Input Number** — Input jumlah tamu
- **Animasi Scroll** — Efek animasi saat elemen muncul menggunakan AOS
- **Responsive Design** — Tampilan optimal di desktop maupun mobile

---

## Teknologi

| Kategori | Teknologi |
|---|---|
| Framework | React 18 |
| Routing | React Router DOM v5 |
| Styling | SCSS (node-sass) |
| Animasi | AOS (Animate On Scroll) |
| Ikon | Remixicon |
| Date Picker | react-date-range |
| Date Utility | date-fns, moment.js |
| Build Tool | Create React App |
| Testing | Jest + React Testing Library |
| Deployment | GitHub Pages |

---

## Struktur Project

```
staycation/
├── public/
│   ├── images/              # Gambar properti akomodasi
│   ├── screenshots/         # Screenshot untuk README (tambahkan sendiri)
│   └── index.html
├── src/
│   ├── assets/              # Stylesheet global dan aset statis
│   ├── component/           # Komponen UI yang dapat digunakan ulang
│   │   ├── Button/          # Komponen button (link, primary, disabled, dll)
│   │   ├── Form/
│   │   │   ├── InputDate/   # Date range picker
│   │   │   └── InputNumber/ # Input jumlah
│   │   └── Star/            # Komponen rating bintang
│   ├── json/
│   │   └── landingPage.json # Data statis (properti, kategori, testimonial)
│   ├── pages/
│   │   ├── Landing/         # Halaman utama
│   │   └── Detail/          # Halaman detail properti
│   ├── parts/               # Bagian/section dari halaman
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── MostPicked/
│   │   ├── Categories/
│   │   ├── Testimonial/
│   │   ├── Footer/
│   │   └── IconText/
│   ├── utils/
│   │   └── index.js         # Helper: formatNumber, formatDate
│   ├── App.js               # Root component & routing
│   └── index.js             # Entry point
├── package.json
└── README.md
```

---

## Memulai Project

### Prasyarat

Pastikan kamu sudah menginstal:
- [Node.js](https://nodejs.org/) versi 14 ke atas
- npm (sudah termasuk bersama Node.js)

### Instalasi

```bash
# Clone repository
git clone https://github.com/hanjarraes/staycation.git

# Masuk ke direktori project
cd staycation

# Install dependensi
npm install
```

### Menjalankan di Lokal

```bash
npm start
```

Buka [http://localhost:3000](http://localhost:3000) di browser. Halaman akan otomatis reload saat ada perubahan kode.

### Build untuk Produksi

```bash
npm run build
```

Output build tersimpan di folder `build/`.

---

## Deployment ke GitHub Pages

Project ini dikonfigurasi untuk di-deploy ke GitHub Pages menggunakan package `gh-pages`.

### Deploy

```bash
npm run deploy
```

Perintah ini akan otomatis menjalankan build dan mempush hasilnya ke branch `gh-pages`. Setelah beberapa menit, aplikasi dapat diakses di:

**[https://hanjarraes.github.io/staycation](https://hanjarraes.github.io/staycation)**

---

## Menambahkan Screenshot

1. Ambil screenshot dari aplikasi yang sedang berjalan
2. Simpan di folder `public/screenshots/` dengan nama:
   - `landing.png`
   - `most-picked.png`
   - `categories.png`
   - `testimonial.png`
   - `footer.png`
3. Gambar akan otomatis muncul di tabel Screenshots di atas

---

## Scripts yang Tersedia

| Script | Keterangan |
|---|---|
| `npm start` | Jalankan development server di localhost:3000 |
| `npm run build` | Build production ke folder `build/` |
| `npm test` | Jalankan test suite |
| `npm run deploy` | Deploy ke GitHub Pages |

---

## Lisensi

Project ini dibuat untuk keperluan pembelajaran. Bebas digunakan sebagai referensi.

---

<p align="center">Dibuat oleh <a href="https://github.com/hanjarraes">hanjarraes</a></p>
