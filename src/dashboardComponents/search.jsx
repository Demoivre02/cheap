import React from "react"
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,} from '@chakra-ui/react'
import {FormControl,FormLabel,FormErrorMessage,FormHelperText,} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Icon } from '@iconify/react';
import { ChakraProvider } from "@chakra-ui/react"

function Search() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <div onClick={onOpen} className=''>
            <Icon icon="fe:search" color="white" width="23" inline={true} />
        </div>
        <ChakraProvider>
            <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            size="sm"
            >
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody p2={6}>
                <FormControl>
                    <FormLabel>Search</FormLabel>
                    <Input type='search' ref={initialRef} placeholder='Enter' />
                </FormControl>
    
                </ModalBody>
            </ModalContent>
            </Modal>
        </ChakraProvider>
      </>
    )
  }
  export default Search