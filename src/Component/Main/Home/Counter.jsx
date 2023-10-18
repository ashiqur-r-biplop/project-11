import CountUp from 'react-countup';

const Counter = () => {
  const datas = [
    {
      title: "Completed Cases",
      desc: "We always provide people a complete solution upon focused of any business",
      num: "85",
    },
    {
      title: "Our Office",
      desc: "We always provide people a complete solution upon focused of any business",
      num: "75",
    },
    {
      title: "Skilled People",
      desc: "We always provide people a complete solution upon focused of any business",
      num: "105",
    },
    {
      title: "Happy Clients",
      desc: "We always provide people a complete solution upon focused of any business",
      num: "95",
    },
  ];
  return (
    <div className="container  mx-auto px-3 md:px-7">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[4vw]">
        {datas.map((item, index) => {
          const { title, desc, num } = item;
          return (
            <div key={index} className="text-center space-y-2">
              <h1 className="text-[#3c65f5] text-[56px] leading-[71px] font-extrabold">
              <CountUp end={num} /> K+
              </h1>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Counter;
