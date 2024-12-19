import { useState } from "react";
import { patchArticle } from "../src/api";

export default function Voting({ votes, article_id }) {
  const [vote, setVote] = useState(0);
  const [alerts, setAlerts] = useState(false);

  const incVote = () => {
    setVote((currChange) => {
      patchArticle(article_id, 1);
      return currChange + 1;
    });
  };

  const decVote = () => {
    setVote((currChange) => {
      patchArticle(article_id, -1);
      return currChange - 1;
    });
  };

  if (alerts) {
    return <div>Thanks for voting!</div>;
  }

  return (
    <section>
      <button
        disabled={vote === 1}
        onClick={() => {
          incVote();
          setAlerts(true);
        }}
      >
        👍
      </button>
      <span className="votes">{votes + vote} votes</span>
      <button
        disabled={vote === -1}
        onClick={() => {
          decVote();
          setAlerts(true);
        }}
      >
        👎
      </button>
    </section>
  );
}
