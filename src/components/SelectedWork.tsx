interface WorkProps {
  name: string;
  image: string;
  backend?: string;
  fronted: string;
  description: string;
}

const SelectedWork = ({ work }: { work: WorkProps }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
      <img src={work.image} alt={work.name} className="w-full object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{work.name}</h3>
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
    </div>
  );
};

export default SelectedWork;