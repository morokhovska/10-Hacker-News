import { instance } from "./http";

class CardService {
  getCardInfo = async (id) => {
    try {
      const story = await instance.get(`/item/${id}.json`);
      const author = await instance.get(`/user/${story.data.by}.json`);
      return { ...story.data, ...author.data };
    } catch (error) {
      throw error;
    }
  };
}
const cardService = new CardService();

export default cardService;
