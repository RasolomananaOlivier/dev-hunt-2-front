import { Box, Typography } from "@mui/material";
import React from "react";
import PostItemComponent from "../molecules/PostItem/PostItem.component";

export default function PagesChalenges() {
  return (
    <>
      <Box
        id="mainbar"
        className="homepages fc-black-800"
        sx={{ bgcolor: "#323741" }}
      >
        <Typography
          variant="h4"
          pl={1}
          sx={{
            color: "#FFF",
            borderBottom: "2px solid hsl(47deg 30% 31%)",
            marginBottom: "8px",
            paddingBottom: "4px",
          }}
        >
          Chalenges
        </Typography>
        <Typography>
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
              title: "Creer un application plus que stack overflow?",
              content: "charge : application privee chalenges ,notification",
              views: 0,
            },
          ].map((post, index) => (
            <PostItemComponent key={index} post={post} />
          ))}
        </Typography>
      </Box>
    </>
  );
}
