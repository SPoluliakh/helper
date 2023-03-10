import * as SC from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <nav>
        <SC.Link to="/">Home</SC.Link>
        <SC.Link to="weather">Weather</SC.Link>
        <SC.Link to="currency-converter">Currency-Converter</SC.Link>
      </nav>
    </>
  );
};
