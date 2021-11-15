import {FC} from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay, useDisclosure
} from "@chakra-ui/react";
import {CardDescription, CardHeading, CardPhoto} from "../../common/Card/Card";

interface Props {
  active: boolean;
  name: string;
  description: string;
  image: string;
}

export const ProductDetailsModal:FC<Props> = ({active, name, description, image}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button data-testid="show-details-btn" onClick={onOpen} isDisabled={!active}>
        {active ? 'Show details' : 'Unavailable'}
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="600px" mx="5" borderRadius="md">
          <ModalCloseButton />
          <ModalBody p={0}>
            <CardPhoto height="300px" image={image} />
            <Box py="5" px="5">
              <CardHeading name={name} />
              <CardDescription height="80px" description={description} />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}