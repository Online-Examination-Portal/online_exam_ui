export const courseContainer = {
  width: "80%",
  display: "flex",
  height: "100vh",
  bgcolor: "#F1FAFF",
  flexFlow: "column",
  position: "relative",
};

export const innerContainer = {
  positon: "absolute",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
};

export const headerContainer = {
  display: "flex",
  justifyContent: "space-between",
  padding: "28px 60px 0px 60px",
};
