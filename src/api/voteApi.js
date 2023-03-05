import axios from "axios";

import {
  createVote as _createVote,
  getVotesCount as _getVotesCount,
} from "./urls";

export const createVote = async (type) => {
  console.log("called");
  return await axios.post(_createVote, { type });
};

export const countVotes = async (questionId, answerId) => {
  return await axios.get(
    _getVotesCount
      .replace("{questionId}", questionId)
      .replace("{answerId}", answerId)
  );
};
