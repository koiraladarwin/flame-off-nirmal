import React from "react";

function Notice() {
  return (
    <>
      <div
        className="h-150 bg-white
       flex flex-col p-4 gap-4 md:flex-row md:pl-10 md:py-20 relative rounded-3xl md:gap-10"
      >
        {/* top part  */}

        <div className="position absolute top-5 left-5">
          <h1 className="text-4xl font-bold ">News and Events</h1>
        </div>
        {/* left part */}
        <div className="flex   flex-col">
          <h2 className="text-4xl font-black mt-10">
            Latest <br /> News
          </h2>
          <p>
            Here you can get all the news relating to Flame off. <br /> All the
            cool events organized by flame off
          </p>
        </div>

        {/* right part */}

        <div className="flex justify-center items-center flex-col flex-1 mr-4 md:flex-1">
          {/* the card part */}

          <div className="bg-blue-100 w-full p-5 rounded-xl mb-2">
            <p className="mb-2">
              <span className="text-xl font-black text-orange-500 uppercase">
                Category{" "}
              </span>
              <span className="text-xl font-black ml-2"> JUNE 2025</span>
            </p>
            <p className=" tracking-wider mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              nemo eveniet, quasi ea at facere quam unde ullam, dolorum vero
              amet ipsam? Molestias iusto dolor magni sit aperiam, nemo totam?
              Officiis placeat cumque numquam accusantium rem veritatis alias
              recusandae nesciunt atque doloribus libero, ea nisi ipsa fugiat
              deleniti quaerat qui maiores velit! Reiciendis veritatis dolorem
              et aut quibusdam, maiores aliquam.
            </p>
          </div>
          <div className="bg-blue-100 w-full p-5 rounded-xl">
            <p className="mb-2">
              <span className="text-xl font-black text-orange-500 uppercase">
                Category{" "}
              </span>
              <span className="text-xl font-black ml-2"> JUNE 2025</span>
            </p>
            <p className=" tracking-wider">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              nemo eveniet, quasi ea at facere quam unde ullam, dolorum vero
              amet ipsam? Molestias iusto dolor magni sit aperiam, nemo totam?
              Officiis placeat cumque numquam accusantium rem veritatis alias
              recusandae nesciunt atque doloribus libero, ea nisi ipsa fugiat
              deleniti quaerat qui maiores velit! Reiciendis veritatis dolorem
              et aut quibusdam, maiores aliquam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Notice;
