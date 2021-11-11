import {Heading} from "@chakra-ui/react";
import {FC} from "react";
import {HeadingProps} from "@chakra-ui/react";

export const Brand: FC<HeadingProps> = ({...props}) => <Heading {...props} fontWeight="600" fontSize="xl">join.tsh.io</Heading>
