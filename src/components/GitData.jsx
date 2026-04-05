import { useEffect, useState } from "react";
import Card from './Card.jsx'

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

  if (!user) return <p>loading....</p>;

  return (
    <>
      <Card data={user} />
    </>
  );
}