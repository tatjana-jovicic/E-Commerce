import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const TextRating = ({ rating }) => {
  return (
    <Box
      sx={{
        width: 100,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="text-feedback"
        value={rating}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: "17px" }} />}
        icon={
          <StarIcon
            style={{ fontSize: "17px", backgroundColor: "lightgray" }}
          />
        }
      />
    </Box>
  );
};

export default TextRating;
