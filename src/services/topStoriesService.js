import { instance } from "./http";

class TopStoriesService {
  getStories = async () => {
    try {
      const answer = await instance.get("/topstories.json");
      return answer.data;
    } catch (error) {
      throw error;
    }
  };
}
const topStoriesService = new TopStoriesService();

export default topStoriesService;
