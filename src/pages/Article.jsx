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
} from "@chakra-ui/react";

import { ChatIcon, ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [votes, setVotes] = useState();
  useEffect(() => {
    axios
      .get(`https://nc-news-czlb.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        setArticle(response.data);
        setVotes(response.data.votes);
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

  return (
    <>
      <Navbar />
      <Container maxW="3xl">
        <Card bg="tomato" marginBottom="30px">
          <CardHeader>
            <Image src={article.article_img_url} borderRadius="lg" />
          </CardHeader>
          <CardBody>
            <Heading>{article.title}</Heading>
            <Text>{article.body}</Text>
          </CardBody>
          <CardFooter>
            <ButtonGroup isAttached>
              <IconButton onClick={handleVoteIncrease} icon={<ArrowUpIcon />} />
              <Box bg="gray.100" w="40px">
                <Center>{votes}</Center>
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
};

export default Article;
