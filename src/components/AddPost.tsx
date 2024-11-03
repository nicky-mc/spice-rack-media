import Image from "next/image";
const AddPost = () => {
  return (
    <div className="bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/*Avatar*/}
      <Image
        src="https://images.pexels.com/photos/28357757/pexels-photo-28357757/free-photo-of-workshop-de-fotografias-de-bodas.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        alt="a avatar picture"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/*Post*/}
      <div className="flex-1">
        {/*Text Input*/}
        <div className="flex gap-4 ">
          <textarea
            placeholder="Whatcha wanna talk about?"
            id=""
            className="flex-1 bg-slate-300 rounded-lg p-2"
          ></textarea>
          <Image
            src="/emoji.png"
            alt="emoji icon"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/*POST OPTIONS*/}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer ">
            <Image src="/addimage.png" alt="add photo" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer ">
            <Image src="/addVideo.png" alt="add video" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer ">
            <Image src="/addevent.png" alt="add event" width={20} height={20} />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer ">
            <Image src="/poll.png" alt="add poll" width={20} height={20} />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
