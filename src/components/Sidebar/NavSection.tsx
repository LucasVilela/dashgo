import { Box, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface NavSectionProps {
  title: string;
  children: ReactNode
}

export function NavSection({ title, children }) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
      {children}
    </Box>
  )
}
