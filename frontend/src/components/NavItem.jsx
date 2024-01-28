import PropTypes from "prop-types";

const NavItem = ({ name, Icon }) => {
  return (
    <div className="flex items-center justify-center gap-2 text-[18px] py-1 font-semibold cursor-pointer hover:border-b-4 border-primary hover:text-primary">
      <Icon />
      <h2>{name}</h2>
    </div>
  );
};

NavItem.propTypes = {
  name: PropTypes.node,
  Icon: PropTypes.node,
};

export default NavItem;
