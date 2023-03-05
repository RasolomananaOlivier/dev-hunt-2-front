import React, { Fragment, useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPost } from "../../../redux/posts/posts.actions";
import MarkdownEditor from "../../../components/organisms/MarkdownEditor/MarkdownEditor.component";
import { badWordsFilter } from "../../../utils/censorBadWords";

import "./AskForm.styles.scss";
import { AppTagsInput } from "../../../components/Tags";
import { useHistory } from "react-router-dom";

const AskForm = ({ addPost }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tagName: [],
  });
  const setTagName = (array) => {
    setFormData({ ...formData, tagName: array });
  };

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    setFormErrors({});
  }, [formData]);

  const markdownEditorRef = useRef(null);

  const { title, content, tagName } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateFormData = () => {
    const errors = [];

    const tags = formData.tagName
      .split(",")
      .filter(Boolean)
      .map((tag) => tag.trim());

    tags.forEach((tag) => {
      if (tag.length > 25) {
        errors.push({
          tagName: `A tag name can't be longer than 25 characters.`,
        });
      } else if (/[^a-zA-Z]/.test(tag)) {
        errors.push({
          tagName: `${tag} tag must contain English alphabets only (no spaces).`,
        });
      }
    });

    if (badWordsFilter.isProfane(formData.tagName)) {
      errors.push({ tagName: "Inappropriate words are not allowed." });
    }

    errors
      .reverse()
      .forEach((err) => setFormErrors((prev) => ({ ...prev, ...err })));

    return errors;
  };

  const history = useHistory();
  const onSubmit = async (e) => {
    e.preventDefault();
    // const errors = validateFormData();

    // if there are errors, don't submit
    // if (errors.length > 0) return;

    addPost({ title, content, tags: tagName });

    setFormData({
      title: "",
      content: "",
      tags: "",
    });
    markdownEditorRef.current.cleanEditorState();

    history.push("/");
  };

  const updateConvertedContent = (htmlConvertedContent) => {
    setFormData({ ...formData, content: htmlConvertedContent });
  };

  return (
    <Fragment>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="question-form p16 s-card">
          <div className="question-layout">
            <div className="title-grid">
              <label className="form-label s-label">
                Title
                <p className="title-desc fw-normal fs-caption">
                  Be specific and imagine you’re asking a question to another
                  person
                </p>
              </label>
              <input
                className="title-input s-input"
                type="text"
                name="title"
                value={title}
                onChange={(e) => onChange(e)}
                id="title"
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                required
              />
            </div>
            <div className="body-grid">
              <label className="form-label s-label fc-black-800">
                Body
                <p className="body-desc fw-normal fs-caption fc-black-800">
                  Include all the information someone would need to answer your
                  question
                </p>
              </label>
              <div className="s-textarea rich-text-editor-container">
                <MarkdownEditor
                  ref={markdownEditorRef}
                  onChange={updateConvertedContent}
                />
              </div>
            </div>
            <div className="tag-grid">
              <label className="form-label s-label">
                Tag Name
                <p className="tag-desc fw-normal fs-caption">
                  Add up to 5 tags to describe what your question is about
                </p>
              </label>
              <AppTagsInput array={formData.tagName} setArray={setTagName} />
              {/* <input
                className="tag-input s-input"
                type="text"
                name="tagName"
                value={tagName}
                onChange={(e) => onChange(e)}
                id="tagName"
                placeholder="e.g. (ajax, django, string)"
                required
              /> */}
              <p className="fc-error fw-bold ml8 mt4">{formErrors.tagName}</p>
            </div>
          </div>
        </div>
        <div className="post-button mt32">
          <button
            className="s-btn s-btn__primary"
            id="submit-button"
            name="submit-button"
          >
            Post your question
          </button>
        </div>
      </form>
    </Fragment>
  );
};

AskForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(AskForm);
