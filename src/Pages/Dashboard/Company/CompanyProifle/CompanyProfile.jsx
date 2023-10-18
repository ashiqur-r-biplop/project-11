import CompanyTestomonial from "../../../../Component/DashBoard/Company/CompanyTestomonial/CompanyTestomonial";
import CompanyProfileCompo from "../../../../Component/DashBoard/Company/Profile/CompanyProfileCompo";

const CompanyProfile = () => {
  const info = [
    {
      companyName: "XYZ Innovations",
      startJourney: "18 Nov 2022",
      departmentList: [
        "Product Development",
        "Marketing",
        "Sales",
        "Quality Assurance",
      ],
      description:
        "XYZ Innovations is a dynamic company dedicated to creating cutting-edge products and services to transform industries and improve people's lives.",
      image: "https://example.com/xyz_innovations_logo.png",
    },
    {
      companyName: "GreenTech Solutions",
      startJourney: "18 Nov 2022",
      departmentList: [
        "Sustainability Research",
        "Engineering",
        "Marketing",
        "Finance",
      ],
      description:
        "GreenTech Solutions is a leader in sustainable technology, committed to addressing environmental challenges through innovation and eco-friendly solutions.",
      image: "https://example.com/greentech_solutions_logo.png",
    },
    {
      companyName: "HealthMasters Inc.",
      startJourney: "18 Nov 2022",
      departmentList: [
        "Medical Research",
        "Healthcare Services",
        "Administration",
        "Pharmacy",
      ],
      description:
        "HealthMasters Inc. is dedicated to improving the health and well-being of people worldwide through cutting-edge medical research and healthcare services.",
      image: "https://example.com/healthmasters_logo.png",
    },
    {
      companyName: "E-Commerce Express",
      startJourney: "18 Nov 2022",
      departmentList: [
        "Technology",
        "Sales and Marketing",
        "Customer Support",
        "Logistics",
      ],
      description:
        "E-Commerce Express is a global e-commerce platform offering a wide range of products and services, ensuring a seamless online shopping experience.",
      image: "https://example.com/ecommerce_express_logo.png",
    },
    {
      companyName: "Artistic Creations Ltd.",
      startJourney: "18 Nov 2022",
      departmentList: [
        "Creative Design",
        "Production",
        "Sales and Distribution",
        "Customer Relations",
      ],
      description:
        "Artistic Creations Ltd. is a renowned company in the world of art and design, specializing in creating unique and captivating artworks.",
      image: "https://example.com/artistic_creations_logo.png",
    },
    {
      companyName: "Foodie Delights Inc.",
      startJourney: "18 Nov 2022",
      departmentList: [
        "Culinary Research",
        "Restaurant Management",
        "Marketing",
        "Quality Assurance",
      ],
      description:
        "Foodie Delights Inc. is passionate about culinary excellence and brings delectable, gourmet experiences to food lovers around the world.",
      image: "https://example.com/foodie_delights_logo.png",
    },
  ];

  return (
    <div className="container mx-auto md:px-10 px-3 lg:px-0">
      <div className="uppercase py-10 text-center font-extrabold text-3xl md:text-4xl">
        all the company that <br /> have collaborated with us
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {info.map((data, index) => (
           <CompanyProfileCompo key={index} data={data}></CompanyProfileCompo>
        ))}
      </div>
     <div className="mt-10 flex justify-center items-center">
      <h1 className="text-4xl font-bold">Top Review Of Companies</h1>
     </div>
      <CompanyTestomonial />
    </div>
  );
};

export default CompanyProfile;
