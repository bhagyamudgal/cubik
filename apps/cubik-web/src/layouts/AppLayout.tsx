import { useRouter } from 'next/navigation';
import { Container } from '~/utils/chakra';
// import { AuthWrapper } from '~/context/authWrapper';
// import NavbarCTA from './NavbarCTA';
// import { Header } from './navigation/navbar/Header';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const router = useRouter();
  //   const { hackathon_slug } = router;
  //   const mtValue = hackathon_slug ? '0' : { base: '4.2rem', md: '5.2rem' };

  return (
    <Container maxW="full" p="0">
      {/* <AuthWrapper>
        <Header>
          <NavbarCTA />
        </Header> */}
      <Container mt={{ base: '4.2rem', md: '5.2rem' }} maxW="full" p="0" h="100%">
        {children}
      </Container>
      {/* </AuthWrapper> */}
    </Container>
  );
};

export default AppLayout;
