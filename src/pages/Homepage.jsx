import axios from "axios";
import "../assets/Homepage.css";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Sorted from "../components/Sorted";
import {
  Heading,
  Center,
  Container,
  Flex,
  CircularProgress,
  SimpleGrid,
  List,
  ListItem,
  Card,
  Image,
  CardBody,
  CardFooter,
  HStack,
  Box,
  Spacer,
  IconButton,
  ButtonGroup,
  Button,
  Select,
} from "@chakra-ui/react";

import {
  ChatIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  StarIcon,
} from "@chakra-ui/icons";

const Homepage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://nc-news-czlb.onrender.com/api/articles")
      .then((response) => {
        setArticles(response.data);
        setIsLoading(false);
      });
  }, []);

  const sortByDate = () => {
    let sortedArticles = articles.sort((a, b) => {
      let firstDate = new Date(a.created_at);
      let secondDate = new Date(b.created_at);
      if (firstDate > secondDate) {
        return -1;
      }
      if (firstDate < secondDate) {
        return 1;
      }
    });
    setArticles([...sortedArticles]);
  };

  const sortByCommentHigh = () => {
    let sortedArticles = articles.sort((a, b) => {
      return b.comment_count - a.comment_count;
    });
    setArticles([...sortedArticles]);
  };

  const sortByCommentLow = () => {
    let sortedArticles = articles.sort((a, b) => {
      return a.comment_count - b.comment_count;
    });
    setArticles([...sortedArticles]);
  };

  const sortByVotesHigh = () => {
    let sortedArticles = articles.sort((a, b) => {
      return b.votes - a.votes;
    });
    setArticles([...sortedArticles]);
  };

  const sortByVotesLow = () => {
    let sortedArticles = articles.sort((a, b) => {
      return a.votes - b.votes;
    });
    setArticles([...sortedArticles]);
  };

  const loggedInUser = "grumpy19";

  console.log(articles);

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
        <Navbar loggedInUser={loggedInUser} />
        <Container maxW="8xl">
          <Heading textAlign="center">Welcome to NC News™</Heading>
          <Flex marginBottom="50px">
            <Select maxWidth="150px">
              <option value="all">All topics</option>
              <option>Topic 1</option>
            </Select>
            <Spacer />
            <Sorted
              sortByDate={sortByDate}
              sortByCommentHigh={sortByCommentHigh}
              sortByCommentLow={sortByCommentLow}
              sortByVotesHigh={sortByVotesHigh}
              sortByVotesLow={sortByVotesLow}
              marginBottom="25px"
            />
          </Flex>
          <List>
            <SimpleGrid columns="3" spacing="20px" minChildWidth="400px">
              {articles.map((article) => (
                <ListItem key={article.article_id} marginBottom="25px">
                  <Card bg="tomato">
                    <Link to={`/article/${article.article_id}`}>
                      <CardBody>
                        <Image
                          marginBottom="5px"
                          src={article.article_img_url}
                          borderRadius="lg"
                        />
                        <Heading size="lg">{article.title}</Heading>
                        <Heading
                          size="md"
                          color="blackAlpha.700"
                          marginBottom="20px"
                        >{`${
                          article.topic.slice(0, 1).toUpperCase() +
                          article.topic.slice(1)
                        }`}</Heading>
                        <Heading size="sm">{article.author}</Heading>
                        <Box>{new Date(article.created_at).toUTCString()}</Box>
                      </CardBody>
                    </Link>
                    <CardFooter>
                      <Box w="50px" bg="gray.100" borderRadius="md">
                        <Center h="30px">
                          <ArrowUpIcon marginRight="7px" />
                          {article.votes}
                        </Center>
                      </Box>
                      <Spacer />
                      <Box w="150px" bg="gray.100" borderRadius="md">
                        <Center h="28px">
                          {article.comment_count} comments
                        </Center>
                      </Box>
                    </CardFooter>
                  </Card>
                </ListItem>
              ))}
            </SimpleGrid>
          </List>
        </Container>
      </>
    );
  }
};

export default Homepage;
