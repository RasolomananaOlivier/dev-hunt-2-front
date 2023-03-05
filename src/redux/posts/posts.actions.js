import { setAlert } from "../alert/alert.actions";
import {
  GET_POSTS,
  GET_POST,
  GET_TAG_POSTS,
  POST_ERROR,
  DELETE_POST,
  ADD_POST,
  GET_POSTS_BY_USER_TAGS,
} from "./posts.types";
import {
  allPostsData,
  singlePostData,
  allTagPostsData,
  createSinglePost,
  deleteSinglePost,
  allPostsDataByUserTags,
  allPostAnswers,
  allPostTags,
} from "../../api/postsApis";
import { allAnswerCommets } from "../../api/answersApi";
import { profileData } from "../../api/usersApi";

// Get posts
export const getPosts = () => async (dispatch) => {
  // try {
  //   const res = await allPostsData();
  //   dispatch({
  //     type: GET_POSTS,
  //     payload: res.data.data,
  //   });
  // } catch (err) {
  //   dispatch(setAlert(err.response.data.message, "danger"));
  //   dispatch({
  //     type: POST_ERROR,
  //     payload: { msg: err.response.statusText, status: err.response.status },
  //   });
  // }
};

// Get posts based on user tags
export const getPostsByUserTags = () => async (dispatch) => {
  console.log("called");
  try {
    const res = await allPostsDataByUserTags();

    let questions = [];
    const questionsServer = res.data.data.questions;

    for (const question of questionsServer) {
      const answerResponse = await allPostAnswers(question.id);

      const answers = answerResponse.data.data.answers;
      const answerCount = answers.length;

      const userResponse = await profileData(question.userId);

      const {
        data: {
          data: { tags },
        },
      } = await allPostTags(question.id);

      console.log("====================================");
      console.log(answers, userResponse, tags);
      console.log("====================================");

      if (answerCount === 0) {
        questions.push({
          ...question,
          answer_count: answerCount,
          comment_count: 0,
          username: userResponse.data.data.user.name.full,
          gravatar: userResponse.data.data.user.imageUrl ?? "",
          tags,
        });
      } else {
        for (const answer of answers) {
          const commentResponse = await allAnswerCommets(
            question.id,
            answer.id
          );
          console.log("====================================");
          console.log("cr", commentResponse);
          console.log("====================================");
          // const comments = commentResponse.data.data.answers;
          // questions.push({
          //   ...question,
          //   answer_count: answerCount,
          //   comment_count: comments.length,
          // });
        }
      }
    }

    console.log("====================================");
    console.log("questions", questions);
    console.log("====================================");
    dispatch({
      type: GET_POSTS_BY_USER_TAGS,
      payload: questions,
    });
  } catch (err) {
    console.log("error", err);
    dispatch(setAlert(err.response.data.message, "danger"));

    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get post
export const getPost = (id) => async (dispatch) => {
  try {
    console.log("called");
    const {
      data: {
        data: { question },
      },
    } = await singlePostData(id);

    const answerResponse = await allPostAnswers(question.id);

    const answers = answerResponse.data.data.answers;
    const answerCount = answers.length;

    // const {data: {data : {}}} = await profileData(question.userId);

    const payload = {
      created_at: question.createdAt,
      answer_count: answerCount,
      comment_count: 0,
      id: question.id,
      tags: [{ tag_name: "client" }, { tag_name: "server" }],
      gravatar: "",
      user_id: question.userId,
      username: "user",
      title: question.title,
      body: question.content,
      views: 0,
    };
    dispatch({
      type: GET_POST,
      payload,
    });
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "danger"));
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getTagPosts = (tagName) => async (dispatch) => {
  try {
    const res = await allTagPostsData(tagName);

    console.log(res);

    dispatch({
      type: GET_TAG_POSTS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "danger"));

    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add post
export const addPost = (formData) => async (dispatch) => {
  try {
    const res = await createSinglePost(formData);
    const payload = {
      created_at: "",
      answer_count: 0,
      comment_count: 0,
      id: res.data.data.question.id,
      tags: [{ tagName: "client" }, { tagName: "server" }],
      gravatar: "",
      user_id: res.data.data.question.userId,
      username: "user",
      title: res.data.data.question.title,
      body: res.data.data.question.content,
      views: 0,
    };

    dispatch({
      type: ADD_POST,
      payload,
    });

    // dispatch(setAlert(res.data.message, "success"));

    // dispatch(getPosts());
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "danger"));

    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await deleteSinglePost(id);

    dispatch({
      type: DELETE_POST,
      payload: id,
    });

    dispatch(setAlert(res.data.message, "success"));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "danger"));

    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
