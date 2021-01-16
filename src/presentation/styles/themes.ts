type ThemeShared = {
  textActive: string;
  checkBackgroundPrimary: string;
  checkBackgroundSecondary: string;
};

type Theme = {
  body: string;
  mainBackground: string;
  text: string;
  textDisabled: string;
  textHover: string;
} & ThemeShared;

const shared: ThemeShared = {
  textActive: '	#3a7bfd',
  checkBackgroundPrimary: '#57ddff',
  checkBackgroundSecondary: '#c058f3'
};

export const lightTheme: Theme = {
  ...shared,
  body: '#e4e5f1',
  mainBackground: '#fafafa',
  text: '#9394a5',
  textDisabled: '#d2d3db',
  textHover: '#484b6a'
};

export const darkTheme: Theme = {
  ...shared,
  body: '#161722',
  mainBackground: '#25273c',
  text: '#cacde8',
  textDisabled: '#777a92',
  textHover: '#e4e5f1'
};
