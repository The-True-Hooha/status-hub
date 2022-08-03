const ApplicationCard = ({ name, logo, menu }) => {
  return (
    <div className="h-[150px] mb-4 bg-white rounded-md drop-shadow-lg w-[150px] duration-200 cursor-pointer hover:mt-[-6px]">
      <div className="mt-2 flex justify-end mr-2 text-[#1AA952]">{menu}</div>
      <div className="flex justify-center">{logo}</div>
      <h2 className="flex justify-center">{name}</h2>
    </div>
  );
};

export default ApplicationCard;
