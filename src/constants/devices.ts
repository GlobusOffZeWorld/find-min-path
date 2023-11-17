const breakpoints = {
  sm: '360px',
  md: '1100px',
  lg: '1440px'
};

export const devices = {
  mobile: `(min-width: ${breakpoints.sm})`,
  tablet: `(min-width: ${breakpoints.md})`,
  desktop: `(min-width: ${breakpoints.lg})`
};
