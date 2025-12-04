function DoctorsCard({
  photoUrl,
  name,
  about,
  experience,
  specialization,
  phone,
  email,
}) {
  return (
    <div className="pl-60 pt-10">
      <div className="flex flex-col md:flex-row bg-emerald-600 shadow-lg rounded-lg overflow-hidden max-w-5xl w-full">
        {/* Left - Image */}
        <div className="md:w-1/3 w-full h-80 md:h-auto bg-gray-200">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>

        {/* Right - Info */}
        <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
          {/* Top - Name */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>

            {/* Sections */}
            <div className="space-y-4 text-gray-700">
              <div>
                <h2 className="font-semibold text-lg">About</h2>
                <p>{about}</p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">Experience</h2>
                <p>{experience}</p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">Specialization</h2>
                <p>{specialization}</p>
              </div>
            </div>
          </div>

          {/* Bottom - Contact */}
          <div className="mt-6 text-gray-800">
            <p className="mb-1">
              <span className="font-semibold">Phone:</span> {phone}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsCard;
