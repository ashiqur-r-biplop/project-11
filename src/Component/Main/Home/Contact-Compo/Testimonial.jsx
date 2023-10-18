import customer from "../../../../../src/assets/reviewCustomer.png";

const Testimonial = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[1092px] flex  mt-12  justify-center ">
          <div className="w-3/4">
            <p className="text-center my-2 font-serif text-3xl">
              Our Happy Customer
            </p>
            <p className="text-center  text-sm">
              When it comes to choosing the right web hosting provider, we know
              how easy it is to get overwhelmed with the number.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <div className="w-[1092px] grid gap-x-4 md:grid-cols-3">
          <div className="flex flex-col">
            <div className="border border-gray-400 p-2 mb-2">
              <p className="font-serif ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis nemo eaque non, explicabo ratione cupiditate molestiae
                tenetur fugit. Dolorem, quas deserunt temporibus officia modi
                ipsa!
              </p>
            </div>

            <div className="h-20  flex items-center ">
              <div className="w-16 mr-3 ">
                <img src={customer} className="rounded-full" />
              </div>
              <div>
                <p className="text-sm">Mark Aider</p>
                <p className="text-xs">Businessmen</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="border border-gray-400 p-2 mb-2">
              <p className="font-serif ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis nemo eaque non, explicabo ratione cupiditate molestiae
                tenetur fugit. Dolorem, quas deserunt temporibus officia modi
                ipsa!
              </p>
            </div>

            <div className="h-20  flex items-center ">
              <div className="w-16 mr-3 ">
                <img src={customer} className="rounded-full" />
              </div>
              <div>
                <p className="text-sm">Mark Aider</p>
                <p className="text-xs">Businessmen</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="border border-gray-400 p-2 mb-2">
              <p className="font-serif ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis nemo eaque non, explicabo ratione cupiditate molestiae
                tenetur fugit. Dolorem, quas deserunt temporibus officia modi
                ipsa!
              </p>
            </div>

            <div className="h-20  flex items-center ">
              <div className="w-16 mr-3 ">
                <img src={customer} className="rounded-full" />
              </div>
              <div>
                <p className="text-sm">Mark Aider</p>
                <p className="text-xs">Businessmen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
