import Image from "next/image";
const Stories = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-yellow-500 to-white-400 rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/28357757/pexels-photo-28357757/free-photo-of-workshop-de-fotografias-de-bodas.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="image of a couple"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium ">Friend 1</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
