import { Box, TextField } from "@mui/material";
import { useRouter } from "next/router";

const SearchFilter = () => {
  const router = useRouter();
  let searchTimeToken = 0;

  const searchProperties = (filterValue) => {
    const path = router.pathname;
    const { query } = router;
    clearTimeout(searchTimeToken);

    searchTimeToken = setTimeout(() => {
      query.search = filterValue;
      router.push({ pathname: path, query: query });
    }, 1500);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "50px",
        gap: "1rem",
      }}
    >
      <TextField
        label="Search Movie"
        name="search"
        onKeyUp={(e) => searchProperties(e.target.value)}
      />
    </Box>
  );
};

export default SearchFilter;
