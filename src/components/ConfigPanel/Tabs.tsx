import FormatPaintRoundedIcon from "@mui/icons-material/FormatPaintRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";
import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled, useMediaQuery, useTheme } from "@mui/system";
import * as React from "react";
import { useTranslation } from "react-i18next";
import ContentConfig from "./ContentConfig";
import ResetSection from "./ResetSection";
import ThemeConfig from "./ThemeConfig";

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
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      width="100%"
      sx={{
        overflowY: "scroll",
        pl: 3,
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

const CustomTab = styled(Tab)({
  borderRadius: 5,
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
  const { t } = useTranslation("translation", {
    keyPrefix: "other.configPanel",
  });
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack direction="row" width="100%" height="100%">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleTabChange}
        sx={{
          minWidth: "fit-content",
          "& .MuiTabs-scroller": {
            pr: 1,
          },
          "& .MuiTab-root": {
            minWidth: "unset",
          },
          "& .MuiTabs-indicator": {
            width: "3px",
            borderRadius: 5,
          },
        }}
      >
        <CustomTab
          icon={<FormatPaintRoundedIcon />}
          label={mobile ? undefined : t("theme.title")}
          {...a11yProps(0)}
        />
        <CustomTab
          icon={<FormatQuoteRoundedIcon />}
          label={mobile ? undefined : t("content.title")}
          {...a11yProps(1)}
        />
        <CustomTab
          icon={<RestartAltRoundedIcon />}
          label={mobile ? undefined : t("reset.title")}
          {...a11yProps(2)}
        />
      </Tabs>
      <TabPanel title={t("theme.title")} value={value} index={0}>
        <ThemeConfig />
      </TabPanel>
      <TabPanel title={t("content.title")} value={value} index={1}>
        <ContentConfig />
      </TabPanel>
      <TabPanel title={t("reset.title")} value={value} index={2}>
        <ResetSection />
      </TabPanel>
    </Stack>
  );
}
