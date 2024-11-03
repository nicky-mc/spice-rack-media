import Image from "next/image";

export default function Comments() {
  return (
    <div className="">
      {/*Write Comment Here*/}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/19640832/pexels-photo-19640832/free-photo-of-untitled.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt="alt"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm p6-6 py-2 w-full  ">
          <input
            type="text"
            placeholder="write a comment"
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt="emoji"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/*Display Comments*/}
      <div className="flex items-center gap-4  text-gray-500 mt-6 ">
        <Image
          src="https://images.pexels.com/photos/19640832/pexels-photo-19640832/free-photo-of-untitled.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt="alt"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium">Frankie James</span>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            nulla ab perferendis quis quas, rerum voluptatum autem placeat
            accusantium sed eum temporibus corrupti maxime quisquam beatae
            quaerat eius non recusandae.
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="/like.png"
              alt="like"
              width={12}
              height={12}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">124 Likes</span>

            <div className="">Reply</div>
          </div>
        </div>
        <Image
          src="/more.png"
          alt="alt"
          width={16}
          height={16}
          className="cursor-pointer w-4 h-4"
        />
      </div>
    </div>
  );
}
