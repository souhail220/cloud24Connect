import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faGraduationCap,
  faNewspaper,
  faRobot,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import "./resourcesComponents.css";

const cards = [
  {
    icon: faBook,
    label: "Docs",
    title: "Get started with DigitalOcean’s Linux-based virtual machines",
  },
  {
    icon: faGraduationCap,
    label: "Tutorial",
    title: "How To Install and Use Docker on Ubuntu",
  },
  {
    icon: faGraduationCap,
    label: "Tutorial",
    title: "Run large language models like Ollama on H100 GPUs",
  },
  {
    icon: faRobot,
    label: "Tutorial",
    title: "Build a Slack AI Chatbot with DigitalOcean Gradient Platform",
  },
  {
    icon: faCloud,
    label: "Guide",
    title: "How to choose a cloud service provider",
  },
  {
    icon: faNewspaper,
    label: "Article",
    title: "Learn about open source AI platforms",
  },
];

const ResourcesComponents = () => {
  return (
    <div className="resource-container bg-gradient-to-b from-primary to-primary">
      <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-secondary">Resources and Support</h2>
      <p className="resource-subtitle text-white">
        Our cloud is built to be simple and powerful, so you can spend your time
        focusing on building apps, not pulling your hair out.
      </p>

      <div className="card-grid">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <FontAwesomeIcon icon={card.icon} className="card-icon" />
              <span className="card-label">{card.label}</span>
            </div>
            <h3 className="card-title">{card.title}</h3>
            <a href="#" className="card-link">
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesComponents;
