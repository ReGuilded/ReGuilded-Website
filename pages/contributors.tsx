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
import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

export default function Contributors({ data }: any) {
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
          {data.coreDevelopers.map((developer: any, index: any) => (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              key={index}
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={developer.profilePicture}
                alt={developer.name}
              />

              <Stack>
                <CardBody>
                  <Heading size="lg">{developer.name}</Heading>

                  <Text py="2">
                    {developer.bio ? developer.bio : "No description provided"}
                  </Text>

                  <Box display="flex" mt={2} gap={2}>
                    {developer.titles.map((title: any, index: any) => (
                      <Badge key={index} colorScheme="red">
                        {title}
                      </Badge>
                    ))}
                  </Box>
                </CardBody>

                <CardFooter display="flex" gap="2">
                  {developer.github ? (
                    <Button
                      leftIcon={<FaGithub />}
                      as="a"
                      href={`https://github.com/${developer.github}`}
                    >
                      GitHub
                    </Button>
                  ) : (
                    <></>
                  )}
                  {developer.twitter ? (
                    <Button
                      leftIcon={<BsTwitter />}
                      as="a"
                      href={`https://twitter.com/${developer.github}`}
                    >
                      Twitter
                    </Button>
                  ) : (
                    <></>
                  )}
                </CardFooter>
              </Stack>
            </Card>
          ))}
        </Grid>
        <Heading mt={10} textAlign={{ base: "center", lg: "left" }}>
          Contributors
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          mt={3}
          gap={3}
        >
          {data.contributors.map((developer: any, index: any) => (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              key={index}
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={developer.profilePicture}
                alt={developer.name}
              />

              <Stack>
                <CardBody>
                  <Heading size="lg">{developer.name}</Heading>

                  <Text py="2">
                    {developer.bio ? developer.bio : "No description provided"}
                  </Text>

                  <Box display="flex" mt={2} gap={2}>
                    {developer.titles.map((title: any, index: any) => (
                      <Badge key={index} colorScheme="red">
                        {title}
                      </Badge>
                    ))}
                  </Box>
                </CardBody>

                <CardFooter display="flex" gap="2">
                  {developer.github ? (
                    <Button
                      leftIcon={<FaGithub />}
                      as="a"
                      href={`https://github.com/${developer.github}`}
                    >
                      GitHub
                    </Button>
                  ) : (
                    <></>
                  )}
                  {developer.twitter ? (
                    <Button
                      leftIcon={<BsTwitter />}
                      as="a"
                      href={`https://twitter.com/${developer.github}`}
                    >
                      Twitter
                    </Button>
                  ) : (
                    <></>
                  )}
                </CardFooter>
              </Stack>
            </Card>
          ))}
        </Grid>
        <Heading mt={10} textAlign={{ base: "center", lg: "left" }}>
          Social Media
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          mt={3}
          gap={3}
        >
          {data.socialMediaManagers.map((developer: any, index: any) => (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              key={index}
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={developer.profilePicture}
                alt={developer.name}
              />

              <Stack>
                <CardBody>
                  <Heading size="lg">{developer.name}</Heading>

                  <Text py="2">
                    {developer.bio ? developer.bio : "No description provided"}
                  </Text>

                  <Box display="flex" mt={2} gap={2}>
                    {developer.titles.map((title: any, index: any) => (
                      <Badge key={index} colorScheme="red">
                        {title}
                      </Badge>
                    ))}
                  </Box>
                </CardBody>

                <CardFooter display="flex" gap="2">
                  {developer.github ? (
                    <Button
                      leftIcon={<FaGithub />}
                      as="a"
                      href={`https://github.com/${developer.github}`}
                    >
                      GitHub
                    </Button>
                  ) : (
                    <></>
                  )}
                  {developer.twitter ? (
                    <Button
                      leftIcon={<BsTwitter />}
                      as="a"
                      href={`https://twitter.com/${developer.github}`}
                    >
                      Twitter
                    </Button>
                  ) : (
                    <></>
                  )}
                </CardFooter>
              </Stack>
            </Card>
          ))}
        </Grid>
        <Heading mt={10} textAlign={{ base: "center", lg: "left" }}>
          Translators
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          mt={3}
          gap={3}
          mb={10}
        >
          {data.translators.map((developer: any, index: any) => (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              key={index}
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={developer.profilePicture}
                alt={developer.name}
              />

              <Stack>
                <CardBody>
                  <Heading size="lg">{developer.name}</Heading>

                  <Text py="2">
                    {developer.bio ? developer.bio : "No description provided"}
                  </Text>

                  <Box display="flex" mt={2} gap={2}>
                    {developer.titles.map((title: any, index: any) => (
                      <Badge key={index} colorScheme="red">
                        {title}
                      </Badge>
                    ))}
                  </Box>
                </CardBody>

                <CardFooter display="flex" gap="2">
                  {developer.github ? (
                    <Button
                      leftIcon={<FaGithub />}
                      as="a"
                      href={`https://github.com/${developer.github}`}
                    >
                      GitHub
                    </Button>
                  ) : (
                    <></>
                  )}
                  {developer.twitter ? (
                    <Button
                      leftIcon={<BsTwitter />}
                      as="a"
                      href={`https://twitter.com/${developer.github}`}
                    >
                      Twitter
                    </Button>
                  ) : (
                    <></>
                  )}
                </CardFooter>
              </Stack>
            </Card>
          ))}
        </Grid>

        <Text
          mb={10}
          fontSize="2xl"
          maxW={"27rem"}
          fontFamily="Inter"
          color="gray.300"
        >
          Special thanks to the{" "}
          <chakra.span fontWeight="bold">Guilded team</chakra.span> for allowing
          this project to exist 💖
        </Text>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/team/getAll", {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_REGUILDED_KEY!,
    },
  });

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
