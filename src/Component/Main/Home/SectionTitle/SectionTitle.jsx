/* eslint-disable react/prop-types */

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#05264e] mb-3">{title}</h1>
      <p className="text-lg lg:text-xl text-[#66789c]">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
