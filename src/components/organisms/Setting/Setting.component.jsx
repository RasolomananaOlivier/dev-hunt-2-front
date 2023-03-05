import { Box, styled, Tab, Tabs } from "@mui/material";
import React from "react";
import TabSection from "./TabBody/TabSection";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#2bff2b",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#2bff2b !important",
      backgroundColor: "#323741 !important",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#fff",
    },
  })
);

export default function SettingPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Box display="flex" justifyContent="center">
      <Box sx={{ bgcolor: "#323741", width: "70%", pt: 10 }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="General Information" />
          <StyledTab label="Password" />
          <StyledTab label="Tags" />
        </StyledTabs>
        <TabSection value={value} />
      </Box>
    </Box>
  );
}
