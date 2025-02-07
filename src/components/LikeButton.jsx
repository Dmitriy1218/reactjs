// import classes from './LikeButton.modules.css'

export const LikeButton = ({
  text = "Press me",
  onClick = () => null,
}) => {
  return (
    <div >
      <button onClick={ onClick }>{ text }</button>
    </div>
  )
}