import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";

const Alert = ({ color, message, removeAlert, list }) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert()
        }, 3000)
        return () => clearTimeout(timeout)
    }, [list])
  return (
    <Box
      sx={{
        background: color,
      }}
      marginTop={3}
    >
      <Typography padding={1} variant="body1">
        {message}
      </Typography>
    </Box>
  );
};

export default Alert;
