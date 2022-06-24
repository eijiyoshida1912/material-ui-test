import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import HelpIcon from "@mui/icons-material/Help";
import Box from "@mui/material/Box";
import NotificationBell from "../common/NotificationBell/NotificationBell";
import CommonButton from "../common/CommonButton/CommonButton";

function Header({ title }) {
  const headerStyles = {
    wrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#009be5",
      padding: "20px",
    },
    topRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "end",
      alignItems: "center",
      marginBottom: "20px",
      "*": {
        marginRight: "5px",
      },
    },
    middleRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      marginLeft: "320px",
    },
    link: {
      fontWeight: 500,
      color: "rgba(255, 255, 255, 0.7)",
      "&:hover": {
        color: "#fff",
        cursor: "pointer",
      },
    },
    webButton: {
      marginRight: "5px",
    },
    helpIcon: {},
  };
  return (
    <Box sx={headerStyles.wrapper}>
      <Box sx={headerStyles.topRow}>
        <Typography sx={headerStyles.link}>Go to docs</Typography>
        <NotificationBell iconColor="inherit" />
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
      </Box>
      <Box sx={headerStyles.middleRow}>
        <Typography variant="h1" color="inherit">
          {title}
        </Typography>
        <Box>
          <CommonButton sx={headerStyles.webButton} variant="outlined">
            Web setup
          </CommonButton>
          <Tooltip title="help">
            <IconButton color="inherit" sx={headerStyles.helpIcon}>
              <HelpIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
