function HeaderIcon({ active, Icon }) {
  return (
    <div
      // Number after blue- indicates intensity of color
      className="flex items-center cursor-pointer cursor-pointer 
                 md:px-10 sm:h-14 md:hover:bg-gray-100
                 rounded-xl active:border-b-2 active:border-blue-500"
    >
      {/* px-10 padding of 10 on x-axis */}
      <Icon
        className={`h-5 text-gray-500 text-center sm:h-7 mx-auto hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
