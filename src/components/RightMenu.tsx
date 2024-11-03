import Ad from "./Ad";
import Birthdays from "./Birthdays";
import FriendRequest from "./FreindRequests";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequest />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
