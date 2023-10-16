import SectionTitle from "./SectionTitle/SectionTitle";

const JobsByLocation = () => {
  const paris =
    "https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg?w=740&t=st=1697430866~exp=1697431466~hmac=cbeaa15bc4c93b05f1a1dc34fcf1a36655d2574816508b742dc441dc3067e610";

  const london =
    "https://img.freepik.com/free-photo/tower-bridge-london-uk_268835-1403.jpg?t=st=1697431614~exp=1697432214~hmac=269da3d5ec84a2e3f6c2a66108d241b8947eeb37baa694201b7ef3e430787316";

  const newYork =
    "https://img.freepik.com/free-photo/statue-liberty-new-york-city-skyline-usa_268835-777.jpg?w=740&t=st=1697431959~exp=1697432559~hmac=f7aaa158b0460a68881fa2f8e59655aec6b88c7024ecff020a57316976cf9b6b";

  const amsterdam =
    "https://img.freepik.com/free-photo/beautiful-shot-bicycles-leaned-again-fence-bridge-river_181624-3802.jpg?w=740&t=st=1697432018~exp=1697432618~hmac=cf54d316c906e0789f695336cba8405123f2bc10389e4167a5dd86c61612834c";

  const copenhagen =
    "https://img.freepik.com/free-photo/beautiful-view-port-colorful-buildings-captured-copenhagen-denmark_181624-8571.jpg?w=740&t=st=1697432127~exp=1697432727~hmac=63db90bb850fbec0421af55c56c03f71f60d39d03fbdbb6b14d112aa1de36265";

  const berlin =
    "https://img.freepik.com/free-photo/media-harbour-with-famous-rhinetower-dusseldorf-germany_181624-19602.jpg?w=740&t=st=1697432154~exp=1697432754~hmac=5f201248587bc3012db00d99243363c0cbc9723961263675dc247c56a93e3b7b";

  return (
    <div className="container mx-auto lg:py-10 py-5">
      <SectionTitle
        title="Jobs by Location"
        subTitle="Find your favourite jobs and get the benefits of yourself"
      ></SectionTitle>

      <div className="grid grid-cols-12 gap-3 lg:gap-5">
        <div className="col-span-12 md:col-span-5 lg:col-span-3 border rounded p-3 relative">
          <img src={paris} className="h-64 w-full" alt="Paris" />
          <h1 className="text-black hover:text-[#3c65f5] text-lg lg:text-xl font-bold py-2">Paris, France</h1>
          <div className="badge badge-ghost absolute top-5 left-4 text-[#3c65f5] p-3">Hot</div>
        </div>

        <div className="col-span-12 md:col-span-7 lg:col-span-4 border rounded p-3 relative">
          <img src={london} className="h-64 w-full" alt="London" />
          <h1 className="text-black hover:text-[#3c65f5] text-lg lg:text-xl font-bold py-2">London, England</h1>
          <div className="badge badge-ghost absolute top-5 left-4 text-[#3c65f5] p-3">Trending</div>
        </div>

        <div className="col-span-12 md:col-span-7 lg:col-span-5 border rounded p-3 relative">
          <img src={newYork} className="h-64 w-full" alt="New York" />
          <h1 className="text-black hover:text-[#3c65f5] text-lg lg:text-xl font-bold py-2">New York, USA</h1>
          <div className="badge badge-ghost absolute top-5 left-4 text-[#3c65f5] p-3">Hot</div>
        </div>

        <div className="col-span-12 md:col-span-5 lg:col-span-4 border rounded p-3 relative">
          <img src={amsterdam} className="h-64 w-full" alt="Amsterdam" />
          <h1 className="text-black hover:text-[#3c65f5] text-lg lg:text-xl font-bold py-2">Amsterdam, Holland</h1>
          <div className="badge badge-ghost absolute top-5 left-4 text-[#3c65f5] p-3">Trending</div>
        </div>

        <div className="col-span-12 md:col-span-7 lg:col-span-5 border rounded p-3 relative">
          <img src={copenhagen} className="h-64 w-full" alt="Copenhagen" />
          <h1 className="text-black hover:text-[#3c65f5] text-lg lg:text-xl font-bold py-2">Copenhagen, Denmark</h1>
          <div className="badge badge-ghost absolute top-5 left-4 text-[#3c65f5] p-3">Hot</div>
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-3 border rounded p-3 relative">
          <img src={berlin} className="h-64 w-full" alt="Berlin" />
          <h1 className="text-black hover:text-[#3c65f5] text-lg lg:text-xl font-bold py-2">Berlin, Germany</h1>
          <div className="badge badge-ghost absolute top-5 left-4 text-[#3c65f5] p-3">Trending</div>
        </div>
      </div>
    </div>
  );
};

export default JobsByLocation;
