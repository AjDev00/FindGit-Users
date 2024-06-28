import styles from "./css/displayuser.module.css";

export default function DisplayUser({ isLoading, user }) {
  return (
    <div className={styles.userContainer}>
      <h3>
        {isLoading ? (
          "Please Hold, Loading..."
        ) : (
          <div className={styles.all}>
            <div className={styles.first}>
              <img
                className={styles.profilePic}
                src={user.avatar_url}
                alt="no"
              />
              <div className={styles.userDetails}>
                <h2 className={styles.username}>{user.name}</h2>
                <p className={styles.userProps}>@{user.login}</p>
                <p className={styles.userProps2}>
                  {" "}
                  {user.bio ? user.bio : "This user has no bio."}
                </p>
              </div>
              <p className={styles.created}> Joined at: {user.created_at}</p>
            </div>
            <div className={styles.second}>
              <p className={styles.repos}>
                {" "}
                <p className={styles.rep}>Repos</p>
                <b>{user.public_repos}</b>
              </p>
              <p className={styles.repos}>
                {" "}
                <p className={styles.rep}>Followers</p>
                <b>{user.followers}</b>
              </p>
              <p className={styles.repos}>
                {" "}
                <p className={styles.rep}>Following</p>
                <b>{user.following}</b>
              </p>
            </div>
            <div className={styles.third}>
              <div className={styles.contact}>
                <p className={styles.location}>
                  🏡 {user.location ? user.location : "Unknown"}
                </p>
                <p className={styles.twitter}>
                  📞{" "}
                  {user.twitter_username
                    ? user.twitter_username + "(twitter)"
                    : "No Twitter Link"}
                </p>
                <p className={styles.blog}>
                  📎 {user.blog ? user.blog : "No blog"}{" "}
                </p>
              </div>
            </div>
          </div>
        )}
      </h3>
    </div>
  );
}
