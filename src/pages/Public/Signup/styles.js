export const signupOuterContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  height: "100%",
  overflow: "auto",
  scrollbarWidth: "none",
  zIndex: 2,

  "&::-webkit-scrollbar": {
    // display: "none",
  },
};

export const signupInnerContainer = {
  display: "flex",
  flexDirection: "column",
  width: "40%",
};

export const nameFieldBox = {
  mb: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const nameFieldLabel = {
  color: "black",
  fontSize: "14px",
  display: "flex",
  flexDirection: "column",
  width: "45%",
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
