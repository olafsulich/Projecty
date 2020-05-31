import { css, CSSObject, SimpleInterpolation, FlattenSimpleInterpolation } from 'styled-components';

type Breakpoints = {
  xs: number;
  s: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

const sizes: Breakpoints = {
  xs: 450,
  s: 570,
  sm: 950,
  md: 1200,
  lg: 1300,
  xl: 1400,
  xxl: 1600,
};

const initAcc: Interpolation<Breakpoints> = {
  xs: () => '',
  s: () => '',
  sm: () => '',
  md: () => '',
  lg: () => '',
  xl: () => '',
  xxl: () => '',
};

type BreakpointEntry = [keyof Breakpoints, Breakpoints[keyof Breakpoints]];
type Interpolation<T> = {
  [key in keyof T]:
    | ((first: CSSObject | TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => FlattenSimpleInterpolation)
    | (() => string);
};

interface CustomObject extends ObjectConstructor {
  entries<K extends keyof Breakpoints, T>(o: { [s in K]: T } | ArrayLike<T>): [K, T][];
}

const object: CustomObject = Object;

export const media = object.entries(sizes).reduce<Interpolation<Breakpoints>>((acc, cur: BreakpointEntry) => {
  const [key, value] = cur;
  acc[key] = (first, ...interpolations) =>
    css`
      @media (min-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `;
  return acc;
}, initAcc);
