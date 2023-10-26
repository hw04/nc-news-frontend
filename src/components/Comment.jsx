import "../assets/Comment.css";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  Text,
  CardHeader,
  Flex,
  Heading,
  Box,
} from "@chakra-ui/react";

const Comment = ({ comment, loggedInUser, deleteComment }) => {
  const canDelete = comment.author === loggedInUser;

  return (
    <Card marginBottom="15px">
      <CardBody>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center">
            <Avatar />
            <Box>
              <Heading size="sm">{comment.author}</Heading>
              <Text color="blackAlpha.700">
                {new Date(comment.created_at).toUTCString()}
              </Text>
              <Text>{comment.body}</Text>
              {canDelete && (
                <Button size="xs" onClick={() => deleteComment(comment)}>
                  Delete
                </Button>
              )}
            </Box>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Comment;
