import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import { connect } from "react-redux";
import PostItem from "../../../components/molecules/PostItem/PostItem.component";
import PropTypes from "prop-types";

const Profil = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Box
        id="mainbar"
        className="homepage fc-black-800"
        sx={{ bgcolor: "#323741" }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: "20px",
            borderBottom: "2px solid hsl(47deg 30% 31%)",
            paddingBottom: "2px",
            px: 3,
            fontWeight: "600",
          }}
        >
          Questions that you have asked.
        </Typography>

        {[
          {
            loading: false,
            created_at: "",
            answer_count: 0,
            comment_count: 0,
            id: "1",
            tags: [{ tagName: "client" }, { tagName: "server" }],
            gravatar: "",
            user_id: "1",
            username: "user",
            title:
              "What are your thoughts on Google Analytics vs other analytics platforms?",
            content:
              "Recently heard about Heap which seems pretty cool, but I’m not sure if it would really be valuable, or simply another tool that I need to check. We are not at the point of using HubSpot/Marketo yet so Heap’s free ",
            views: 0,
          },
          {
            loading: false,
            created_at: "",
            answer_count: 0,
            comment_count: 0,
            id: "1",
            tags: [{ tagName: "client" }, { tagName: "server" }],
            gravatar: "",
            user_id: "1",
            username: "user",
            title:
              "What are your thoughts on Google Analytics vs other analytics platforms?",
            content:
              "Recently heard about Heap which seems pretty cool, but I’m not sure if it would really be valuable, or simply another tool that I need to check. We are not at the point of using HubSpot/Marketo yet so Heap’s free ",
            views: 0,
          },
          {
            loading: false,
            created_at: "",
            answer_count: 0,
            comment_count: 0,
            id: "1",
            tags: [{ tagName: "client" }, { tagName: "server" }],
            gravatar: "",
            user_id: "1",
            username: "user",
            title:
              "What are your thoughts on Google Analytics vs other analytics platforms?",
            content:
              "Recently heard about Heap which seems pretty cool, but I’m not sure if it would really be valuable, or simply another tool that I need to check. We are not at the point of using HubSpot/Marketo yet so Heap’s free ",
            views: 0,
          },
        ].map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
        <Box className="questions" sx={{ pr: 3 }}></Box>
      </Box>
    </>
  );
};

Profil.propTypes = {
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps)(Profil);
