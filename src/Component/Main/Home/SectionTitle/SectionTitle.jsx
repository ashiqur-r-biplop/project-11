/* eslint-disable react/prop-types */

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl text-gray-500">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
