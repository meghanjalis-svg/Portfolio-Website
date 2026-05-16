import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certifications = [
    {
        title: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services (AWS)',
        date: 'Apr 2026',
        icon: '☁️',
        color: '#FF9900',
        badge: 'Cloud',
        tech: ['Cloud Architecture', 'AWS Console', 'EC2 & S3', 'IAM Security'],
        link: 'https://www.credly.com/badges/047d4b56-bb66-44c6-b0bd-342b494850e9/linked_in_profile',
    },
    {
        title: 'Claude Code in Action',
        issuer: 'Anthropic',
        date: 'Mar 2026',
        icon: '🤖',
        color: '#8B5CF6',
        badge: 'AI',
        tech: ['LLM Integration', 'Prompt Engineering', 'Anthropic API', 'AI Agents'],
        link: 'https://verify.skilljar.com/c/prynv7iyo6vm',
    },
    {
        title: 'Model Context Protocol: Advanced Topics',
        issuer: 'Anthropic',
        date: 'Mar 2026',
        icon: '🧠',
        color: '#EC4899',
        badge: 'AI',
        tech: ['Context Window Limits', 'RAG Architecture', 'Vector Embeddings'],
        link: 'https://verify.skilljar.com/c/6ininwgra2z4',
    },
    {
        title: 'Vibe Code Hackathon using Windsurf',
        issuer: 'Cognizant',
        date: 'Nov 2025',
        icon: '🏆',
        color: '#F97316',
        badge: 'Hackathon',
        tech: ['Rapid Prototyping', 'Team Collaboration', 'Windsurf Editor'],
        link: 'https://www.credly.com/badges/5bb60d6a-5b9a-4145-846c-eca0edaed39d/linked_in_profile',
    },
    {
        title: 'Power BI Certification',
        issuer: 'Microsoft',
        date: '2024',
        icon: '📈',
        color: '#F2C811',
        badge: 'Data viz',
        tech: ['Power BI', 'Data Visualization', 'DAX', 'SQL', 'Dashboard Design', 'Excel', 'Business Intelligence', 'Analytics'],
        link: 'https://www.linkedin.com/posts/meghanjali-saha-a574b8236_powerbi-dataanalytics-dashboarddesign-share-7338284658557681664-7BSC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADrOhuMB1O-1F9vXls0iQrgBLZMWnI0rwGo',
    },
    {
        title: 'Introduction to Cybersecurity',
        issuer: 'Cisco',
        date: 'May 2025',
        icon: '🔐',
        color: '#10B981',
        badge: 'Security',
        tech: ['Network Security', 'Threat Analysis', 'Data Privacy', 'Encryption'],
        link: 'https://www.credly.com/badges/2d04d785-078b-42bb-bdef-755df3e0ccdd/linked_in_profile',
    },
    {
        title: 'SQL and Relational Databases 101',
        issuer: 'IBM',
        date: 'Jan 2025',
        icon: '🗄️',
        color: '#3B82F6',
        badge: 'Database',
        tech: ['SQL Queries', 'Relational DB Design', 'Normalization', 'Data Modeling'],
        link: 'https://courses.cognitiveclass.ai/certificates/82298931de5a4b9baf052c04d82938cd',
    },
    {
        title: 'Data Analytics Essentials',
        issuer: 'Cisco',
        date: 'Mar 2024',
        icon: '📊',
        color: '#06B6D4',
        badge: 'Analytics',
        tech: ['Data Cleaning', 'Statistical Analysis', 'Reporting', 'Data Pipelines'],
        link: 'https://www.credly.com/badges/59de1633-fa32-4763-8c41-159ad11552e6/linked_in_profile',
    },
];

function CertCard({ cert, i, inView }) {
    const borderStyle = { borderTop: '2px solid ' + cert.color + '40' };
    const iconBg = { background: cert.color + '15', border: '1px solid ' + cert.color + '30' };
    const badgeBg = { background: cert.color + '15', color: cert.color };
    const techBorder = { borderColor: cert.color + '25' };
    const btnStyle = {
        backgroundColor: cert.color + '10',
        color: cert.color,
        border: '1px solid ' + cert.color + '20',
    };

    return (
        <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="glass-card group flex flex-col p-6 hover-card relative overflow-hidden"
            style={borderStyle}
        >
            {/* Background Glow */}
            <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundColor: cert.color }}
            />

            {/* Top Row: Icon + Badge + Date */}
            <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="flex items-center gap-4">
                    <motion.div
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg cursor-default"
                        style={iconBg}
                    >
                        {cert.icon}
                    </motion.div>
                    <div>
                        <span
                            className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md mb-1 inline-block"
                            style={badgeBg}
                        >
                            {cert.badge}
                        </span>
                        <p className="text-gray-400 text-xs flex items-center gap-1.5">
                            📅 {cert.date}
                        </p>
                    </div>
                </div>
            </div>

            {/* Title & Issuer */}
            <div className="relative z-10 mb-5">
                <h3 className="text-white font-bold text-lg leading-tight mb-1 group-hover:text-orange-300 transition-colors">
                    {cert.title}
                </h3>
                <p className="text-gray-400 text-sm font-medium">{cert.issuer}</p>
            </div>

            {/* Technologies / Skills */}
            <div className="mb-6 flex-1 relative z-10">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">Technologies Covered:</p>
                <div className="flex flex-wrap gap-2">
                    {cert.tech.map((t) => (
                        <span
                            key={t}
                            className="text-[11px] px-2.5 py-1 rounded-lg border bg-white/5 text-gray-300 hover:text-white transition-colors cursor-default"
                            style={techBorder}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* View Certificate Button */}
            <div className="mt-auto pt-4 border-t border-white/10 relative z-10">
                <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all hover:brightness-125"
                    style={btnStyle}
                >
                    <ExternalLink size={16} /> View Credential
                </a>
            </div>
        </motion.div>
    );
}

export default function Certifications() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="certifications" className="relative py-24 overflow-hidden">
            <div className="orb orb-blue" style={{ width: 400, height: 400, right: -120, bottom: '5%', opacity: 0.08 }} />

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-orange-400 font-semibold text-sm tracking-widest uppercase mb-3">
                        Professional Development
                    </p>
                    <h2 className="section-title text-white mb-4">
                        My <span className="gradient-text">Certifications</span>
                    </h2>
                    <p className="text-gray-400 max-w-md mx-auto text-sm">
                        Verified credentials and specialized training from industry leaders.
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full mx-auto mt-4" />
                </motion.div>

                {/* Bento grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {certifications.map((cert, i) => (
                        <CertCard key={i} cert={cert} i={i} inView={inView} />
                    ))}
                </div>

                {/* Summary row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex flex-wrap justify-center gap-4 mt-12"
                >
                    {[
                        { label: 'Total Certifications', value: '8' },
                        { label: 'Cloud & AI', value: '3' },
                        { label: 'Data & Analytics', value: '3' },
                        { label: 'Security & DB', value: '2' },
                    ].map(({ label, value }) => (
                        <div key={label} className="glass-card px-8 py-4 text-center min-w-[160px]">
                            <div className="text-3xl font-black gradient-text">{value}</div>
                            <div className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-semibold">{label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}