import { Stack } from '@chakra-ui/react'
import React from 'react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import NavLink from './NavLink'
import { NavSection } from './NavSection'


const SideBarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="OVERVIEW">
        <Stack spacing="4" mt="8" align="stretch">
          <NavLink icon={RiDashboardLine} label="Dashboard" href="/dashboard" />
          <NavLink icon={RiContactsLine} label="Users" href="/users" />
        </Stack>
      </NavSection>
      <NavSection title="AUTOMATION">
        <Stack spacing="4" mt="8" align="stretch">
          <NavLink icon={RiInputMethodLine} label="Forms" href="/forms" />
          <NavLink icon={RiGitMergeLine} label="Automation" href="/automations" />
        </Stack>
      </NavSection>
    </Stack>
  )
}

export default SideBarNav
