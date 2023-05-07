import { useEffect, useState } from "react";
import JobInfo from "./Components/JobInfo";
import BtnContainer from "./Components/BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [tabs, setTabs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const formattedResponse = await response.json();
      setTabs(formattedResponse);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeJob = (index) => {
    setCurrentItem(index);
  };
  if (isLoading) {
    return <main className="loading"></main>;
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        tabs={tabs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {/*button container*/}
      <JobInfo item={tabs[currentItem]} />
    </section>
  );
};
export default App;
