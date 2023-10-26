import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import "../assets/Article.css";
import CommentsCard from "../components/CommentsCard";
import {
  Container,
  Heading,
  Button,
  Card,
  CardHeader,
  CardBody,
  Image,
  IconButton,
  ButtonGroup,
  Text,
  CardFooter,
  Box,
  Center,
  CircularProgress,
  Flex,
} from "@chakra-ui/react";

import { ChatIcon, ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [votes, setVotes] = useState();
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://nc-news-czlb.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        setArticle(response.data);
        setVotes(response.data.votes);
        setIsLoading(false);
      });
  }, []);

  const handleVoteIncrease = () => {
    setVotes((currentVotes) => currentVotes + 1);
    axios.patch(
      `https://nc-news-czlb.onrender.com/api/articles/${article_id}`,
      {
        inc_votes: 1,
      }
    );
  };

  const handleVoteDecrease = () => {
    setVotes((currentVotes) => currentVotes - 1);
    axios.patch(
      `https://nc-news-czlb.onrender.com/api/articles/${article_id}`,
      {
        inc_votes: -1,
      }
    );
  };
  if (loading) {
    return (
      <Flex
        width={"100vw"}
        height={"100vh"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Center>
          <CircularProgress
            isIndeterminate
            color="tomato"
            size="200px"
            thickness={"5px"}
          />
        </Center>
      </Flex>
    );
  }
  if (!loading) {
    return (
      <>
        <Navbar />
        <Container maxW="3xl">
          <Card bg="tomato" marginBottom="20px">
            <CardBody>
              <Image
                marginBottom="5px"
                src={article.article_img_url}
                borderRadius="lg"
              />
              <Heading>{article.title}</Heading>
              <Text>{article.body}</Text>
            </CardBody>
            <CardFooter>
              <ButtonGroup isAttached>
                <IconButton
                  onClick={handleVoteIncrease}
                  icon={<ArrowUpIcon />}
                />
                <Box bg="gray.100" w="40px">
                  <Center h="40px">{votes}</Center>
                </Box>
                <IconButton
                  onClick={handleVoteDecrease}
                  icon={<ArrowDownIcon />}
                />
              </ButtonGroup>
            </CardFooter>
          </Card>
          <CommentsCard />
        </Container>
      </>
    );
  }
};

export default Article;
