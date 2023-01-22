import React from "react";

const DetailCard = () => {
  return (
    <div className="flex flex-col py-2 px-4 border-2 rounded-lg shadow-sm m-4 md:px-8 ">
      <div className="flex flex-col">
        <div className="font-bold">Description</div>
        <p className="font-normal">
          Providing service of domestic flight booking @ lowest price guaranted
          and also for railway e ticket booking, also offering international
          flight tickets. giving services to our customers since 1995. now going
          to start hajj and umrah very soon for our valuable customers it will
          be also @ very affordable prices.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 my-6 md:grid-cols-2">
        <div className="flex justify-between md:flex-col">
          <div className="font-bold">Contact Person</div>
          <p>Imran Dola</p>
        </div>
        <div className="flex justify-between md:flex-col ">
          <div className="font-bold">Address</div>
          <p className="text-right md:text-left">
            15 Kashmani Shopping Centre Unn Surat Gujarat 395003
          </p>
        </div>
        <div className="flex justify-between md:flex-col">
          <div className="font-bold">Designation</div>
          <p>Proprietor</p>
        </div>
        <div className="flex justify-between md:flex-col">
          <div className="font-bold">State</div>
          <p>Gujarat</p>
        </div>
        <div className="flex justify-between md:flex-col">
          <div className="font-bold">Emails</div>
          <p>helloservices1@gmail.com</p>
        </div>
        <div className="flex justify-between md:flex-col">
          <div className="font-bold">City</div>
          <p>Surat</p>
        </div>
        <div className="flex justify-between md:flex-col">
          <div className="font-bold">Phones</div>
          <p>9712500500</p>
        </div>
        <div className="flex justify-between md:flex-col">
          <div className="font-bold">Country</div>
          <p>India</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
