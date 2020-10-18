import React, { useState, useEffect } from "react";
import cardService from "../../services/cardService";

const Card = ({ arr, ...props }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    arr.map(async (item) => {
      try {
        const answer = await cardService.getCardInfo(item);
        setItems((element) => [...element, answer]);
      } catch (error) {
        console.log(error);
      }
    });
  }, [arr]);
  return (
    <>
      {items
        .sort((a, b) => a.score - b.score)
        .map((item, index) => {
          const date = new Date(item.time);
          return (
            <section className='card-section' key={`card-section_${index}`}>
              <div className='card-row'>
                <span>Story title</span>
                <span>{item.title}</span>
              </div>
              <div className='card-row'>
                <span>Story URL</span>
                <a href={item.url}>{item.url}</a>
              </div>
              <div className='card-row'>
                <span>Story date</span>
                <span>{date.toDateString()}</span>
              </div>
              <div className='card-row'>
                <span>Story score</span>
                <span>{item.score}</span>
              </div>
              <div className='card-row'>
                <span>Author ID</span>
                <span>{item.by}</span>
              </div>
              <div className='card-row'>
                <span>Author karma score</span>
                <span>{item.karma}</span>
              </div>
            </section>
          );
        })}
    </>
  );
};
export default Card;
