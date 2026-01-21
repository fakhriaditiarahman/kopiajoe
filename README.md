# Kopi Ajoe

<div align="center">
  
  **Artisan Coffee Landing Page**
  
  *Crafted with passion, served with precision*

  [![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## Tentang Proyek

**Kopi Ajoe** adalah website landing page premium untuk brand kopi artisan yang menampilkan pengalaman visual yang imersif dan modern. Website ini dirancang dengan fokus pada estetika tinggi, animasi yang halus, dan performa optimal.

> *"Di Kopi Ajoe, kopi lebih dari sekadar minuman—ia adalah sebuah ritual. Lahir dari seleksi biji terbaik dan disangrai dengan presisi penuh jiwa, setiap butir menceritakan kisah tentang dedikasi, keanggunan, dan pencarian tanpa henti akan kesempurnaan rasa."*

---

## Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| **Scroll Sequence Animation** | Animasi frame-by-frame yang mengikuti scroll untuk pengalaman storytelling yang imersif |
| **Smooth Scrolling** | Menggunakan Lenis untuk scrolling yang halus dan natural |
| **Motion Design** | Transisi dan animasi premium dengan Framer Motion |
| **Responsive Design** | Tampilan optimal di semua ukuran layar |
| **Text Reveal Animation** | Efek reveal teks yang interaktif berdasarkan scroll progress |
| **Bento Grid Layout** | Layout modern untuk menampilkan produk dan konten |
| **Animated Stats** | Statistik dengan animasi counting yang menarik |
| **Testimonials** | Section testimoni pelanggan dengan carousel |
| **Call-to-Action** | CTA yang menarik untuk meningkatkan konversi |
| **Fullscreen Navigation** | Menu navigasi fullscreen dengan animasi smooth |

---

## Tech Stack

### Core
- **[Next.js 16](https://nextjs.org/)** - React framework untuk production
- **[React 19](https://reactjs.org/)** - Library UI
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety

### Styling & Animation
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion 12](https://www.framer.com/motion/)** - Animation library
- **[Lenis](https://lenis.studiofreight.com/)** - Smooth scroll library

### Utilities
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[clsx](https://github.com/lukeed/clsx)** - ClassName utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes

---

## Struktur Proyek

```
kopiajoe/
├── public/
│   ├── images/          # Asset gambar
│   └── sequence/        # Frame sequence untuk animasi scroll
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Homepage
│   ├── components/
│   │   ├── About.tsx           # Section About dengan text reveal
│   │   ├── BentoGrid.tsx       # Grid layout untuk produk
│   │   ├── CTA.tsx             # Call-to-action section
│   │   ├── Footer.tsx          # Footer
│   │   ├── Navbar.tsx          # Navigation dengan fullscreen menu
│   │   ├── Preloader.tsx       # Loading animation
│   │   ├── SequenceScroll.tsx  # Frame sequence animation
│   │   ├── SmoothScroll.tsx    # Lenis smooth scroll wrapper
│   │   ├── Stats.tsx           # Statistics section
│   │   └── Testimonials.tsx    # Customer testimonials
│   └── lib/
│       └── utils.ts     # Utility functions
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, atau bun

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/faker/kopiajoe.git
   cd kopiajoe
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   # atau
   bun install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   # atau
   bun dev
   ```

4. **Buka browser**
   
   Akses [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

---

## Available Scripts

| Script | Deskripsi |
|--------|-----------|
| `npm run dev` | Menjalankan development server |
| `npm run build` | Build untuk production |
| `npm run start` | Menjalankan production server |
| `npm run lint` | Menjalankan ESLint |

---

## Design Philosophy

Website ini dirancang dengan prinsip-prinsip berikut:

1. **Premium Feel** - Estetika visual yang mewah dan elegan
2. **Storytelling** - Scroll sequence yang menceritakan kisah brand
3. **Micro-interactions** - Animasi halus untuk pengalaman yang engaging
4. **Performance First** - Optimasi untuk loading yang cepat
5. **Accessibility** - Desain yang inklusif dan mudah diakses

---

## Contributing

Kontribusi sangat diterima! Silakan buat pull request atau buka issue untuk diskusi.

---

## License

MIT License - Lihat [LICENSE](LICENSE) untuk detail.

---

## Author

**Fakhri Aditia Rahman** (Faker)

- GitHub: [@faker](https://github.com/faker)

---

<div align="center">
  <strong>Kopi Ajoe - Where Every Cup Tells a Story</strong>
</div>
