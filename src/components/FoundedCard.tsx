interface userInfo {
  login: string;
  bio: string;
  avatar_url: string;
  name: string;
  public_repos: number;
  following: number;
  followers: number;
}

interface FoundedCard {
  darkMode: boolean;
  userdata: userInfo;
}

const FoundedCard = ({ userdata, darkMode }: FoundedCard) => {
  return (
    <>
      <div className="flex">
        <div className="bg-gray-600 h-16 w-16 rounded-full">
          <img
            className="rounded-full"
            src={userdata?.avatar_url}
            alt="profile"
          />
        </div>
        <div className="ml-5 mt-2">
          <p className="font-bold text-xl">{userdata?.name}</p>
          <p className="text-[var(--primary-color)]">@{userdata?.login}</p>
        </div>
      </div>

      <div className="md:ml-20">
        <div className="mt-5">
          <p>{userdata?.bio}</p>
        </div>
        <div
          className={`rounded-lg flex justify-between p-2 mt-3 items-center max-w-sm ${
            darkMode ? "bg-[var(--dark-body-bg)]" : "bg-[var(--body-bg)]"
          }`}
        >
          <div className="flex flex-col items-center">
            <p className="font-bold">Public Repos</p>
            <p>{userdata?.public_repos}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">Followers</p>
            <p>{userdata?.followers}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">Following</p>
            <p>{userdata?.following}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoundedCard;
