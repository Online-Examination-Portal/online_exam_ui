export const signupOuterContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "40%",
  height: "90%",
  overflow: "auto",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
};

export const signupInnerContainer = {
  display: "flex",
  flexDirection: "column",
  width: "80%",
};

export const nameFieldBox = {
  mb: "30px",
  display: "flex",
  alignItems: "center",
};

export const nameFieldLabel = {
  color: "black",
  fontSize: "14px",
  display: "flex",
  flexDirection: "column",
};

export const nameTextField = {
  bgcolor: "white",
  borderRadius: "6px",
};

export const inputLabels = {
  color: "black",
  fontSize: "14px",
};

export const textFields = {
  mb: "30px",
  bgcolor: "white",
  borderRadius: "6px",
};

export const SignUpButton = {
  color: "white",
  backgroundColor: "#8AC926",
  "&:hover": {
    backgroundColor: "#4BB543",
  },
  fontFamily: "Inter-Regular",
};
export const typography = {
  mt: "24px",
  color: "black",
};

export const LoginButton = {
  color: "black",
  fontFamily: "Inter-Regular",
};
