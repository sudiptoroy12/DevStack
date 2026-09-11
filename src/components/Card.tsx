interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface CardProps {
  technology: Technology;
}

const Card = ({ technology }: CardProps) => {
  return (
    <div className="w-full max-w-sm rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      
      {/* Top */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-14 w-14 object-contain"
          />

          <span className="h-2 w-2 rounded-full bg-gray-800"></span>
        </div>

        <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-medium text-blue-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="mt-8 text-3xl font-semibold text-gray-900">
        {technology.name}
      </h2>

      {/* Description */}
      <p className="mt-5 min-h-[90px] text-base leading-8 text-gray-400">
        {technology.description}
      </p>

      {/* Divider */}
      <div className="my-5 border-t border-gray-200"></div>

      {/* Details */}
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500">
          {technology.category}
        </span>

        <span className="text-sm font-medium text-gray-500">
          {technology.difficulty}
        </span>

        <div className="flex items-center gap-1">
          <span className="text-lg text-yellow-400">★</span>

          <span className="text-sm font-medium text-gray-600">
            {technology.rating}
          </span>
        </div>
      </div>

      {/* Button */}
      <button className="mt-6 w-full rounded-xl bg-slate-950 py-4 text-base font-medium text-white transition hover:bg-slate-800">
        Add to Stack
      </button>
    </div>
  );
};

export default Card;