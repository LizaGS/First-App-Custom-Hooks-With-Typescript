import { useState } from 'react';

type themeProps = {
  theme: string
}

const useTheme = () => {

  const [theme, setTheme] = useState<themeProps['theme']>('light');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  return { theme, handleClick }
}

export default useTheme