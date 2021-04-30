import './CardWrapper.css';

const CardWrapper = (props) => {
   const allClass = "custom-card " + props.className;
   return (
      <div className={allClass}>{props.children}</div>
   );
}

export default CardWrapper;