import './App.css';
import useButtonClick from './hooks/useButtonClick';
import useTheme from './hooks/useTheme';
import { leftLightTheme, leftDarkTheme, rightLightTheme, rightDarkTheme, buttonLight, buttonDark } from './utils/appStyles';
import useCounter from './hooks/useCounter';
import useClick from './hooks/useClick';
import usePrintText from './hooks/usePrintText';


function App() {
  const { datas, print } = usePrintText();

  //------------------------------------------------------------------------------------

  const { theme, handleClick } = useTheme();
  const _handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleClick(e)
    print(` Theme was set to ${theme === 'light' ? 'dark' : 'light'}`)
  }
  //------------------------------------------------------------------------------------

  const { message, setMessage, handleMessage } = useButtonClick();

  const _handleMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleMessage(e)
    print(` Message Sent: ${message}`)
    setMessage('')
  }

  //------------------------------------------------------------------------------------

  const { count, buttons, handleAddButton } = useCounter();
  const _handleAddButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleAddButton(e)
    print(` Button ${count} added`)
  }

  //------------------------------------------------------------------------------------

  const { handleClicked } = useClick()
  const _handleClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleClicked(e)
    print(` Button ${(e.target as HTMLInputElement).value} clicked`)
  }

  return (
    <div className="container">
      <div
        className='leftside'
        style={theme === 'light' ? leftLightTheme : leftDarkTheme}
      >
        <button
          onClick={_handleClick}
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
            onClick={_handleMessage}
            disabled={!message}
          >
            Click
          </button>
        </div>
        <hr />
        <div className='buttonContainer'>
          <button
            style={theme === 'light' ? buttonLight : buttonDark}
            onClick={_handleAddButton}
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
                onClick={_handleClicked}
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