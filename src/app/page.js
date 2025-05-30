"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import GitHubInput from "@/components/GitHubInput";
import Sidebar from "@/components/sidebar";
import PeekSection from "@/components/PeekSection";

import './globals.css';
import './layout.css';


export default function Home() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [layout, setLayout] = useState('layout1'); // Default layout
  const [hasMounted, setHasMounted] = useState(false); // Hydration fix

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        throw new Error("User not found");
      }
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!hasMounted) return null;

  return (
    <main className="main-container">
      <Sidebar onSearch={handleSearch} />
      <PeekSection
        userData={userData}
        layout={layout}
        setLayout={setLayout}
        peekOn={!!userData}  // Boolean flag: true if userData exists
      />
    </main>
  );
}
