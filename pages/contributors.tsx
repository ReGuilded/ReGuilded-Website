import React from "react";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
  Text,
  IconButton,
  chakra,
  Stack,
  Badge,
  Grid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import { isIndexSignatureDeclaration } from "typescript";
import { FaGithub } from "react-icons/fa";

import { getProfilePicture } from "../utils/getProfilePicture";
import { core } from "../utils/people";

export default async function Contributors() {


  return (
    <>
      <Box
        mx={{ base: 5, md: "6rem", lg: "10rem" }}
        mt={{ base: "1rem", md: "2rem" }}
      >
        <Heading textAlign={{ base: "center", lg: "left" }}>Core</Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          mt={3}
          gap={3}
        >
          {core.map((developer, index) => {
            return (
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                key={index}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  alt={developer.name}
                />

                <Stack>
                  <CardBody>
                    <Heading size="lg">{developer.name}</Heading>

                    <Text py="2">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Minima, aperiam.
                    </Text>

                    <Box display="flex" mt={2} gap={2}>
                      {developer.titles.map((title, index) => (
                        <Badge key={index} colorScheme="red">
                          {title}
                        </Badge>
                      ))}
                    </Box>
                  </CardBody>

                  <CardFooter>
                    <Button leftIcon={<FaGithub />}>GitHub</Button>
                  </CardFooter>
                </Stack>
              </Card>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
