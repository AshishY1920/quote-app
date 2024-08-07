import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./Components/Loading";
import Header from "./Components/Header";

const Login = lazy(() => import("./Screen/Login"));
const Signup = lazy(() => import("./Screen/Signup"));
const Profile = lazy(() => import("./Screen/Profile"));
const Home = lazy(() => import("./Screen/Home"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading height={true} />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
