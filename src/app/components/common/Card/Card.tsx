import {Box, BoxProps, Heading, HeadingProps, Image, ImageProps, Text, TextProps} from "@chakra-ui/react";
import {FC} from "react";


interface CardPhotoProps extends ImageProps{
  image: string;
}

export const CardPhoto:FC<CardPhotoProps> = ({image, ...props}) => (
  <Image
    borderTopLeftRadius="md"
    borderTopRightRadius="md"
    width="100%"
    height="170px"
    objectFit="cover"
    src={image}
    {...props}
  />
)


interface CardHeadingProps extends HeadingProps {
  name: string
}

export const CardHeading: FC<CardHeadingProps> = ({name, ...props}) => (
  <Heading title={name} isTruncated mb={1} size="md" fontWeight="600" {...props}>
    {name}
  </Heading>
)

interface CardDescriptionProps extends TextProps {
  description: string;
}

export const CardDescription: FC<CardDescriptionProps> = ({description, ...props}) => (
  <Text height="110px" fontWeight="600" color="shadows.600" {...props}>
    {description}
  </Text>
);



export const CardLabel: FC<BoxProps> = (props) => (
  <Box top="20px" left="0" bg="label" position="absolute" py={1} px={4} {...props}>
    <Text lineHeight="1" color="#fff">
      {props.children}
    </Text>
  </Box>
)