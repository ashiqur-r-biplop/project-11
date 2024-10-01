import BrowseByCategory from "../../../Component/Main/Home/BrowseByCategory";
import Counter from "../../../Component/Main/Home/Counter";
import Header from "../../../Component/Main/Home/Header";
import JobsByLocation from "../../../Component/Main/Home/JobsByLocation";
import JobsOfTheDay from "../../../Component/Main/Home/JobsOfTheDay";
import MillionsOfJobs from "../../../Component/Main/Home/MillionsOfJobs";
import NewThinks from "../../../Component/Main/Home/NewThinks";
import NewsAndBlog from "../../../Component/Main/Home/NewsAndBlog";
import TopRecruiters from "../../../Component/Main/Home/TopRecruiters";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BrowseByCategory></BrowseByCategory>
      <JobsOfTheDay></JobsOfTheDay>
      <MillionsOfJobs></MillionsOfJobs>
      <Counter></Counter>
      <TopRecruiters></TopRecruiters>
      <JobsByLocation></JobsByLocation>
      <NewsAndBlog></NewsAndBlog>
      <NewThinks></NewThinks>
    </div>
  );
};

export default Home;
