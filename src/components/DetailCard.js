import React from "react";

const DetailCard = (props) => {
  const { address, name, email, phone, website } = props;
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
          <p>{name}</p>
        </div>
        <div className="flex justify-between md:flex-col">
          <div className="font-bold">Address</div>
          <p className="text-right md:text-left">
            {address.suite} {address.street} {address.city} {address.zipcode}
          </p>
        </div>
        <div className="flex justify-between md:flex-col">
          <div className="font-bold">Designation</div>
          <p>Proprietor</p>
        </div>
        <div className="flex justify-between md:flex-col">
          <div className="font-bold">Website</div>
          <p>{website}</p>
        </div>
        <div className="flex justify-between md:flex-col">
          <div className="font-bold">Emails</div>
          <p>{email}</p>
        </div>
        <div className="flex justify-between md:flex-col">
          <div className="font-bold">City</div>
          <p>{address.city}</p>
        </div>
        <div className="flex justify-between md:flex-col">
          <div className="font-bold">Phones</div>
          <p>{phone}</p>
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
