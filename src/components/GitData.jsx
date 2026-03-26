import { useEffect, useState } from "react";

export default function GitHubUser({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchUser = async () => {
      const res = await fetch(
        `https://api.github.com/users/${username}`
      );
      const data = await res.json();
      setUser(data);
    };

    fetchUser();
  }, [username]); 

  if (!user) return <p>Enter a username...</p>;

  return (
    <div>
      <img src={user.avatar_url} width="100" />
      <h2>{user.name}</h2>
      <p>{user.login}</p>
    </div>
  );
}