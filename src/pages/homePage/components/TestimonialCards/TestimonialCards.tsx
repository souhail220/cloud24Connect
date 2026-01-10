import "./TestimonialCards.css"

const testimonials = [
    {
        id:1,
        initials: "BO",
        name: "Bohdan Shenko",
        role: "Founder, D, Cyprus, Tango",
        quote:
            "Not only about the price, but about providing a quality improving support and finding our business. Led us to lean now on DigitalOcean.",
    },
    {
        id:2,
        name: "Richard Li",
        role: "CEO & Founder, Amorphous Data",
        quote: "Amorphous Data on Cloud24Connect GPU and Kubernetes",
    },
    {
        id:3,
        name: "Andres Murcia",
        role: "CTO, Picap",
        quote:
            "We were previously on AWS but started migrating everything because we really love Cloud24Connect in terms of cost and support.",
    },
    {
        id:4,
        name: "Matt Gray",
        role: "CEO, Served Hosting",
        quote:
            "How Served Scaled Their Craft CMS Platform with Cloud24Connect Kubernetes",
    },
    {
        id:5,
        initials: "BO",
        name: "Bohdan Shenko",
        role: "Founder, D, Cyprus, Tango",
        quote:
            "Not only about the price, but about providing a quality improving support and finding our business. Led us to lean now on DigitalOcean.",
    },
    {
        id:6,
        name: "Richard Li",
        role: "CEO & Founder, Amorphous Data",
        quote: "Amorphous Data on Cloud24Connect GPU and Kubernetes",
    },
    {
        id:7,
        name: "Andres Murcia",
        role: "CTO, Picap",
        quote:
            "We were previously on AWS but started migrating everything because we really love Cloud24Connect in terms of cost and support.",
    },
    {
        id:8,
        name: "Matt Gray",
        role: "CEO, Served Hosting",
        quote:
            "How Served Scaled Their Craft CMS Platform with Cloud24Connect Kubernetes",
    },
    {
        id:9,
        initials: "BO",
        name: "Bohdan Shenko",
        role: "Founder, D, Cyprus, Tango",
        quote:
            "Not only about the price, but about providing a quality improving support and finding our business. Led us to lean now on DigitalOcean.",
    },
    {
        id:10,
        name: "Richard Li",
        role: "CEO & Founder, Amorphous Data",
        quote: "Amorphous Data on Cloud24Connect GPU and Kubernetes",
    },
    {
        id:11,
        name: "Andres Murcia",
        role: "CTO, Picap",
        quote:
            "We were previously on AWS but started migrating everything because we really love Cloud24Connect in terms of cost and support.",
    },
    {
        id:12,
        name: "Matt Gray",
        role: "CEO, Served Hosting",
        quote:
            "How Served Scaled Their Craft CMS Platform with Cloud24Connect Kubernetes",
    },
];

const TestimonialCards = () => {
    return (
        <div className="testimonial-container bg-gradient-to-b from-gray-50 to-gray-100 dark:from-primary-dark dark:to-primary">
            <h2 className="testimonial-header font-bold bg-gradient-to-r from-primary to-primary-light dark:from-secondary-dark dark:to-secondary-light bg-clip-text text-transparent">
                Customers growing with Cloud24Connect
            </h2>
            <p className="testimonial-description">See how developers and startups around the globe are building and scaling their applications on Cloud24Connect while saving money.</p>
            <div className="testimonial-scroller">
                {
                    testimonials.map((card, i) =>(
                        <div key={card.id} className={`story-card card${(i % 4) + 1}`}>
                            <div className="top-half">
                                <h3>{card.name}</h3>
                                <p>{card.role}</p>
                            </div>
                            <div className="bottom-half">
                                <p className="clamp">{card.quote}</p>
                                <a href="/case/study/1" className="case-study-link">Read case study <i className="fas fa-arrow-right" /></a>
                            </div>
                        </div>
                    ) )
                }
            </div>
        </div>
    );
};

export default TestimonialCards;