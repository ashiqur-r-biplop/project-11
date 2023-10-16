import React from "react";
import { useForm } from "react-hook-form";
import contactImage from "../../../../../src/assets/contact sidebar.png";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex justify-center mt-14">
      <div className="grid md:grid-cols-3 justify-center w-[1092px] ">
        <div className=" md:col-span-2">
          <div className="">
            <p className="text-xs mt-4 font-serif text-blue-600">Contact us</p>
            <p className="my-1 text-3xl font-bold">Get In Touch</p>
            <p className="text-xs mb-6 font-serif text-gray-500">
              The right move at the right time saves your investment. live
              <br /> the dream of expanding your business.
            </p>
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 grid-cols-1  justify-center px-2 md:px-0">
                  <div className="mb-4 md:bt-0">
                    <input
                      className="border w-full md:w-[90%] p-1 rounded-sm text-gray-400"
                      defaultValue="Enter your Name"
                      {...register("name")}
                    />
                  </div>
                  <div>
                    <input
                      className="border w-full md:w-[90%] p-1 rounded-sm text-gray-400"
                      defaultValue="Company name(optional)"
                      {...register("conpany")}
                    />
                  </div>
                </div>
                <div className="grid md:mt-8 mt-2 md:grid-cols-2  grid-cols-1 justify-center px-2 md:px-0">
                  <div className="mb-4 md:bt-0">
                    <input
                      className="border w-full md:w-[90%] p-1 rounded-sm text-gray-400"
                      defaultValue="Enter your Email"
                      {...register("email")}
                    />
                  </div>
                  <div>
                    <input
                      className="border w-full md:w-[90%] p-1 rounded-sm text-gray-400"
                      defaultValue="Phone number"
                      {...register("phone")}
                    />
                  </div>
                </div>
                <div className='px-2 md:px-0'>
                  <textarea
                    className="text-gray-400 mt-2 border w-full  min-h-[150px] md:w-[95%] "
                    defaultValue="Tell us about you"
                    {...register("message")}
                  ></textarea>
                </div>
                <input {...register("exampleRequired", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}

                <div className="md:flex ml-2 md:ml-0">
                  <input
                    type="submit"
                    className="bg-blue-700 md:px-6 px-3 py-1 md:py-2 text-white rounded mr-4 "
                  />
                  <div className=" flex items-center">
                    <input type="checkbox" />
                    <p className="text-xs ml-1">
                      By clicking contact us button, you agree our terms and
                      policy,
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex mt-4 md:mt-0 items-center">
          <img src={contactImage} />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
