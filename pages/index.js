import { Box, Typography } from "@mui/material";
import Head from "next/head";
import Movie from "../components/Movie";
import SearchFilter from "../components/SearchFilter";
import styles from "../styles/Home.module.css";
import { fetchApi } from "../utils/fetchApi";
import noResult from "../assets/images/noresult.svg";
import Image from "next/image";

export default function Home({ movies, errors }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SearchFilter />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            mt: "5rem",
          }}
        >
          {movies?.map((movie) => (
            <Movie key={movie.id} data={movie} />
          ))}

          {errors && <p>{errors}</p>}
        </Box>
        {movies?.length === 0 ||
          (movies === null && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Image alt="no result" src={noResult} />
              <Typography>NO result found</Typography>
            </Box>
          ))}
      </main>

      <footer className={styles.footer}>© Movie App </footer>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const search = query.search || "avengers";

  const data = await fetchApi(`${search}`);

  return {
    props: {
      movies: data.results,
      errors: data.errorMessage,
    },
  };
}
