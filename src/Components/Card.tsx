export interface CardProps {
  title: string;
  content: string;
  image?: string;
}

export const Card = ({ title, content, image }: CardProps) => {
  return (
    <div className="w-80 flex flex-col items-center p-4 bg-white rounded-md shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-all duration-300 hover:w-96">
      <h2 className="text-2xl font-bold">{title}</h2>
      {image && <img src={image} alt={title} className="w-full h-48 object-cover mt-4" />}
      <p className="mt-4 text-center">{content}</p>
    </div>
  );
};

