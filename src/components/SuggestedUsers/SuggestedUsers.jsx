import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
  return (
    <VStack px={6} py={8} gap={4}>
        <SuggestedHeader />

        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gray.400"}} cursor={"pointer"}>
                See All
            </Text>
        </Flex>

        <SuggestedUser />
        <SuggestedUser />
        <SuggestedUser />

        <Box fontSize={12} color={"gray.500"} mt={5}>
            © 2023 Built By{" "}
            <Link href="https://github.com/IdushaGaravi" target="_blank" color={"blue.500"} fontSize={14}>
                Idusha Garavi
            </Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers