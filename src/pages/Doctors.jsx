import DoctorsCard from "../components/DoctorsCard";

function Doctors() {
  return (
    <div>
      <DoctorsCard
        photoUrl="/dhanvantari.png"
        name="John Doe (BAMS)"
        about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel lacus sed ligula porta tempor."
        experience="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus vel leo pharetra sollicitudin."
        specialization="UI/UX Design, Frontend Development, Product Strategy"
        phone=""
        email="john.doe@example.com"
      />
      <DoctorsCard
        photoUrl="/dhanvantari.png"
        name="Jane Doe (BAMS)"
        about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel lacus sed ligula porta tempor."
        experience="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus vel leo pharetra sollicitudin."
        specialization="UI/UX Design, Frontend Development, Product Strategy"
        phone=""
        email="jane.doe@example.com"
      />

      <div className="pb-10"></div>
    </div>
  );
}
export default Doctors;
