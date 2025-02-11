import { useEffect, useState } from "react";
import FoundedCard from "./FoundedCard";
import NotFoundedCard from "./NotFoundedCard";
import Loading from "./Loading";

interface UserData {
  login: string;
  bio: string;
  avatar_url: string;
  name: string;
  public_repos: number;
  following: number;
  followers: number;
}

interface InfoCard {
  darkMode: boolean;
  userName: string;
}

const InfoCard = ({ darkMode, userName }: InfoCard) => {
    const [isDataFounded, setIsDataFounded] = useState<boolean>(false);
    const [userdata, setUserData] = useState<UserData | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
  
    const getData = async () => {
      try {
        if (userName.length > 0) {
          setIsLoading(true);
          const res = await fetch(`https://api.github.com/users/${userName}`);
  
          //check if user exists
          if (res.status === 404) {
            setIsDataFounded(false);
            setIsLoading(false);
            return;
          }
          
          const data = await res.json();
          setUserData(data);
          setIsDataFounded(true);
        }
      } catch (error) {
        console.log("Error: ", error);
        setIsDataFounded(false);
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      getData();
    }, [userName]);
  
    return (
      <>
        <div
          className={`rounded-xl mt-7 min-h-50 p-4 lg:p-6 ${
            darkMode
              ? "bg-[var(--dark-card-bg)] text-[var(--dark-text)]"
              : "bg-[var(--card-bg)] text-[var(--text)]"
          }`}
          style={{ boxShadow: "0px 10px 20px 1px rgba(0, 0, 0, 0.2)" }}
        >
          {isLoading ? (
            <Loading/>
          ) : isDataFounded && userdata ? (
            <FoundedCard darkMode={darkMode} userdata={userdata} />
          ) : (
            <NotFoundedCard />
          )}
        </div>
      </>
    );
  };
  
  export default InfoCard;
  