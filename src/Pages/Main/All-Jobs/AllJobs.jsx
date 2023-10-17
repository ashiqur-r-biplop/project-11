 

  

const AllJobs = () => {
      
  return (
    <section className="container md:w-[1440px] mt-20 mx-auto">
          <div className="hero md:w-[1440px] bg-[#f2f6fd] my-2">
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

       {/* dewar system */}
       <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
              {/* card */}
          </div>
         

          <label htmlFor="my-drawer-2" className="btn  btn-accent drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <form className="menu p-4 w-80 min-h-full bg-base-200 form-control">
            {/* Sidebar content here */}
            <h2 className="text-center text-xl font-bold">Job type</h2>
            <div className="from-check">
              <input type="checkbox" name="name" id="" />
              <label htmlFor="name" className="text-lg ms-4"> Full</label> <br />
              <input type="checkbox" name="name" id="" />
              <label htmlFor="name" className="text-lg ms-4">Part</label> <br />
                
              <input type="checkbox" name="name" id="" />
              <label htmlFor="name" className="text-lg ms-4"> Remote</label>
            </div>
            
             
            <hr className="font-bold my-5" />
            <h3 className="text-center text-xl font-bold">Position </h3>
            <div className="from-check">
              <input type="checkbox" name="name" id="" />
              <label htmlFor="name" className="text-lg ms-4"> Senior</label> <br />
              <input type="checkbox" name="name" id="" />
              <label htmlFor="name" className="text-lg ms-4">Junior</label> <br />
                
              <input type="checkbox" name="name" id="" />
              <label htmlFor="name" className="text-lg ms-4"> Fresher</label>
            </div>
            <hr className="font-bold my-5" />
            <h3 className="text-center text-xl font-bold">On-Site / Remote </h3>
            <div className="from-check">
              <input type="checkbox" className="text-xl" name="name" id="" />
              <label htmlFor="name" className="text-lg ms-4"> Onsite</label> <br />
              <input type="checkbox" name="name" id="" />
              <label htmlFor="name" className="text-lg ms-4">Remote</label> <br />
                
              <input type="checkbox" name="name" id="" />
              <label htmlFor="name" className="text-lg ms-4"> Hybrid</label>
            </div>
           
             
          </form>
        </div>
      </div>
    </section>
  )
}

export default AllJobs