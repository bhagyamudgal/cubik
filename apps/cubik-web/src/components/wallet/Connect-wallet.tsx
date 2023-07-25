import { Button } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import React from 'react';

export const ConnectWalletButton = () => {
  const wallet = useWallet();
  const { setVisible } = useWalletModal();
  return (
    <>
      {!wallet.connected && (
        <Button onClick={() => setVisible(true)} variant="primary">
          Connect Wallet
        </Button>
      )}
    </>
  );
};
