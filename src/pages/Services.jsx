import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {" "}
      {/* Increased max-w-5xl to max-w-7xl */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {" "}
        {/* Changed gap-50 to gap-12 for more realistic spacing */}
        <ServiceCard
          title="Panchkarma"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel lacus sed ligula porta tempor."
        />
        {/* Example additional card */}
        <ServiceCard
          title="Garbha Sankar"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel lacus sed ligula porta tempor."
        />
        {/* Add more <ServiceCard /> components as needed */}
      </div>
    </div>
  );
}

export default Services;
