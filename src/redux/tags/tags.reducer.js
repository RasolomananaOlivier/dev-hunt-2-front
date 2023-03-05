import { GET_TAG, GET_TAGS, TAG_ERROR } from "./tags.types";

const initialState = {
  tags: [
    {
      tagName: "reactjs",
      description:
        ",Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, autem harum vero, nam sit officia corporis quo velit atque suscipit ducimus, provident nulla reiciendis laborum iusto consequuntur saepe. Tempora, voluptas?",
      created_at: "2023-01-12",
      posts_count: 10,
    },
    {
      tagName: "Math",
      description:
        ",Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, autem harum vero, nam sit officia corporis quo velit atque suscipit ducimus, provident nulla reiciendis laborum iusto consequuntur saepe. Tempora, voluptas?",
      created_at: "2023-01-12",
      posts_count: 10,
    },
  ],
  tag: {
    tagName: "reactjs",
    description:
      ",Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, autem harum vero, nam sit officia corporis quo velit atque suscipit ducimus, provident nulla reiciendis laborum iusto consequuntur saepe. Tempora, voluptas?",
    created_at: "2023-01-12",
    posts_count: 10,
  },
  loading: true,
  redirect: false,
  error: {},
};

export default function tags(state = initialState, action) {
  switch (action.type) {
    case GET_TAG:
      return {
        ...state,
        tag: action.payload,
        loading: false,
        redirect: false,
      };
    case GET_TAGS:
      return {
        ...state,
        tags: action.payload,
        loading: false,
        redirect: false,
      };
    case TAG_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        redirect: true,
      };
    default:
      return state;
  }
}
