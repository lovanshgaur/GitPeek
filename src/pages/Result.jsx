// Result.jsx
import { useLocation } from "react-router-dom";
import GitData from "../components/GitData.jsx";

export default function Result() {
  const location = useLocation();
  const data = location.state?.userInput;

  return <>{data ? <GitData username={data} /> : "No User Found"}</>;
}
