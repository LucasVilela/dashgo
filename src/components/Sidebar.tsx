import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { useSidebarDrawer } from '../contexts/SideBarDrawerContext'
import SideBarNav from './Sidebar/SideBarNav'

export function Sidebar() {

  const { onClose, isOpen } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSidebar) {
    return <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="gray.800" p={4}>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <SideBarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  }


  return (
    <div>
      <Box as="aside" w="64" mr="8">
        <SideBarNav />
      </Box>
    </div>
  )
}
