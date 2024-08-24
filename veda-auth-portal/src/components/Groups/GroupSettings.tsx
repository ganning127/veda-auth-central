import {
  Box,
  Flex,
  FormControl,
  Text,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
  Divider,
  Avatar,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Code,
  IconButton,
  Switch,
} from '@chakra-ui/react';
import { PageTitle } from '../PageTitle';
import { FiTrash2 } from "react-icons/fi";
import { ActionButton } from '../ActionButton';

const MOCK_GROUP_MANAGERS = [
  {
    email: "ganning.xu@gatech.edu",
  },
  {
    email: "testemail@gmail.com"
  },
  {
    email: "bob@gmail.com"
  }
]

const MOCK_ROLES = [
  {
    name: "grafana:admin",
    description: "View dashboard."
  },
  {
    name: "stac:admin",
    description: "Can view group settings and access group resources."
  },
  {
    name: "grafana:editor",
    description: "Can view group settings and access group resources."
  }
]

interface GroupSettingsProps {
  groupId: string | undefined;
}

const LeftRightLayout = ({ left, right }: { left: React.ReactNode, right: React.ReactNode }) => {
  return (
    <SimpleGrid columns={2} spacing={8}>
      <Box>
        {left}
      </Box>
      <Box>
        {right}
      </Box>
    </SimpleGrid>
  )
}

export const GroupSettings = ({ groupId }: GroupSettingsProps) => {
  if (!groupId) {
    return (
      <Text>No group selected</Text>
    )
  }
  return (
    <>
      <PageTitle size="md">Group Settings</PageTitle>
      <Text color="default.secondary">Edit group membership, roles, and other information.</Text>

      <Stack border='1px solid' borderColor='border.neutral.tertiary' rounded='xl' p={8} mt={8} divider={<Divider />} spacing={8}>

        <LeftRightLayout
          left={(
            <Text fontSize='lg'>Basic Information</Text>
          )}
          right={(
            <Stack spacing={4}>
              <FormControl color='default.default'>
                <FormLabel>Name</FormLabel>
                <Input type='text' />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input type='text' />
              </FormControl>
            </Stack>
          )}
        />

        <LeftRightLayout
          left={(
            <Text fontSize='lg'>Group Owner</Text>
          )}
          right={(
            <Stack spacing={4}>
              <Text ml={2}>Lisa Chou (You)</Text>
            </Stack>
          )}
        />

        <LeftRightLayout
          left={(
            <>
              <Text fontSize='lg'>Group Manager (s)</Text>
              <Text color='default.secondary' mt={4} fontSize='sm'>Can edit the configuration for this group and add/remove members.</Text>
            </>
          )}
          right={(
            <>
              <Stack spacing={2}>
                {MOCK_GROUP_MANAGERS.map((manager, index) => (
                  <Flex key={index} align='center' justifyContent='space-between'>
                    <Text ml={2}>{manager.email}</Text>
                    <Button
                      border='1px solid'
                      borderColor="border.neutral.tertiary"
                      size='sm'
                      bg='white'
                      shadow='sm'
                    >Remove</Button>
                  </Flex>
                ))}
              </Stack>

              <Button variant='link' color='blue.400' size='sm' mt={4}>Add Manager</Button>
            </>
          )}
          />

          <Box>
            <Text fontSize='lg'>Roles</Text>
            <Text color='default.secondary' mt={4} fontSize='sm'>Choose the roles to assign to members of this group.</Text>

            <TableContainer mt={4}>
              <Table variant='simple' size='sm'>
                <Thead>
                  <Tr>
                    <Th>Role</Th>
                    <Th>Description</Th>
                    <Th />
                  </Tr>
                </Thead>
                <Tbody>
                  {MOCK_ROLES.map((role, index) => (
                    <Tr key={index}>
                      <Td>
                        <Code colorScheme='gray'>{role.name}</Code>
                      </Td>
                      <Td>{role.description}</Td>

                      <Td>
                        <IconButton
                          aria-label='Delete Role'
                          icon={<FiTrash2 />}
                          size='sm'
                          bg=""
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            <Button variant='link' color='blue.400' size='sm' mt={4}>Add Manager</Button>
          </Box>

          <LeftRightLayout
            left={(
              <Text fontSize='lg'>Automatically add users to this group</Text>
            )}

            right={(
              <Flex justifyContent='flex-end'>
                  <Switch colorScheme='blackAlpha'/>
              </Flex>
            )}
          />
      </Stack>

      <Stack direction='row' mt={8} spacing={4}>
        <ActionButton
          onClick={() => {}}
        >
          Save Changes
        </ActionButton>

          <Button border='1px solid' borderColor="border.neutral.secondary">
            Archive Group
          </Button>
      </Stack>
    </>
  )
}
