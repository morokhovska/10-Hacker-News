import React, { useEffect, useState } from "react";
import storiesService from "../../services/topStoriesService";
import Card from "../../shared/Card";
import { randomTen } from "../../helpers/randomTen";

const Home = () => {
  const [arrOfRandomElements, setArrOfRandomElements] = useState([]);
  useEffect(() => {
    const retrieveData = async () => {
      try {
        const answer = await storiesService.getStories();
        setArrOfRandomElements(randomTen(answer));
      } catch (error) {
        console.log(error);
      }
    };

    retrieveData();
  }, []);

  return (
    <main className='home-page'>
      {arrOfRandomElements.length && <Card arr={arrOfRandomElements} />}
    </main>
  );
};

export default Home;
