

const AddressSection = () => {
  return (
    <>
      <h3 className="text-5xl text-center font-bold my-24 ">Our Address</h3>
      <div className="container mx-auto">
        <div className="flex mx-auto items-center mb-12 justify-center">
          <div className="lg:w-1/2 ">
            <iframe
              title="Map"
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.175604517976!2d-118.28974168453277!3d34.021155225759296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6b1f470e067%3A0xf6b05a630b98f745!2s123%20Main%20St%2C%20Anytown%2C%20USA%2012345!5e0!3m2!1sen!2sus!4v1620071059015!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressSection;
