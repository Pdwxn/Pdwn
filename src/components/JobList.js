import React from "react";
import PropTypes from "prop-types";
import { useLanguage } from "../components/LanguageContext";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const { language } = useLanguage();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Ticsa: {
      jobTitle: language === "es" ? "Desarrollador Full-Stack @" : "Full-Stack Developer @",
      key: "Ticsa",
      duration: "FEB 2024 - JUL 2024",
      desc: [
        language === "es"
          ? "Desarrollé y fui parte integral de la sección de RRHH de la WebApp tipo CRM, creando componentes reutilizables para esta misma al igual que scripts automaticos para la creación de documentos."
          : "I developed and was an integral part of the HR section of the CRM-type WebApp, creating reusable components and automated scripts for document creation.",
        language === "es"
          ? "Creación de roles y migración de datos entre la DB para la actualización de los mismos."
          : "Created roles and migrated data between the DB for their update."
      ]
    },
    Dropsher: {
      jobTitle: language === "es" ? "Desarrollador Front-End @" : "Front-End Developer @",
      key: "Dropsher",
      duration: "NOV 2022 - FEB 2023",
      desc: [
        language === "es"
          ? "Desarrollé parte de la interfaz gráfica de la WebApp basada en la tecnología Drag & Drop."
          : "I developed part of the graphical interface of the WebApp based on Drag & Drop technology.",
        language === "es"
          ? "Colaboré en la creación y la optimización de los componentes junto a Seniors del área creando una interfaz receptiva y responsiva para el usuario."
          : "Collaborated in the creation and optimization of components with seniors in the area, creating a responsive and user-friendly interface."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i} key={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">{experienceItems[key]["duration"]}</div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`} key={i}>
                  <li>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;