import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function MoviesCard({ id, title, poster, overview }) {
  return (
    <Card borderRadius={30} bg="rgb(255,255,255)" shadow="2xl">
      <CardHeader pb={0}>
        <Image
          m="auto"
          src={poster}
          alt={`${title}'s poster`}
          borderRadius="lg"
          mb=""
        />
      </CardHeader>
      <CardBody minH={130}>
        <Heading size="sm" pb={2}>
          {title}
        </Heading>
        <Text color="gray.700">{overview.substring(0, 50) + "..."}</Text>
      </CardBody>

      <CardFooter pt={2}>
        <Link to={`/movies/${id}`} style={{ width: "100%" }}>
          <Button m="auto" bg="green.300" color="white" w="100%">
            View Joke & More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default MoviesCard;
