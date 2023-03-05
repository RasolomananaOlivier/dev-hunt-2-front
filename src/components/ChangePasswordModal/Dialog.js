import { Dialog, DialogContent, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { object, ref, string } from "yup";
import { Input, Typography, Slide } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { Button } from "@mui/material";
import { Paper } from "@mui/material";
import Spinner from "./Spinner";
import Alert from "./Alert";
import axios from "axios";
import { changePass } from "../../api/urls";
import Image from "../../assets/change-pwd.jpg";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const ChangePassword = ({
  auth: {
    user: { role },
  },
  open,
  setOpen,
  setTagsOpen,
}) => {
  const handleModalClose = () => {
    setPassChangeSuccess(false);
  };
  const onClick = () => {
    setPassChangeSuccess(false);
    //check the user tags
  };
  const handleSubmit = ({
    currentPass,
    newPass,
    confirmPass,
    setSubmitting,
    resetForm,
  }) => {
    // fake async login
    setTimeout(async () => {
      setSubmitting(false);
      setPassChangeSuccess(true);

      resetForm();
    }, 1000);
    // reset password
    axios
      .post(changePass, {
        CurrentPassWord: currentPass,
        password: newPass,
        passwordValidation: newPass,
      })
      .then((res) => {
        if (res.data) {
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSkip = () => {
    setOpen(false);
    ///check the user tags
    setTagsOpen(true);
  };

  const location = useLocation();
  useEffect(() => {
    const token = location;
    console.log(token);
  }, []);

  const [passChangeSuccess, setPassChangeSuccess] = useState(false);
  return (
    <Dialog
      open={open}
      transition={Transition}
      keepMounted
      fullWidth
      maxWidth={"md"}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <Grid container>
        <Grid xs={0} md={6}>
          <Box sx={{ bgcolor: "#1A1C19", position: "relative" }}>
            <Box position="relative">
              <Box
                position="absolute"
                top={150}
                display="flex"
                flexDirection="column"
                gap={2}
                sx={{ px: 8 }}
              >
                <Typography color="white" variant="h3" fontWeight="bold">
                  It's important that you change your password!
                </Typography>
              </Box>
            </Box>
            <img src={Image} alt="" width={"100%"} height={430} />
          </Box>
        </Grid>
        <Grid xs={12} md={6}>
          <Formik
            initialValues={{
              newPass: "",
              confirmPass: "",
            }}
            validationSchema={object().shape({
              currentPass: string().required("Current password is required"),
              newPass: string().required("New password is required"),
              confirmPass: string()
                .oneOf([ref("newPass")], "Passwords do not match")
                .required("Password is required"),
            })}
            onSubmit={(
              { currentPass, newPass, confirmPass },
              { setSubmitting, resetForm }
            ) =>
              handleSubmit({
                currentPass,
                newPass,
                confirmPass,
                setSubmitting,
                resetForm,
              })
            }
            render={(props) => {
              const {
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                isValid,
                isSubmitting,
              } = props;
              return isSubmitting ? (
                <Spinner />
              ) : (
                <Paper
                  sx={{ width: "100%", boxShadow: "none", p: 5 }}
                  elevation={10}
                >
                  <form onSubmit={handleSubmit}>
                    <Stack>
                      <FormControl
                        fullWidth
                        margin="dense"
                        error={Boolean(touched.newPass && errors.newPass)}
                      >
                        <InputLabel
                          htmlFor="password-new"
                          error={Boolean(touched.newPass && errors.newPass)}
                        >
                          {"New Password"}
                        </InputLabel>
                        <Input
                          id="password-new"
                          name="newPass"
                          type="password"
                          value={values.newPass}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(touched.newPass && errors.newPass)}
                        />
                        <FormHelperText
                          error={Boolean(touched.newPass && errors.newPass)}
                        >
                          {touched.newPass && errors.newPass
                            ? errors.newPass
                            : ""}
                        </FormHelperText>
                      </FormControl>
                      <FormControl
                        fullWidth
                        margin="dense"
                        error={Boolean(
                          touched.confirmPass && errors.confirmPass
                        )}
                      >
                        <InputLabel
                          htmlFor="password-confirm"
                          error={Boolean(
                            touched.confirmPass && errors.confirmPass
                          )}
                        >
                          {"Confirm Password"}
                        </InputLabel>
                        <Input
                          id="password-confirm"
                          name="confirmPass"
                          type="password"
                          value={values.confirmPass}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(
                            touched.confirmPass && errors.confirmPass
                          )}
                        />
                        <FormHelperText
                          error={Boolean(
                            touched.confirmPass && errors.confirmPass
                          )}
                        >
                          {touched.confirmPass && errors.confirmPass
                            ? errors.confirmPass
                            : ""}
                        </FormHelperText>
                      </FormControl>
                      <Button
                        type="submit"
                        color="success"
                        variant="contained"
                        disabled={Boolean(!isValid || isSubmitting)}
                        sx={{ my: 2 }}
                      >
                        {"Reset Password"}
                      </Button>
                      <Button onClick={handleSkip}>Skip</Button>
                    </Stack>
                  </form>
                  <Alert
                    isOpen={passChangeSuccess}
                    onClose={handleModalClose}
                    handleSubmit={onClick}
                    title="Password Reset"
                    text="Your password was changed successfully"
                    submitButtonText="Done"
                  />
                </Paper>
              );
            }}
          />
        </Grid>
      </Grid>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(ChangePassword);
