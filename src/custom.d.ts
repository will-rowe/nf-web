/// <reference types="nativewind/types" />
import "nativewind/types";
import "tailwindcss-react-native/types.d";

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
} 