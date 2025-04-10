import { useState } from "react";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CollapsibleList({
  title,
  items,
  visibleCount = 5,
}: {
  title: string;
  items: string[];
  visibleCount?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = items.slice(0, visibleCount);
  const hiddenItems = items.slice(visibleCount);

  return (
    <Box sx={{ mt: 1 }}>
      <Typography fontWeight={600}>{title}</Typography>
      <ul style={{ paddingLeft: "1rem", marginLeft: 0 }}>
        {visibleItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {hiddenItems.length > 0 && (
        <>
          <IconButton
            onClick={() => setExpanded(!expanded)}
            sx={{
              ml: 1,
              mt: -1,
              transition: "transform 0.3s ease",
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            }}
            size="small"
          >
            <ExpandMoreIcon />
          </IconButton>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <ul style={{ paddingLeft: "1rem", marginLeft: 0 }}>
              {hiddenItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Collapse>
        </>
      )}
    </Box>
  );
}
