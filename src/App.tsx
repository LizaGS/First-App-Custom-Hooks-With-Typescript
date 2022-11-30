import { useState } from 'react';
import './App.css';
import CSS from 'csstype';

//-------------------------------------LEFT THEME-------------------------------------
const leftLightTheme: CSS.Properties = {
  background: '#cecece',
  color: '#2f4f4f'
}
const leftDarkTheme: CSS.Properties = {
  background: 'white',
  color: '#696969'
}
//-------------------------------------RIGHT THEME-------------------------------------
const rightLightTheme: CSS.Properties = {
  background: 'white',
  color: '#000000'
}
const rightDarkTheme: CSS.Properties = {
  background: '#008080',
  color: 'white'
}
//-------------------------------------BUTTON THEME-------------------------------------
const buttonLight: CSS.Properties = {
  background: '#cc0000',
  color: 'white'
}
const buttonDark: CSS.Properties = {
  background: '#f0f8ff',
  color: '#800080'
}


function formatedTimestamp(): string {
  const d = new Date()
  const date = d.toISOString().split('T')[0];
  const time = d.toTimeString().split(' ')[0];
  return `${date} ${time}`
}

type AppProps = {
  datas: string[],
  theme: string,
  message: string,
  count: number,
  buttons: number[],
}

function App() {

  const [datas, setDatas] = useState<AppProps['datas']>([]);

  const [theme, setTheme] = useState<AppProps['theme']>('light');
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    theme === 'light' ? setTheme('dark') : setTheme('light');
    setDatas([
      ...datas,
      formatedTimestamp().concat(` Theme was set to ${theme === 'light' ? 'dark' : 'light'}`)
    ]);
  }
  //------------------------------------------------------------------------------------
  const [message, setMessage] = useState<AppProps['message']>('');
  const handleMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.currentTarget.disabled = true;
    setDatas([
      ...datas,
      formatedTimestamp().concat(` Message Sent: ${message}`)
    ]);
    setMessage('')
  }
  //------------------------------------------------------------------------------------
  const [count, setCount] = useState<AppProps['count']>(1);
  const [buttons, setButtons] = useState<AppProps['buttons']>([]);
  const handleAddButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCount(count + 1)
    setButtons([
      ...buttons,
      count + 1
    ])
    setDatas([
      ...datas,
      formatedTimestamp().concat(` Button ${count} added`)
    ])
  }
  //------------------------------------------------------------------------------------
  const handleClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDatas([
      ...datas,
      formatedTimestamp().concat(` Button ${(event.target as HTMLInputElement).value} clicked`)
    ])
  }

  return (
    <div className="container">
      <div
        className='leftside'
        style={theme === 'light' ? leftLightTheme : leftDarkTheme}
      >
        <button
          onClick={handleClick}
          style={theme === 'light' ? buttonLight : buttonDark}
        >
          Set {theme === 'light' ? 'dark' : 'light'} theme
        </button>
        <hr />
        <div className='cont2'>
          <textarea
            id="message"
            name="message"
            className='textarea'
            value={message}
            onChange={event => setMessage(event.target.value)}
          />
          <button
            className='click'
            style={theme === 'light' ? buttonLight : buttonDark}
            onClick={handleMessage}
            disabled={!message}
          >
            Click
          </button>
        </div>
        <hr />
        <div className='buttonContainer'>
          <button
            style={theme === 'light' ? buttonLight : buttonDark}
            onClick={handleAddButton}
          >
            Add Button {count}
          </button>
          {buttons && buttons.map((button, index) => {
            return (
              <button
                value={button - 1}
                key={index}
                className='button'
                style={theme === 'light' ? buttonLight : buttonDark}
                onClick={handleClicked}
              >
                Button {button - 1}
              </button>)
          })
          }

        </div>
      </div>
      <div
        className='rightside'
        style={theme === 'light' ? rightLightTheme : rightDarkTheme}
      >
        {(datas && datas).map((data, index) => (
          <div key={index}>{data}</div>
        ))}
      </div>
    </div>
  );
}

export default App; 