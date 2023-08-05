'use client';
import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { colors, components, borders, styles, textStyles } from '../theme';
export const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  fonts: {
    headline: `'Plus Jakarta Sans', sans-serif`,
    body: `'Plus Jakarta Sans', sans-serif`,
  },
  textStyles,
  colors,
  config,
  styles,
  borders,
  components,
});
