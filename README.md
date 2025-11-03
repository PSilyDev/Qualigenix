Qualigenix CMS

Qualigenix CMS is a Next.js + Prisma + PostgreSQL based Content Management System that powers the dynamic content (like FAQs and metadata) for the Qualigenix website. It includes a secure admin dashboard to manage entries and automatically syncs changes to the live frontend.

Features

Admin CMS Dashboard
Secure login (ADMIN_USER / ADMIN_PASS) for managing FAQs and other dynamic content.

Dynamic FAQs Section
Add, edit, delete, and publish FAQ items directly from the CMS dashboard.
Published items instantly appear on the main Qualigenix website.

PostgreSQL Database (NeonDB)
Cloud-hosted database with Prisma ORM for schema management and queries.

Authentication
Basic environment-based authentication to keep CMS access private.

SEO Optimized
Auto-generates meta titles, descriptions, and sitemap for indexed content.

Full-Stack Setup

Frontend: Next.js 16 + Tailwind CSS

Backend: Next.js API Routes + Prisma ORM

Database: PostgreSQL (Neon)

Hosting: Vercel

Tech Stack
Layer	Technology
Frontend	Next.js 16, React 19, TailwindCSS 4
Backend	Next.js API Routes, Prisma ORM
Database	PostgreSQL (Neon Cloud)
Auth	Environment-based (admin credentials)
Hosting	Vercel
Deployment	GitHub CI → Vercel auto-deploy

Setup Instructions
1. Clone the Repository
git clone https://github.com/PSilyDev/Qualigenix.git
cd Qualigenix

2. Install Dependencies
pnpm install

3. Create a .env File
DATABASE_URL="your-postgresql-pooler-url"
DIRECT_URL="your-postgresql-direct-url"
ADMIN_USER="admin"
ADMIN_PASS="secret123"
SITE_URL="https://qualigenix.vercel.app"

4. Prisma Setup
pnpm dlx prisma generate
pnpm dlx prisma migrate deploy


(Optional, if you want to seed sample FAQs)

pnpm run seed

5. Run Locally
pnpm run dev


Visit http://localhost:3000/admin
 to access the CMS dashboard.

🌐 Deployment

The project is hosted on Vercel and automatically builds from the main branch.
Environment variables are configured under:

DATABASE_URL

DIRECT_URL

ADMIN_USER

ADMIN_PASS

SITE_URL

Production site: https://qualigenix-cms.vercel.app

📁 Repository Structure
qualigenix/
│
├── prisma/
│   ├── schema.prisma         
│   └── seed.mjs              
│
├── app/
│   ├── admin/                
│   ├── api/faq/              
│   ├── sitemap.js            
│   └── page.js               
│
├── components/               
├── styles/                   
├── package.json
└── README.md

🧾 Admin Access
Username	Password
admin	secret123
