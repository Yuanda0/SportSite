import { Route, Routes, useParams } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs/Blogs";
import Footer from "./components/Footer";
import WrongPage from "./pages/WrongPage";
import Store from "./pages/Store";
import QandA from "./pages/QandA";
import Workouts from "./pages/Workouts/Workouts";
import HomeWorkouts from "./pages/Workouts/HomeWorkouts";
import Contact from "./pages/Contact";
import BuyPage from "./pages/BuyPage";
import ShowYourBlogs from "./pages/Blogs/ShowYourBlogs";
import Abs from "./pages/Workouts/Abs";
import Leg from "./pages/Workouts/Leg";
import BicepsAndTricepsWorkouts from "./pages/Workouts/BicepsAndTricepsWorkouts";
import Cardio from "./pages/Workouts/Cardio";
import Back from "./pages/Workouts/Back";
import CreateQuestion from "./pages/CreateQuestion";

function App() {
  const { id } = useParams();
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store">
          <Route path="/store" element={<Store />} />
          <Route path="buy/:id" element={<BuyPage />} />
        </Route>
        <Route path="/question-and-answer">
          <Route path="/question-and-answer" element={<QandA />} />
          <Route path="create-question" element={<CreateQuestion />} />
        </Route>
        <Route path="/blogs">
          <Route path="/blogs" element={<Blogs />} />
          <Route path="yourblogs/:id" element={<ShowYourBlogs />} />
        </Route>
        <Route path="/workouts">
          <Route path="/workouts" element={<Workouts />} />
          <Route path="home-workouts" element={<HomeWorkouts />} />
          <Route path="abs-workouts" element={<Abs />} />
          <Route path="leg-workouts" element={<Leg />} />
          <Route
            path="biceps-and-triceps-workouts"
            element={<BicepsAndTricepsWorkouts />}
          />
          <Route path="cardios" element={<Cardio />} />
          <Route path="back-workouts" element={<Back />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<WrongPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
