import Image from "next/image";
import Comments from "./Comments";
export default function Post() {
  return (
    <div className="flex flex-col gap-4">
      {/*USER*/}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/22468584/pexels-photo-22468584/free-photo-of-woman-sitting-on-bed-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="a woman sitting on a bed"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Lucy Mclain</span>
        </div>
        <Image src="/more.png" alt="see more" width={16} height={16} />
      </div>
      {/*DESC*/}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/7961664/pexels-photo-7961664.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="a pair of empty shoes in a forest"
            layout="fill"
            objectFit="cover"
            className="object-cover rounded-md"
          />
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          assumenda voluptas. Laudantium maxime ab voluptatibus est, quibusdam
          cum ipsam rerum expedita magnam ad rem asperiores, impedit sapiente
          reiciendis minima vero.
        </p>
      </div>
      {/*Interaction*/}
      <div className="flex items-center justify-between text p-2 rounded-xl my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50">
            <Image
              src="/like.png"
              alt="like"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-black">|</span>
            <span className="text-gray-700">
              123<span className="hidden md:inline">Likes</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50">
            <Image
              src="/comment.png"
              alt="comment"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-black">|</span>
            <span className="text-gray-700">
              123<span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-slate-50">
          <Image
            src="/share.png"
            alt="Share"
            width={16}
            height={16}
            className="cursor-pointer"
          />
          <span className="text-black">|</span>
          <span className="text-gray-700">
            123<span className="hidden md:inline">Shares</span>
          </span>
        </div>
      </div>
      <Comments />
    </div>
  );
}
