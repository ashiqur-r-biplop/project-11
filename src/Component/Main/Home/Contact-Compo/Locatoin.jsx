import React from 'react'

const Locatoin = () => {
  return (
    <>
      <div className="flex justify-center mt-14">
        <div className="w-[1092px] px-6 py-9 md:grid md:grid-cols-3  bg-blue-100">
          <div className=" ">
            <p className="mb-2 font-bold">
              <span></span> Job-Box Corporation
            </p>
            <p className="md:text-sm text-xs">
              205 North Michigan Avenue, Suite MAP
            </p>
            <p className="md:text-sm text-xs">810 Chicago, 60601, USA</p>
            <p className="md:text-sm text-xs">Phone: (123) 456-7890 </p>
            <p className="md:text-sm text-xs">Email: contact@jobbox.com </p>
            <a className="md:text-sm text-xs"> VIEW MAP</a>
          </div>

          <div className="md:col-span-2 md:grid md:grid-cols-3 justify-center gap-x-3">
            <div className="md:grid md:grid-flow-row">
              <div>
                <p className="font-bold">London </p>
                <p className="text-xs">2118 Thornridge Cir. Syracuse,</p>
                <p className="text-xs">Connecticut 35624</p>
              </div>
              <div>
                <p className="font-bold">Chicago </p>
                <p className="text-xs">2118 Thornridge Cir. Syracuse,</p>
                <p className="text-xs">Connecticut 35624</p>
              </div>
            </div>
            <div className="md:grid md:grid-flow-row">
              <div>
                <p className="font-bold">New York </p>
                <p className="text-xs">2118 Thornridge Cir. Syracuse,</p>
                <p className="text-xs">Connecticut 35624</p>
              </div>
              <div>
                <p className="font-bold">Sanfansico </p>
                <p className="text-xs">2118 Thornridge Cir. Syracuse,</p>
                <p> className="text-xs"Connecticut 35624</p>
              </div>
            </div>
            <div className="md:grid md:grid-flow-row">
              <div>
                <p className="font-bold">Sidney </p>
                <p className="text-xs">2118 Thornridge Cir. Syracuse,</p>
                <p className="text-xs">Connecticut 35624</p>
              </div>
              <div>
                <p className="font-bold">Singapure </p>
                <p className="text-xs">2118 Thornridge Cir. Syracuse,</p>
                <p className="text-xs">Connecticut 35624</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Locatoin