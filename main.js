let mouse = { x: 0, y: 0 };
const heroContent = document.querySelector('.hero-content');

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    // Update Spotlight Position
    document.documentElement.style.setProperty('--mouse-x', `${mouse.x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${mouse.y}px`);

    // Parallax Effect for Hero Content
    if (heroContent) {
        const xOffset = (window.innerWidth / 2 - mouse.x) / 25;
        const yOffset = (window.innerHeight / 2 - mouse.y) / 25;
        heroContent.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    }
});



// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const langToggle = document.getElementById('lang-toggle');

let currentLang = 'ID';

const translations = {
    ID: {
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_work: "Karya",
        nav_contact: "Kontak",
        hero_desc: "Web Developer | Digital Marketer | Web3 Advisor",
        hero_cta_work: "Lihat Karya",
        hero_cta_contact: "Hubungi Saya",
        about_title_1: "Tentang",
        about_title_2: "Saya",
        about_text: "Nama saya Dio Syani Dimastia. Saya fokus pada pengembangan web responsif, strategi pemasaran digital, dan konsultasi ekosistem Web3. Sebagai freelancer, saya membantu klien membangun fondasi digital yang kuat melalui solusi teknis yang efisien dan strategi pertumbuhan yang terukur.",
        stats_exp: "Tahun Pengalaman",
        stats_projects: "Proyek Selesai",
        stats_awards: "Penghargaan",
        skills_title_1: "Keahlian",
        skills_title_2: "Ekspertis",
        portfolio_title_1: "Proyek",
        portfolio_title_2: "Pilihan",
        read_case_study: "Baca Studi Kasus",
        experience_title_1: "Perjalanan",
        experience_title_2: "Karir",
        contact_title_1: "Kontak",
        contact_title_2: "Saya",
        form_name: "Nama Lengkap",
        form_email: "Alamat Email",
        form_message: "Pesan Anda",
        form_submit: "Kirim Pesan",
        skill_web_dev: "Web Development",
        skill_digital_marketing: "Digital Marketing",
        skill_web3_advisory: "Web3 Advisory",
        skill_data_ops: "Data & Operations",
        p1_title: "Trump Lads NFT",
        p1_desc: "Digital Marketing & Content Strategy untuk proyek NFT di ekosistem Solana.",
        p2_title: "Manajemen Arsip & Inventaris",
        p2_desc: "Digitalisasi sistem pengelolaan dokumen dan aset untuk efisiensi operasional perusahaan.",
        p3_title: "KitCat Arcade",
        p3_desc: "Pengembangan game dan strategi konten visual untuk keterlibatan komunitas Web3.",
        exp_current_title: "Web3 Advisor & Digital Strategist",
        exp_current_desc: "Memberikan konsultasi strategis mengenai adopsi teknologi blockchain dan optimasi pertumbuhan digital untuk berbagai proyek freelance.",
        exp_2025_title: "Web Developer & Digital Marketer",
        exp_2025_desc: "Fokus pada pembuatan website responsif serta menjalankan berbagai kampanye pemasaran digital untuk klien freelance.",
        exp1_title: "Web3 Content & Community Strategist",
        exp1_desc: "Mengelola konten kreatif dan strategi pertumbuhan komunitas dengan fokus pada peningkatan engagement.",
        exp2_title: "Web Developer & Digital Marketing Intern",
        exp2_desc: "PT Pundarika Atma Semesta. Bertanggung jawab atas pengembangan antarmuka web dan dukungan pemasaran digital sebagai mahasiswa magang.",
        exp3_title: "Web3 Community Moderator",
        exp3_desc: "Memulai karir freelance sebagai moderator di berbagai komunitas Web3, mengelola forum kripto, dan mendalami dasar-dasar arsitektur data digital.",
        exp_grad_title: "S1 Sistem Informasi (IPK 3.82)",
        exp_grad_desc: "Universitas Bina Sarana Informatika. Lulus dengan predikat sangat memuaskan. Fokus pada manajemen data dan sistem informasi digital."
    },
    EN: {
        nav_home: "Home",
        nav_about: "About",
        nav_work: "Work",
        nav_contact: "Contact",
        hero_desc: "Web Developer | Digital Marketer | Web3 Advisor",
        hero_cta_work: "View Work",
        hero_cta_contact: "Contact Me",
        about_title_1: "About",
        about_title_2: "Me",
        about_text: "My name is Dio Syani Dimastia. I focus on responsive web development, digital marketing strategy, and Web3 ecosystem consulting. As a freelancer, I help clients build a strong digital foundation through efficient technical solutions and measurable growth strategies.",
        stats_exp: "Years of Experience",
        stats_projects: "Projects Completed",
        stats_awards: "Awards",
        skills_title_1: "Skills",
        skills_title_2: "Expertise",
        portfolio_title_1: "Featured",
        portfolio_title_2: "Projects",
        read_case_study: "Read Case Study",
        experience_title_1: "Career",
        experience_title_2: "Journey",
        contact_title_1: "Contact",
        contact_title_2: "Me",
        form_name: "Full Name",
        form_email: "Email Address",
        form_message: "Your Message",
        form_submit: "Send Message",
        skill_web_dev: "Web Development",
        skill_digital_marketing: "Digital Marketing",
        skill_web3_advisory: "Web3 Advisory",
        skill_data_ops: "Data & Operations",
        p1_title: "Trump Lads NFT",
        p1_desc: "Digital Marketing & Content Strategy for NFT projects in the Solana ecosystem.",
        p2_title: "Archive & Inventory System",
        p2_desc: "Digitalizing document and asset management systems for company operational efficiency.",
        p3_title: "KitCat Arcade",
        p3_desc: "Game development and visual content strategy for Web3 community engagement.",
        exp_current_title: "Web3 Advisor & Digital Strategist",
        exp_current_desc: "Providing strategic consulting on blockchain technology adoption and digital growth optimization for various freelance projects.",
        exp_2025_title: "Web Developer & Digital Marketer",
        exp_2025_desc: "Focusing on building responsive websites and executing various digital marketing campaigns for freelance clients.",
        exp1_title: "Web3 Content & Community Strategist",
        exp1_desc: "Managing creative content and community growth strategies with a focus on increasing engagement.",
        exp2_title: "Web Developer & Digital Marketing Intern",
        exp2_desc: "PT Pundarika Atma Semesta. Responsible for web interface development and digital marketing support as an intern.",
        exp3_title: "Web3 Community Moderator",
        exp3_desc: "Started freelance career as a moderator in various Web3 communities, managing crypto forums, and delving into the basics of digital data architecture.",
        exp_grad_title: "Bachelor of Information Systems (GPA 3.82)",
        exp_grad_desc: "Bina Sarana Informatika University. Graduated with honors. Focused on data management and digital information systems."
    }
};

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });

    langToggle.innerText = currentLang === 'ID' ? 'EN' : 'ID';
}

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ID' ? 'EN' : 'ID';
    updateLanguage();
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll Progress Indicator
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-progress').style.width = scrolled + '%';

    // Active Section Highlight
    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // If it's a skill card, animate progress bar
            const progressBar = entry.target.querySelector('.progress-bar-fill');
            if (progressBar) {
                progressBar.style.width = progressBar.getAttribute('data-percent');
            }
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// Hero Section Entry Animation
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 1000);

    // Improved Elegant Reveal Animation
    const heroHeadline = document.querySelector('.hero-headline');
    const heroDescription = document.querySelector('.hero-description');
    const heroCta = document.querySelector('.hero-cta');

    // Reset styles for a clean start
    heroHeadline.style.opacity = '0';
    heroHeadline.style.filter = 'blur(10px)';
    heroHeadline.style.transform = 'translateY(30px)';
    heroHeadline.style.transition = 'all 1.2s cubic-bezier(0.2, 1, 0.3, 1)';

    setTimeout(() => {
        heroHeadline.style.opacity = '1';
        heroHeadline.style.filter = 'blur(0px)';
        heroHeadline.style.transform = 'translateY(0)';
    }, 1200);

    setTimeout(() => {
        heroDescription.style.opacity = '1';
        heroDescription.style.transform = 'translateY(0)';
    }, 1800);



    setTimeout(() => {
        heroCta.style.opacity = '1';
        heroCta.style.transform = 'translateY(0)';
    }, 3000);
});

// Theme Toggle (Simplified)
const themeToggle = document.getElementById('theme-toggle');
let isDarkMode = true;

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});



// Magnetic Buttons
const magneticBtns = document.querySelectorAll('.btn');
magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = `translate(0, 0) scale(1)`;
    });
});





// Case Study Data
const caseStudies = {
    ID: {
        trumplads: {
            title: "Trump Lads NFT Strategy",
            link: "https://magiceden.io/marketplace/trump_lads",
            heroImage: "image_copy.png",
            problem: "Di tengah persaingan pasar NFT yang sangat ketat, sebuah proyek seringkali kesulitan mendapatkan perhatian (atensi) dan volume perdagangan yang konsisten. Tanpa manajemen konten harian yang strategis, komunitas cenderung menjadi pasif, yang mengakibatkan penurunan likuiditas dan nilai aset di pasar sekunder.",
            solution: "Mengimplementasikan strategi pemasaran digital yang berfokus pada konten kreatif harian dan manajemen komunitas yang agresif. Dengan memanfaatkan narasi visual yang kuat dan pemantauan data pasar secara real-time, kami membangun kepercayaan kolektor dan menjaga momentum perdagangan tetap tinggi di ekosistem Solana.",
            background: "Proyek ini fokus pada pengelolaan merek Trump Lads. Sebagai Digital Marketer, tugas utama saya adalah mengubah data teknis pasar menjadi konten yang menarik. Hingga saat ini, strategi yang dijalankan berhasil mendorong total volume perdagangan mencapai 566+ SOL (setara dengan Rp 1,3 Miliar+), dengan distribusi kepemilikan yang sehat di angka 25%.",
            features: [
                "Produksi Konten Harian: Narasi visual & teks di platform X (Twitter).",
                "Analisis Data Pasar: Konversi floor price & volume menjadi infografis.",
                "Manajemen Pertumbuhan Organik: Kampanye awareness tanpa iklan berbayar.",
                "Strategi Retensi Kolektor: Komunikasi transparan untuk holders jangka panjang."
            ]
        },
        pundarika: {
            title: "Sistem Manajemen Arsip & Inventaris",
            link: "https://news.bsi.ac.id/berita/transformasi-digital-mahasiswa-universitas-bsi-solusi-inovatif-untuk-pengelolaan-arsip-dan-inventaris-pt-pundarika-atma-semesta/",
            heroImage: "xdd.png",
            problem: "PT. Pundarika Atma Semesta menghadapi tantangan besar dalam pengelolaan dokumen dan aset fisik. Proses manual menyebabkan ketidakakuratan data, tingginya risiko kehilangan dokumen penting, serta lambatnya pemantauan stok yang menghambat pengambilan keputusan manajerial secara cepat.",
            solution: "Membangun platform berbasis web yang mengintegrasikan manajemen arsip digital dan inventaris barang secara terpusat. Sistem ini mengotomatisasi pencatatan stok, menyediakan fitur pencarian dokumen instan, dan menerapkan protokol keamanan data untuk meminimalisir kesalahan manusia (human error).",
            background: "Proyek ini fokus pada digitalisasi untuk efisiensi operasional PT. Pundarika Atma Semesta. Sebagai ketua tim pengembang, saya mengintegrasikan kebutuhan spesifik industri dengan inovasi teknologi informasi, menghasilkan sistem yang telah resmi diimplementasikan dan diakui langsung oleh IT Manager perusahaan.",
            features: [
                "Centralized Database: Mengelola ribuan data arsip dan inventaris dalam satu dasbor terpadu untuk akurasi data 100%.",
                "Real-Time Stock Monitoring: Sistem pemantauan stok otomatis yang mempercepat proses audit inventaris perusahaan.",
                "Secure Document Validation: Alur kerja digital yang menjamin keamanan dokumen sensitif dari risiko kehilangan atau kerusakan fisik.",
                "Advanced Search Engine: Fitur pencarian cepat yang memangkas waktu operasional dalam menemukan dokumen arsip hingga 80%."
            ]
        },
        kitcat: {
            title: "KitCat Arcade – Integrasi Game Development & Strategi Visual Konten",
            link: "https://game-kitcat.cat/",
            heroImage: "kitcat_final.png",
            problem: "Proyek meme atau Web3 seringkali kehilangan momentum setelah peluncuran akibat kurangnya produk utilitas yang interaktif dan konten visual yang monoton. Kebutuhan akan cara yang lebih segar dan menyenangkan untuk mempertahankan keterlibatan komunitas jangka panjang menjadi sangat krusial agar pengguna tidak beralih ke proyek lain.",
            solution: "Mengambil peran ganda sebagai Technical Developer and Creative Strategist untuk merancang dan membangun KitCat Arcade dari nol. Solusi ini mencakup pengembangan mekanika game Tetris yang smooth serta pembuatan identitas visual yang khas, di mana blok game itu sendiri diubah menjadi bentuk ikonik (seperti blok cokelat KitCat), untuk memastikan branding proyek menyatu sempurna dalam setiap konten pemasaran harian.",
            background: "Proyek ini dikembangkan sebagai respons atas kebutuhan strategi retensi pengguna untuk brand KitCat. Dengan penuh tanggung jawab, saya mengeksekusi semua tahapan: mulai dari pengkodean game (game development), integrasi leaderboard berbasis wallet address, hingga konsepsi ide and pembuatan aset visual untuk konten posting harian. Slogan 'Have a break, have a BLOCK' bukan hanya kata-kata, melainkan identitas visual dan teknis yang menyatukan game dan media sosial.",
            features: [
                "Full-Stack Game Development: Bertanggung jawab penuh atas pengkodean mekanisme game Tetris, sistem skor, tingkat kesulitan, dan fungsionalitas UI yang responsif.",
                "Wallet-Based Leaderboard: Membangun sistem peringkat live yang terhubung ke alamat wallet pengguna untuk memacu kompetisi yang transparan di komunitas.",
                "Creative Visual Ideation: Mencetuskan ide tema visual fundamental di mana elemen game (blok) diubah menjadi aset branding KitCat yang unik.",
                "Content Post Theme & Asset Creation: Merancang tema visual yang konsisten untuk konten media sosial harian, menggunakan cuplikan gameplay dan aset visual game untuk menjaga estetika proyek."
            ]
        }
    },
    EN: {
        trumplads: {
            title: "Trump Lads NFT Strategy",
            link: "https://magiceden.io/marketplace/trump_lads",
            heroImage: "image_copy.png",
            problem: "Amidst intense competition in the NFT market, a project often struggles to gain attention and consistent trading volume. Without strategic daily content management, communities tend to become passive, leading to a drop in liquidity and asset value in the secondary market.",
            solution: "Implementing a digital marketing strategy focused on creative daily content and aggressive community management. By leveraging strong visual narratives and real-time market data monitoring, we built collector trust and kept trading momentum high in the Solana ecosystem.",
            background: "This project focuses on managing the Trump Lads brand. As a Digital Marketer, my main task was to transform technical market data into engaging content. To date, the strategy has pushed total trading volume to over 566+ SOL (equivalent to Rp 1.3 Billion+), with a healthy ownership distribution of 25%.",
            features: [
                "Daily Content Production: Visual & text narratives on X (Twitter).",
                "Market Data Analysis: Converting floor price & volume into infographics.",
                "Organic Growth Management: Awareness campaigns without paid advertising.",
                "Collector Retention Strategy: Transparent communication for long-term holders."
            ]
        },
        pundarika: {
            title: "Archive & Inventory Management System",
            link: "https://news.bsi.ac.id/berita/transformasi-digital-mahasiswa-universitas-bsi-solusi-inovatif-untuk-pengelolaan-arsip-dan-inventaris-pt-pundarika-atma-semesta/",
            heroImage: "xdd.png",
            problem: "PT. Pundarika Atma Semesta faced major challenges in managing documents and physical assets. Manual processes led to data inaccuracy, high risk of losing important documents, and slow stock monitoring which hampered quick managerial decision-making.",
            solution: "Built a web-based platform that integrates digital archive management and item inventory centrally. This system automates stock recording, provides instant document search features, and implements data security protocols to minimize human error.",
            background: "This project focuses on digitalization for operational efficiency at PT. Pundarika Atma Semesta. As the lead developer, I integrated specific industrial needs with information technology innovation, resulting in a system that has been officially implemented and directly recognized by the company's IT Manager.",
            features: [
                "Centralized Database: Managing thousands of archive and inventory data in one unified dashboard for 100% data accuracy.",
                "Real-Time Stock Monitoring: Automatic stock monitoring system that accelerates the company's inventory audit process.",
                "Secure Document Validation: Digital workflow that ensures the security of sensitive documents from physical loss or damage.",
                "Advanced Search Engine: Fast search feature that cuts operational time in finding archive documents by up to 80%."
            ]
        },
        kitcat: {
            title: "KitCat Arcade – Game Development & Visual Content Strategy Integration",
            link: "https://game-kitcat.cat/",
            heroImage: "kitcat_final.png",
            problem: "Meme or Web3 projects often lose momentum after launch due to a lack of interactive utility products and monotonous visual content. The need for a fresher and more fun way to maintain long-term community engagement becomes crucial so that users do not switch to other projects.",
            solution: "Took on a dual role as Technical Developer and Creative Strategist to design and build KitCat Arcade from scratch. This solution includes the development of smooth Tetris game mechanics and the creation of a distinctive visual identity, where the game blocks themselves are transformed into iconic shapes (like KitCat chocolate blocks), to ensure the project's branding integrates perfectly into daily marketing content.",
            background: "This project was developed in response to the user retention strategy needs for the KitCat brand. With full responsibility, I executed all stages: from game coding (game development), wallet address-based leaderboard integration, to idea conception and visual asset creation for daily posting content. The slogan 'Have a break, have a BLOCK' is not just words, but a visual and technical identity that unites the game and social media.",
            features: [
                "Full-Stack Game Development: Full responsibility for coding Tetris game mechanics, scoring system, difficulty levels, and responsive UI functionality.",
                "Wallet-Based Leaderboard: Building a live ranking system connected to user wallet addresses to spur transparent competition in the community.",
                "Creative Visual Ideation: Creating a fundamental visual theme idea where game elements (blocks) are turned into unique KitCat branding assets.",
                "Content Post Theme & Asset Creation: Designing a consistent visual theme for daily social media content, using gameplay snippets and game visual assets to maintain project aesthetics."
            ]
        }
    }
};

const modal = document.getElementById('case-study-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-modal');

document.querySelectorAll('.read-case-study').forEach(btn => {
    btn.addEventListener('click', () => {
        const projectKey = btn.getAttribute('data-project');
        const data = caseStudies[currentLang][projectKey];
        
        const problemTitle = currentLang === 'ID' ? 'Masalah' : 'The Problem';
        const solutionTitle = currentLang === 'ID' ? 'Solusi' : 'The Solution';
        const backgroundTitle = currentLang === 'ID' ? 'Latar Belakang Proyek' : 'Project Background';
        const featuresTitle = currentLang === 'ID' ? 'Fitur Utama' : 'Key Features';
        const visitSiteText = currentLang === 'ID' ? 'Kunjungi Situs' : 'Visit Site';

        modalBody.innerHTML = `
            ${data.heroImage ? `
            <div class="modal-hero" style="width: 100%; height: 250px; overflow: hidden; border-radius: 15px; margin-bottom: 2rem;">
                <img src="${data.heroImage}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>` : ''}
            
            <div class="case-study-header">
                <span class="case-study-label">Case Study</span>
                <h2 class="case-study-title">${data.title}</h2>
            </div>
            
            <div class="case-study-grid">
                <div class="case-study-section section-problem">
                    <h4>${problemTitle}</h4>
                    <p style="color: var(--text-muted)">${data.problem}</p>
                </div>
                <div class="case-study-section section-solution">
                    <h4>${solutionTitle}</h4>
                    <p style="color: var(--text-muted)">${data.solution}</p>
                </div>
            </div>

            <div class="case-study-grid">
                <div class="case-study-section">
                    <h4>${backgroundTitle}</h4>
                    <p style="color: var(--text-muted)">${data.background}</p>
                </div>
                <div class="case-study-section case-study-features">
                    <h4>${featuresTitle}</h4>
                    <ul>
                        ${data.features.map(f => `<li><i class="fas fa-check-circle" style="color: var(--accent-primary)"></i> ${f}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div style="margin-top: 2rem;">
                <a href="${data.link || '#'}" target="_blank" class="btn btn-primary">${visitSiteText} <i class="fas fa-external-link-alt"></i></a>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Real Form Submission (Premium AJAX)
const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const formData = new FormData(form);
    
    const sendingText = currentLang === 'ID' ? 'Mengirim...' : 'Sending...';
    const sentText = currentLang === 'ID' ? 'Pesan Terkirim!' : 'Message Sent!';
    const errorText = currentLang === 'ID' ? 'Gagal Mengirim' : 'Failed to Send';
    
    btn.innerText = sendingText;
    btn.disabled = true;

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            btn.innerText = sentText;
            btn.style.background = '#22c55e';
            form.reset();
        } else {
            throw new Error();
        }
    } catch (error) {
        btn.innerText = errorText;
        btn.style.background = '#ef4444';
    } finally {
        setTimeout(() => {
            btn.innerText = translations[currentLang].form_submit;
            btn.style.background = '';
            btn.disabled = false;
        }, 3000);
    }
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navLinksContainer = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        if (navToggle) {
            const icon = navToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});
