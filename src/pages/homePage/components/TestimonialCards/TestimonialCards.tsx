import "./TestimonialCards.css"

const testimonials = [
    {
        initials: "BO",
        name: "Bohdan Shenko",
        role: "Founder, D, Cyprus, Tango",
        quote:
            "Not only about the price, but about providing a quality improving support and finding our business. Led us to lean now on DigitalOcean.",
    },
    {
        name: "Richard Li",
        role: "CEO & Founder, Amorphous Data",
        quote: "Amorphous Data on Cloud24Connect GPU and Kubernetes",
    },
    {
        name: "Andres Murcia",
        role: "CTO, Picap",
        quote:
            "We were previously on AWS but started migrating everything because we really love Cloud24Connect in terms of cost and support.",
    },
    {
        name: "Matt Gray",
        role: "CEO, Served Hosting",
        quote:
            "How Served Scaled Their Craft CMS Platform with Cloud24Connect Kubernetes",
    },
    {
        initials: "BO",
        name: "Bohdan Shenko",
        role: "Founder, D, Cyprus, Tango",
        quote:
            "Not only about the price, but about providing a quality improving support and finding our business. Led us to lean now on DigitalOcean.",
    },
    {
        name: "Richard Li",
        role: "CEO & Founder, Amorphous Data",
        quote: "Amorphous Data on Cloud24Connect GPU and Kubernetes",
    },
    {
        name: "Andres Murcia",
        role: "CTO, Picap",
        quote:
            "We were previously on AWS but started migrating everything because we really love Cloud24Connect in terms of cost and support.",
    },
    {
        name: "Matt Gray",
        role: "CEO, Served Hosting",
        quote:
            "How Served Scaled Their Craft CMS Platform with Cloud24Connect Kubernetes",
    },
    {
        initials: "BO",
        name: "Bohdan Shenko",
        role: "Founder, D, Cyprus, Tango",
        quote:
            "Not only about the price, but about providing a quality improving support and finding our business. Led us to lean now on DigitalOcean.",
    },
    {
        name: "Richard Li",
        role: "CEO & Founder, Amorphous Data",
        quote: "Amorphous Data on Cloud24Connect GPU and Kubernetes",
    },
    {
        name: "Andres Murcia",
        role: "CTO, Picap",
        quote:
            "We were previously on AWS but started migrating everything because we really love Cloud24Connect in terms of cost and support.",
    },
    {
        name: "Matt Gray",
        role: "CEO, Served Hosting",
        quote:
            "How Served Scaled Their Craft CMS Platform with Cloud24Connect Kubernetes",
    },
];

const TestimonialCards = () => {
    return (
        <div className="testimonial-container bg-gradient-to-b from-primary-dark to-primary">
            <h2 className="testimonial-header font-bold bg-gradient-to-r from-secondary-dark to-secondary-light bg-clip-text text-transparent">
                Customers growing with Cloud24Connect
            </h2>
            <p className="testimonial-description">See how developers and startups around the globe are building and scaling their applications on Cloud24Connect while saving money.</p>
            <div className="testimonial-scroller">
                {
                    testimonials.map((card, i) =>(
                        <div key={i} className={`story-card card${(i % 4) + 1}`}>
                            <div className="top-half">
                                <h3>{card.name}</h3>
                                <p>{card.role}</p>
                            </div>
                            <div className="bottom-half">
                                <p className="clamp">{card.quote}</p>
                                <a href="#" className="case-study-link">Read case study <i className="fas fa-arrow-right" /></a>
                            </div>
                        </div>
                    ) )
                }
            </div>
        </div>
    );
};

export default TestimonialCards;