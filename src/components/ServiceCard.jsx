function ServiceCard({ title, description, image }) {
  return (
    <div className="flex w-full bg-green-600 rounded-2xl shadow-lg p-10 transition-colors duration-300 hover:bg-emerald-600 mx-auto cursor-pointer">
      {/* Image on the left */}
      <img
        src={image}
        alt={title}
        className="w-32 h-32 object-cover rounded-xl mr-10 self-center"
      />
      {/* Text content */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
