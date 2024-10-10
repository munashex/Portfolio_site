
import { Link } from "react-router-dom";
import { CiLink } from "react-icons/ci";

interface WorkProps {
  name: string;
  image: string;
  backend?: string;
  fronted: string;
  description: string;
  smallImage: string
}

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: "smooth"})
}

const SelectedWork = ({ work }: { work: WorkProps }) => {
  return (
    <Link to={`/work/${work.name}`} onClick={scrollToTop} className="w-full group/item relative bg-[#EDEDED] hover:bg-white  border border-gray-200 rounded-lg overflow-hidden">
      <img src={work.image} alt={work.name} 
      className="w-full mix-blend-luminosity object-cover group-hover/item:mix-blend-normal" 
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-800 font-shantell">{work.name}</h3>
        <p className="text-gray-600 text-base mb-4">{work.description}</p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">
            {work.fronted}
          </span>
          {work.backend && (
            <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-semibold">
              {work.backend}
            </span>
          )}
        </div>
      </div>

      <div className="absolute flex invisible lg:group-hover/item:animate-fade-right  lg:group-hover/item:visible justify-center items-center top-0 bottom-0 right-0 left-0">
        <span className="bg-[#151515] p-3 rounded-full text-white hover:text-blue-800 hover:bg-blue-100">
        <CiLink size={60}/> 
        </span>
      </div>
    </Link>
  );
};

export default SelectedWork;