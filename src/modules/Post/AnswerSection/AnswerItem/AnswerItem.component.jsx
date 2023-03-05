import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { deleteAnswer } from "../../../../redux/answers/answers.actions";

import { ReactComponent as UpVote } from "../../../../assets/ArrowUpLg.svg";
import { ReactComponent as DownVote } from "../../../../assets/ArrowDownLg.svg";
import UserCard from "../../../../components/molecules/UserCard/UserCard.component";

import "./AnswerItem.styles.scss";
import censorBadWords from "../../../../utils/censorBadWords";
import { Box, Button, ButtonGroup, Stack, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUp from "@mui/icons-material/ThumbUp";
import { countVotes, createVote } from "../../../../api/voteApi";

const AnswerItem = ({
  deleteAnswer,
  answer: { content, user_id, gravatar, id, created_at, username },
  post: { post },
  auth,
}) => {
  const [votes, setVotes] = useState({
    up: 0,
    down: 0,
  });

  const handleVote = async (type) => {
    const votes = await createVote(type);
  };

  const getVotesCount = async () => {
    const votes = await countVotes(post.id, id);
    console.log("votes", votes);
  };
  useEffect(() => {
    getVotesCount();
  }, []);

  return (
    <Fragment>
      <Stack spacing={2}>
        <div>
          <ButtonGroup
            // orientation="vertical"
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button
              sx={{ display: "flex", justifyContent: "space-evenly" }}
              startIcon={<ThumbUpIcon htmlColor="white" />}
              color="success"
              onClick={() => handleVote("up")}
            >
              <Typography color="white">{votes.up}</Typography>
            </Button>
            <Button
              sx={{ display: "flex", justifyContent: "space-evenly" }}
              startIcon={<ThumbDownIcon htmlColor="white" />}
              color="error"
              onClick={() => handleVote("down")}
            >
              {votes.down}
            </Button>
          </ButtonGroup>
        </div>
        <Stack className="answer-item" spacing={1} direction="row">
          <Box
            flexGrow={1}
            className="answer-content fc-black-800"
            dangerouslySetInnerHTML={{ __html: censorBadWords(content) }}
          ></Box>
          <div className="answer-actions">
            <UserCard
              created_at={created_at}
              user_id={user_id}
              gravatar={gravatar}
              username={username}
              dateType={"answered"}
              backgroundColor={"transparent"}
            />
          </div>
        </Stack>
      </Stack>
    </Fragment>
  );
};

AnswerItem.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  answer: PropTypes.object.isRequired,
  deleteAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post,
});

export default connect(mapStateToProps, { deleteAnswer })(AnswerItem);
