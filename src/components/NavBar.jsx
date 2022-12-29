import logo from '../img/Ico/vtiger.png'
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Image,
  Center,
} from '@chakra-ui/react';
import { FaBookDead } from "react-icons/fa";

export default function Nav() {
  return (
    <>
      <Box bg='#224972' px={4} marginBottom='2rem'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Image src={logo} w='10rem'/>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            <Button leftIcon={<FaBookDead/>} variant='ghost' colorScheme='yellow' color={'white'}>Temas</Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'} bg='#b2dafa'>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Jhoalvi Ruedas</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem bg='#b2dafa'>Mi Cuenta</MenuItem>
                  <MenuItem bg='#b2dafa'>Notas</MenuItem>
                  <MenuItem bg='#b2dafa'>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
