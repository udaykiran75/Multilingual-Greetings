import './index.css'

const GreetingButtons = props => {
  const {greeting, isActive, clickLanguageBtn} = props
  const {buttonText, imageAltText} = greeting
  const btnClassName = isActive ? 'activeBtnStyle' : 'inactiveBtnStyle'
  const onClickBtn = () => {
    clickLanguageBtn(imageAltText)
  }

  return (
    <li className="language-item">
      <button className={btnClassName} onClick={onClickBtn} type="button">
        {buttonText}
      </button>
    </li>
  )
}
export default GreetingButtons
