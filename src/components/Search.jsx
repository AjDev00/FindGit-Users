import { useEffect, useState } from "react";
import styles from "./css/input.module.css";
import DisplayUser from "./DisplayUser";

export default function Search() {
  const [userSearch, setUserSearch] = useState("Octokit");
  const [user, setUser] = useState({});
  const URL = `https://api.github.com/users/${userSearch}`;
  const [clicked, setClicked] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  function handleSearch() {
    setClicked((clicked) => clicked + 1);
    console.log(clicked);
  }

  useEffect(() => {
    async function getGitUsers() {
      const res = await fetch(`${URL}`);
      const data = await res.json();
      console.log(data);
      setUser(data);
      setIsLoading(false);
    }

    getGitUsers();
  }, [clicked]);

  return (
    <div>
      <div>
        <input
          className={styles.input}
          placeholder="Search GitHub Username..."
          type="text"
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
        />
        <button onClick={handleSearch} className={styles.searchButton}>
          Search
        </button>
        {userSearch && <DisplayUser isLoading={isLoading} user={user} />}
      </div>
    </div>
  );
}
