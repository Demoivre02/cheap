import {ChakraProvider,useDisclosure} from '@chakra-ui/react'
import {Menu,MenuList,MenuItem,MenuButton} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';




  function Popup(){
    const { isOpen, onOpen, onClose } = useDisclosure()



    const links=[
        {id:1, name:"Credit User",path:"/creditUser"},
        {id:2, name:"Edit User Information",path:"/editUser"},
        {id:3, name:"Change User Password",path:"/adminUserPassword"},
        {id:4, name:"Change User Pin",path:"/adminUserPin"},
        {id:5, name:"Check User history",path:"/Userhistory"},
        {id:6, name:"Delete User", path:"/deleteUser"},
    ]

    return(
        <>
        <ChakraProvider>

        <Menu>

        <MenuButton>
            <div onClick={onOpen}   >
                <Icon icon="material-symbols:edit-outline-rounded" width="25" />
            </div>
        </MenuButton>

            <MenuList>
                {links.map((items)=>{
                    return <Link to={items.path}>
                    <MenuItem>
                        <div className='p-2'>
                            <p>{items.name}</p>
                        </div>
                    </MenuItem>
                    </Link>
                })}
            </MenuList>
        </Menu>
            
        </ChakraProvider>


        
        </>
    )
  }
  export default Popup