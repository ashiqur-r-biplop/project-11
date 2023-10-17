  

const AllJobs = () => {
  return (
    <section className="container md:w-[1440px] mt-20 mx-auto">
          <div className="hero md:w-[1440px]   bg-[#f2f6fd] my-2">
        <div className="hero-content  ">
          <div className="max-w-md">
            <h1 className=" text-4xl md:text-5xl font-bold text-center">2023 Jobs Available Now</h1>
            <p className="py-6 text-center">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque
              delectus molestias quis?
            </p>
            {/*  */}
           
           <div className="flex justify-evenly rounded-2xl h-12   ">
               <div className="input-group">
               <select className="select select-bordered w-full ">
                    <option selected>Pick category</option>
                    <option>Management</option>
                    <option>Front-end</option>
                    <option>MERN</option>
                    <option>React</option>
               </select>
               <button className="btn btn-accent">Search</button>
               </div>     
           </div>
           <div className=" md:ms-[-350px] flex justify-between   mt-10 md:w-[1200px]">
           <img className="hidden md:block" src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/bg-left-hiring.cc0e2e85.svg" alt="" />    
           
           <img src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/bg-right-hiring.0dfda9a2.svg" alt="" />
              
           </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllJobs