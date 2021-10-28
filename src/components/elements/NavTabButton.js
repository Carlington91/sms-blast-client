const NavTabButton = ({ label, target, className }) => {
  return (
    <button
      className={`nav-link ${className}`}
      id='nav-profile-tab'
      data-bs-toggle='tab'
      data-bs-target={target}
      type='button'
      role='tab'
      aria-controls='nav-profile'
      aria-selected='false'
    >
      {label}
    </button>
  );
};

export default NavTabButton;
