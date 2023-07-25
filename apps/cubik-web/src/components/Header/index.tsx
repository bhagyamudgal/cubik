import React from 'react';
import { Container, Flex, HStack } from '~/utils/chakra';
interface Props {
  children: React.ReactNode;
}
export const Header = ({ children }: Props) => {
  return (
    <>
      <main>
        <Container
          w="full"
          zIndex="10"
          maxW={'full'}
          position="fixed"
          top="0px"
          minH="4rem"
          p="0"
          bg="transparent"
          sx={{
            backdropFilter: 'blur(20px)',
            margin: '0px !important',
            marginTop: '0px !important',
          }}
        >
          <Flex
            mx="auto"
            p={{ base: '14px 12px', sm: '16px 24px', md: '20px 20px' }}
            maxW="7xl"
            alignItems={'center'}
            justifyContent={'space-between'}
            gap={'24px'}
          >
            <HStack w="full" gap={{ base: '28px', lg: '32px' }}>
              {/* <Logo />
              <DeskNavbarItems /> */}
            </HStack>
            {/* <NavbarCTA>{children}</NavbarCTA> */}
          </Flex>
          {/* <MobileNavCollapsible onClose={onClose} isOpen={isOpen} onToggle={onToggle} /> */}
        </Container>
      </main>
    </>
  );
};
