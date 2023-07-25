'use client';
import { Box, Button, Center, FormControl, HStack, Input, VStack } from '~/utils/chakra';
import React, { ChangeEvent } from 'react';
import Image from 'next/image';

export const NewsLetter = () => {
  const [email, setEmail] = React.useState('');
  const [state, setState] = React.useState<'initial' | 'submitting' | 'success'>('initial');
  return (
    <Center w="full" p="0">
      <Center maxW="7xl" w="full" px={{ base: '1rem', md: '4rem', lg: '5rem' }}>
        <Center
          maxW="7xl"
          zIndex={'1'}
          w={'100%'}
          rounded="xl"
          bg="#000"
          border="1px solid #1C2726"
          overflow={'hidden'}
          h="19rem"
          position={'relative'}
          justifyContent="flex-start"
          p={{ base: '2rem', md: '2rem 3rem' }}
        >
          <VStack alignItems={'start'} zIndex="1">
            <Box textStyle={'overline3'} textTransform="capitalize" color="brand.teal5">
              JOIN OUR NEWSLETTER
            </Box>
            <Box textStyle={{ base: 'headline3', md: 'headline1' }}>
              Stay in loop with all things Cubik
            </Box>
            <Box textStyle={{ base: 'body3', md: 'body2' }} color="#566664">
              We promise we won’t spam you
            </Box>{' '}
            <Center w="full" py="1rem">
              <HStack
                zIndex={'1'}
                border="1px solid #E0FFFD10"
                w="full"
                p="0.3rem"
                bg="neutral.3"
                rounded={'16px'}
              >
                <FormControl bg="neutral.3" rounded="full">
                  <Input
                    bg="neutral.3"
                    variant={'solid'}
                    borderWidth={0}
                    borderLeftRadius="100px"
                    color="white"
                    id={'email'}
                    type={'email'}
                    required
                    placeholder={'Your Email Address'}
                    aria-label={'Your Email'}
                    value={email}
                    disabled={state !== 'initial'}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    _placeholder={{
                      color: 'neutral.7',
                      fontSize: 'sm',
                    }}
                    _active={{
                      borderColor: 'gray.400',
                      shadow: 'none',
                    }}
                    _hover={{
                      borderColor: 'gray.400',
                      shadow: 'none',
                    }}
                    _focus={{
                      borderColor: 'gray.400',
                      shadow: 'none',
                    }}
                  />
                </FormControl>
                <FormControl w={{ base: '100%', md: '36%' }}>
                  <Button
                    variant={'primary'}
                    isLoading={state === 'submitting'}
                    w="100%"
                    type={state === 'success' ? 'button' : 'submit'}
                  >
                    {state === 'success' ? 'check icon' : 'Signup'}
                  </Button>
                </FormControl>
              </HStack>
            </Center>
          </VStack>
          <Center
            zIndex={'0'}
            position={'absolute'}
            right={'0%'}
            top={'0%'}
            width="70rem"
            height="70rem"
            transform={'translate(50%, -10%)'}
            overflow="hidden"
            _before={{
              content: '""',
              zIndex: '2',
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'full',
              height: 'full',
              backgroundColor: '#000',
              filter: 'blur(240px)',
              borderRadius: 'full',
            }}
          >
            <Image src="/images/newsletter.png" alt="email cubik" fill={true} />
          </Center>
        </Center>
      </Center>
    </Center>
  );
};
