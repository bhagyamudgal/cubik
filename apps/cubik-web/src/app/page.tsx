import LandingPage from '~/components/landing-page/LandingPage';

// const WalletMultiButton = dynamic(
//   async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
//   { ssr: false },
// );
export default function Home() {
  return (
    <>
      {/* <SEO
        title={`Cubik`}
        description={`Fund Public Goods Through Community Voting On Solana `}
        image={`https://res.cloudinary.com/demonicirfan/image/upload/v1684179451/cubik%20og.png`}
      /> */}
      <LandingPage />
    </>
  );
}
