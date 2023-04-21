import { FaBriefcase } from 'react-icons/fa';
import Link from 'next/link';

const HireMeCard: React.FC = () => {
  return (
    <div className="fixed bottom-0 right-0 m-8 transform hover:-translate-y-2 transition duration-500 ease-in-out blur-background hidden sm:block">
        <Link href="mailto:your-email@example.com" className="bg-transparent text-white border border-purple-100 hover:bg-white hover:text-black font-bold py-2 px-4 rounded-full flex items-center">
            <FaBriefcase className="text-2xl mr-2" />
            <span className="text-lg text-purple-100">I'm looking for a summer internship!</span>
        </Link>
    </div>
  );
};

export default HireMeCard;
