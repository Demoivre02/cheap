import React from 'react'
import {Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Search from './search';

function Sidemobilenav() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')

  return (
    <>
    <div >
        <ChakraProvider >
        <div className='flex justify-between items-center py-3 bg-[#9EA9D6]'>
            <div className='pt-2 ml-4' onClick={onOpen}>
                <Icon icon="fontisto:nav-icon-grid" color="#fff" width="20" />
            </div>
            <div>
                <div className='flex justify-between mr-8'>

                <div className='mx-4'>
                    <Icon icon="mdi:user-circle" color="white" width="25" />
                </div>

                <Search/>

                <div className='ml-4'>
                    <Icon icon="material-symbols:settings" color="white" width="25" height="25" /></div>
                </div>
            </div>

        </div>
       
        <Box width={"10%"}>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
            <DrawerBody className=' bg-[#171F34]'>
            <div className='flex justify-between '>
              <div className='mb-8 mr-4'>
                  <Link to="/">
                    <img src="images/logo.png" alt="" />
                </Link>
              </div>
              <div className='mt-4' onClick={onClose}>
                <Icon icon="ci:close-big" color="white" width="25" inline={true} />
              </div>
            </div>

                
              <ul className='justify-center items-center'>
                    <Link to="dashboard">
                        <li className='w-full  hover:bg-slate-800 pt-2 pb-2'>
                            <div className='w-11/12 ml-4 flex justify-between items-center'>
                                <Icon icon="ic:sharp-dashboard" color="white" height="25" inline={true} />
                            <div className='w-4/5' >
                                    <p className='text-white text-left'> Dashboard</p>
                            </div> 
                            </div>
                        </li>
                    </Link>
                    <Link to="/transaction">
                        <li className='w-full hover:bg-slate-800 pt-2 pb-2  items-center'>
                            <div className='ml-4 w-11/12 flex justify-between items-center'>
                                <Icon icon="eos-icons:arrow-rotate" color="white" height="25" inline={true} />
                                <div className='w-4/5' >
                                    <p className='text-white text-left'>Transaction</p>
                                </div>  
                            </div>     
                        </li>
                    </Link>
                    <Link to="/userpanel">
                        <li className='w-full hover:bg-slate-800 pt-2 pb-2 items-center text-left'>
                            <div className='ml-4 flex justify-between w-11/12 items-center'>
                                <Icon icon="carbon:user-filled" color="white" height="25" inline={true} />
                                <div className='w-4/5'>
                                    <p className='text-white text-left'>User Panel</p> 
                                </div>  
                            </div>   
                        </li>
                    </Link>
                    <Link to="statistics">
                        <li className='w-full items-center hover:bg-slate-800 pt-2 pb-2 text-left'>
                            <div className='ml-4 flex justify-between w-11/12 text-left'>
                                <Icon icon="akar-icons:statistic-up" color="white" height="25" inline={true} />
                                <div className='w-4/5' >
                                    <p className='text-white text-left'>Statistics</p> 
                                </div>
                            </div>    
                        </li>
                    </Link>
                    <Link to="admin">
                        <li className='w-full items-center hover:bg-slate-800 pt-2 pb-2 text-left'>
                            <div className='ml-4 flex justify-between w-11/12 text-left'> 
                                <Icon icon="ic:baseline-admin-panel-settings" color="white" height="25" inline={true} />
                                <div className='w-4/5'>
                                    <p className='text-white text-left'>Admin Panel</p>
                                </div>   
                            </div>                  
                        </li>
                    </Link>
                    <Link to="/settings">
                        <li className='w-full hover:bg-slate-800 pt-2 pb-2   items-center'>
                            <div className='ml-4 flex justify-between w-11/12 text-left'>
                                <Icon icon="ci:settings" color="white" height="25" inline={true} />
                                <div className='w-4/5'>
                                    <p className='text-white text-left'>Settings</p> 
                                </div> 
                            </div>   
                        </li>
                    </Link>
                    <Link to="/support">
                        <li className='w-full hover:bg-slate-800 pt-2 pb-2 items-center'>
                            <div className='ml-4 flex justify-between w-11/12 text-left' >
                                <Icon icon="bx:help-circle" color="white" height="25" inline={true} />
                                <div  className='w-4/5'>
                                    <p className='text-white text-left'>Support</p> 
                                </div>
                            </div>
                        </li>
                    </Link>
                    <Link to="/logout">
                        <li className='w-full mt-20 hover:bg-slate-800 pt-2 pb-2 items-center'>
                            <div className='ml-4 flex justify-between w-11/12 text-left' >
                                <Icon icon="carbon:logout" color="white" height="25" inline={true} />
                                <div  className='w-4/5'>
                                    <p className='text-white text-left'>Logout</p> 
                                </div>
                            </div>
                        </li>
                    </Link>
                </ul>

            </DrawerBody>
            </DrawerContent>
        </Drawer>
        </Box>
        </ChakraProvider>
      </div>
    </>
    
  )
}

export default Sidemobilenav