import { date } from "../date";
import MoviesCard from "./MoviesCard";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import { MOVIEDB_IMAGES_URL } from "src/common/constants";
function MoviesList() {
  return (
    <>
      <Heading textAlign="center " size="xl" mb={5}>
        Trending Movies{" "}
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 4 }} spacing={4}>
        {date.results.map((movie) => (
          <MoviesCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={`${MOVIEDB_IMAGES_URL}/${movie.poster_path}`}
            overview={movie.overview}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default MoviesList;
