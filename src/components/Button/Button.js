import PropTypes from "prop-types";
import confirm from "../../assets/confirm.svg";
import remove from "../../assets/remove.svg";

export const Button = ({ text, icon, click, iconSize = 8 }) => {
  const IconSize = `h-${iconSize} w-${iconSize}`;
  return icon ? (
    <div
      onClick={click}
      className="px-12 hover:scale-125 cursor-pointer transition-all "
    >
      <img
        className={IconSize}
        src={icon === "confirmed" ? confirm : remove}
        alt="icon"
      />
    </div>
  ) : (
    <button onClick={click}>{text}</button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.oneOf(["confirmed", "remove"]),
  click: PropTypes.func,
  iconSize: PropTypes.number,
};
