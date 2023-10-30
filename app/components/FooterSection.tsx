import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import IconFax from "@icons/icon-fax.svg";
import IconMapLocation from "@icons/icon-map_location_dot.svg";
import FactoryIcon from "@mui/icons-material/Factory";
import IconArrowRight from "@icons/icons-arrow-left.svg";
import { IFooterSection } from "types";

interface ICta {
  cta: string;
  email: string;
}

const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const CtaButton = ({ cta, email }: ICta) => (
  <Button
    variant="contained"
    color="success"
    sx={{
      fontSize: "24px",
      padding: "10px 24px",
      marginX: "auto",
      marginTop: 6.875,
      marginBottom: 7.5,
    }}
    onClick={() =>
      openInNewTab(`mailto:${email}?subject=Hello&body=what you wanna ask us`)
    }
    endIcon={<IconArrowRight />}
  >
    {cta}
  </Button>
);

export default function FooterSection({
  CFooterSection,
}: {
  CFooterSection: IFooterSection;
}) {
  const { title, office, phone, fax, workHour, email, cta } = CFooterSection;
  return (
    <React.Fragment>
      <Grid
        id="contactUs"
        container
        justifyContent="center"
        alignItems="center"
        bgcolor="#07451A"
      >
        <Grid
          item
          maxWidth="xl"
          xs={12}
          sx={{
            backgroundImage: `url(/images/footer-map.png)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Grid container maxWidth="lg" mx="auto" py={15}>
            <Grid
              item
              xs={12}
              sm={6}
              padding={7.5}
              sx={{
                background: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(7px)",
              }}
            >
              <Typography variant="h2" color="common.white" mb={3.75}>
                {title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="common.white"
                display="flex"
                sx={{ alignItems: "center" }}
                mb={2}
              >
                <IconMapLocation />
                <Typography variant="inherit" ml={3} component="span">
                  {office}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color="common.white"
                display="flex"
                sx={{ alignItems: "center" }}
                mb={2}
              >
                <PhoneIcon />
                <Typography variant="inherit" ml={3} component="span">
                  {phone}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color="common.white"
                display="flex"
                sx={{ alignItems: "center" }}
                mb={2}
              >
                <IconFax />
                <Typography variant="inherit" ml={3} component="span">
                  {fax}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color="common.white"
                display="flex"
                sx={{ alignItems: "center" }}
                mb={2}
              >
                <WatchLaterIcon />
                <Typography variant="inherit" ml={3} component="span">
                  {workHour}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color="common.white"
                display="flex"
                sx={{ alignItems: "center" }}
              >
                <EmailIcon />
                <Typography variant="inherit" ml={3} component="span">
                  {email}
                </Typography>
              </Typography>
            </Grid>
            <Grid item display={{ sm: "none" }} mx="auto">
              <CtaButton cta={cta} email={email} />
            </Grid>
            <Grid
              item
              xs={6}
              display={{ xs: "none", sm: "flex" }}
              sx={{ flexDirection: "column" }}
            >
              <Box
                mx="auto"
                mt="auto"
                sx={{
                  cursor: "pointer",
                  color: "#51FE28",
                  position: "relative",
                  display: "block",
                  fontSize: 0,
                  width: "96px",
                  height: "96px",
                  "& div": {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "96px",
                    height: "96px",
                    borderRadius: "100%",
                    opacity: 0,
                    boxSizing: "border-box",
                    display: "inline-block",
                    float: "none",
                    backgroundColor: "currentcolor",
                    border: "0 solid currentcolor",
                    animation: "ball-scale-multiple 1s 0s linear infinite",
                  },
                  "& div:nth-of-type(2)": {
                    animationDelay: ".2s",
                  },
                  "& div:nth-of-type(3)": {
                    animationDelay: ".4s",
                  },
                  "@keyframes ball-scale-multiple": {
                    "0%": {
                      opacity: 0,
                      transform: "scale(0)",
                    },
                    "5%": {
                      opacity: 0.75,
                    },
                    "100%": {
                      opacity: 0,
                      transform: "scale(1)",
                    },
                  },
                }}
                onClick={() =>
                  openInNewTab("https://goo.gl/maps/sMFdpi6QEi2pxMwB9")
                }
              >
                <div></div>
                <div></div>
                <div></div>
              </Box>
              <CtaButton cta={cta} email={email} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item maxWidth="xl" xs={12} pt={3} pb={2}>
          <Typography variant="body1" color="common.white" textAlign="center">
            Copyright © 2019 GAMA Green-Energy Technology Co., Ltd., All Right
            Reserved.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
