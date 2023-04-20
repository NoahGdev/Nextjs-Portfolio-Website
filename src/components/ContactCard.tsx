import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactCard: React.FC = () => {
  return (
    <div className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-800 py-4 px-6 rounded-lg">
            <FaGithub className="text-4xl text-white" />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-800 py-4 px-6 rounded-lg">
            <FaLinkedin className="text-4xl text-white" />
          </a>
          <a href="mailto:your-email@example.com" className="flex items-center justify-center bg-gray-800 py-4 px-6 rounded-lg">
            <FaEnvelope className="text-4xl text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
