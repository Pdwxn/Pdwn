import React from "react";
import PropTypes from "prop-types";
import { useLanguage } from "../components/LanguageContext";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FadeInSection from "./FadeInSection";
import es from "../locales/es";
import en from "../locales/en";

function TabPanel(props) {
  const { children, value, index, isMobile, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={isMobile ? `full-width-tabpanel-${index}` : `vertical-tabpanel-${index}`}
      aria-labelledby={isMobile ? `full-width-tab-${index}` : `vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} className="joblist-panel">
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  isMobile: PropTypes.bool,
};

function a11yProps(index, isMobile) {
  return isMobile
    ? {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
      }
    : {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
      };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "flex-start",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: 180,
  },
}));

const JobList = () => {
  const { language } = useLanguage();
  const texts = language === "es" ? es.experience : en.experience;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const experienceItems = [
    {
      key: "Ticsa",
      ...texts.ticsa,
    },
    {
      key: "Dropsher",
      ...texts.dropsher,
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={isMobile ? "horizontal" : "vertical"}
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        className={classes.tabs + (isMobile ? " experience-tabs-mobile" : "")}
      >
        {experienceItems.map((item, i) => (
          <Tab key={item.key} label={item.key} {...a11yProps(i, isMobile)} />
        ))}
      </Tabs>

      <div className="joblist-panels">
        {experienceItems.map((item, i) => (
          <TabPanel value={value} index={i} isMobile={isMobile} key={item.key}>
            <span className="joblist-job-title">{item.role}</span>
            <div className="joblist-duration">{item.duration}</div>
            <ul className="job-description">
              {item.bullets.map((descItem, bulletIndex) => (
                <FadeInSection delay={`${(bulletIndex + 1) * 100}ms`} key={descItem}>
                  <li>{descItem}</li>
                </FadeInSection>
              ))}
            </ul>
          </TabPanel>
        ))}
      </div>
    </div>
  );
};

export default JobList;
