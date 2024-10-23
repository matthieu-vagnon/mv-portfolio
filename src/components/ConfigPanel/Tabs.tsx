import FormatPaintRoundedIcon from "@mui/icons-material/FormatPaintRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/system";
import * as React from "react";
import { useTheme } from "../../contexts/ThemeContext";

interface TabPanelProps {
  children?: React.ReactNode;
  title: string;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, title, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      width="100%"
      sx={{
        overflowY: "scroll",
      }}
      {...other}
    >
      {value === index && (
        <Stack
          direction="column"
          spacing={2}
          sx={{
            pt: 1,
          }}
        >
          <Typography variant="h4">{title}</Typography>
          <Stack direction="column" spacing={2}>
            {children}
          </Stack>
        </Stack>
      )}
    </Box>
  );
}

interface ConfigFormElementProps {
  children?: React.ReactNode;
  title: string;
}
function ConfigFormElement(props: ConfigFormElementProps) {
  const { children, title, ...other } = props;

  return (
    <Stack direction="column" spacing={1} {...other}>
      <Typography variant="h5">{title}</Typography>
      <FormControl>{children}</FormControl>
    </Stack>
  );
}

const CustomTab = styled(Tab)({
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
  textTransform: "none",
});

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const { theme, setTheme } = useTheme();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleThemeChange = (e: SelectChangeEvent<string>) => {
    setTheme(e.target.value);
  };

  //   const handleAccentChange = (e: SelectChangeEvent<string>) => {};

  const handleLanguageChange = (e: SelectChangeEvent<string>) => {};

  return (
    <Stack direction="row" spacing={3} width="100%" height="100%">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleTabChange}
        sx={{
          borderRight: 1,
          borderColor: "divider",
          minWidth: "fit-content",
          "& .MuiTabs-indicator": {
            width: "3px",
            borderTopLeftRadius: 3,
            borderBottomLeftRadius: 3,
          },
        }}
      >
        <CustomTab
          icon={<FormatPaintRoundedIcon />}
          label="Theme"
          {...a11yProps(0)}
        />
        <CustomTab
          icon={<FormatQuoteRoundedIcon />}
          label="Content"
          {...a11yProps(1)}
        />
      </Tabs>
      <TabPanel title="Theme" value={value} index={0}>
        <ConfigFormElement title="Mode:">
          <Select value={theme} onChange={handleThemeChange}>
            <MenuItem value="system">System (default)</MenuItem>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
          </Select>
        </ConfigFormElement>
        <ConfigFormElement title="Accent:">
          <Select value="default">
            <MenuItem value="default">Default</MenuItem>
          </Select>
        </ConfigFormElement>
      </TabPanel>
      <TabPanel title="Content" value={value} index={1}>
        <ConfigFormElement title="Language:">
          <Select></Select>
        </ConfigFormElement>
      </TabPanel>
    </Stack>
  );
}