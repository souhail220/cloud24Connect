export interface Testimonial {
    id: string;
    name: string;
    company: string;
    role: string;
    content: string;
    rating: number;
    avatar: string;
}

export const TESTIMONIALS_BY_PRODUCT: Record<string, Testimonial[]> = {
    p1: [
        {
            id: 't1',
            name: 'Sarah Johnson',
            company: 'TechCorp Inc',
            role: 'Cloud Architect',
            content: 'CloudSync Pro transformed how we manage our multi-cloud infrastructure. The intelligent routing cut our latency by 40% and automated failover has prevented numerous outages.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        },
        {
            id: 't2',
            name: 'Michael Chen',
            company: 'DataFlow Solutions',
            role: 'VP of Operations',
            content: 'The best investment we made this year. Real-time synchronization across our cloud providers saved us thousands in operational costs.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        },
        {
            id: 't3',
            name: 'Emma Wilson',
            company: 'Global Enterprises',
            role: 'IT Director',
            content: 'Seamless integration, excellent support team, and the monitoring features are top-notch. Highly recommended.',
            rating: 4,
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        },
    ],
    p2: [
        {
            id: 't1',
            name: 'David Martinez',
            company: 'Enterprise Solutions Ltd',
            role: 'Systems Engineer',
            content: 'HybridLink made connecting our on-premise servers to AWS incredibly simple. The zero downtime migration was flawless.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        },
        {
            id: 't2',
            name: 'Lisa Anderson',
            company: 'Financial Services Corp',
            role: 'Infrastructure Manager',
            content: 'Excellent security features and the bandwidth optimization is remarkable. Cut our infrastructure costs by 30%.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        },
    ],
    p3: [
        {
            id: 't1',
            name: 'James Robinson',
            company: 'Startup Accelerators',
            role: 'CEO',
            content: 'MigrateFlow handled our complex migration from on-premise to Google Cloud. The automated process saved us months of work.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        },
        {
            id: 't2',
            name: 'Rachel Green',
            company: 'Digital Transformation Co',
            role: 'Migration Lead',
            content: 'Data integrity verification throughout the migration process gave us complete confidence. No data loss, zero downtime.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        },
    ],
    p4: [
        {
            id: 't1',
            name: 'Alex Kumar',
            company: 'Analytics Plus',
            role: 'Data Scientist',
            content: 'InsightLive provides real-time insights that have transformed our decision-making. The custom dashboards are intuitive and powerful.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        },
        {
            id: 't2',
            name: 'Patricia Moore',
            company: 'Retail Leaders',
            role: 'Business Analyst',
            content: 'The sub-second latency for live metrics is amazing. We can now react to market changes in real-time.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        },
    ],
    p5: [
        {
            id: 't1',
            name: 'Thomas Wright',
            company: 'Business Intelligence Pros',
            role: 'BI Manager',
            content: 'ReportMax automated our entire reporting process. What used to take hours now happens automatically every morning.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        },
    ],
    p6: [
        {
            id: 't1',
            name: 'Nicole Taylor',
            company: 'Creative Analytics',
            role: 'Analytics Manager',
            content: 'Finally, beautiful data visualizations without hiring a developer. The drag-and-drop interface is fantastic.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        },
        {
            id: 't2',
            name: 'Kevin Lee',
            company: 'Marketing Tech',
            role: 'Marketing Director',
            content: 'Our stakeholders love the interactive dashboards. Data storytelling has never been easier.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        },
    ],
    p7: [
        {
            id: 't1',
            name: 'Steven Johnson',
            company: 'Cybersecurity Leaders',
            role: 'Security Director',
            content: 'ThreatShield detected advanced threats that other tools missed. The AI-powered detection is genuinely impressive.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        },
    ],
    p8: [
        {
            id: 't1',
            name: 'Rebecca Foster',
            company: 'Healthcare Systems',
            role: 'Compliance Officer',
            content: 'ComplianceHub made HIPAA compliance effortless. Automated reporting saves our compliance team hours every month.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        },
    ],
    p9: [
        {
            id: 't1',
            name: 'Christopher Brown',
            company: 'Financial Tech',
            role: 'CTO',
            content: 'Military-grade encryption at an affordable price. The key management is automatic and worry-free.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        },
    ],
    p10: [
        {
            id: 't1',
            name: 'Amanda Russell',
            company: 'Cloud Ops Inc',
            role: 'Operations Manager',
            content: 'InfraWatch gives us complete visibility across our entire infrastructure. The intelligent alerts prevent 90% of incidents.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1507527173264-8ee1c27b658a?w=100&h=100&fit=crop',
        },
    ],
    p11: [
        {
            id: 't1',
            name: 'Ryan Elliott',
            company: 'Performance Optimization',
            role: 'Engineering Lead',
            content: 'PerfTrace identified performance bottlenecks we didn\'t even know existed. Improved response times by 50%.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        },
    ],
    p12: [
        {
            id: 't1',
            name: 'Jessica Campbell',
            company: 'DevOps Teams',
            role: 'DevOps Engineer',
            content: 'Multi-channel alerting keeps the right people informed at the right time. The Slack integration is seamless.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        },
    ],
    p13: [
        {
            id: 't1',
            name: 'Gregory White',
            company: 'Cloud Native Corp',
            role: 'Container Platform Lead',
            content: 'ContainerOS simplified our container orchestration. The built-in service mesh is powerful and easy to use.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1507527173264-8ee1c27b658a?w=100&h=100&fit=crop',
        },
    ],
    p14: [
        {
            id: 't1',
            name: 'Sophia Martinez',
            company: 'Edge Computing Solutions',
            role: 'Platform Architect',
            content: 'Deploying to the edge is now trivial with ServerlessEdge. Sub-100ms latency is a game-changer for our users.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        },
    ],
    p15: [
        {
            id: 't1',
            name: 'Lucas Anderson',
            company: 'High Performance Computing',
            role: 'Infrastructure Architect',
            content: 'VMCluster delivers consistent high performance. The automatic scaling handles our peak loads perfectly.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        },
    ],
};