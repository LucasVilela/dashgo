import { Icon, Link as ChakraLink, Text } from '@chakra-ui/react'
import React, { ElementType } from 'react'
import ActiveLink from '../ActiveLink'


interface NavLinkProps {
  icon: ElementType;
  label: React.ReactNode
  href: string
}

export default function NavLink({ icon, label, href, ...props }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref shouldMatchExactHref>
      <ChakraLink display="flex" align="center">
        <Icon as={icon} fontSize="20" {...props} />
        <Text ml="4" fontWeight="medium">{label}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}
