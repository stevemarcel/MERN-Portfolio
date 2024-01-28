import PropTypes from "prop-types";

const Btn = ({ text, Icon }) => {
  return (
    <button className=" flex items-center gap-2 bg-slate-700 py-2 px-4 text-white rounded-full">
      <Icon />
      <p>{text}</p>
    </button>
  );
};

Btn.propTypes = {
  text: PropTypes.node,
  Icon: PropTypes.node,
};

export default Btn;
