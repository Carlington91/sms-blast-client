const Alert = ({ className, type }) => {
  return (
    <div className={`alert alert-${className}`} role='alert'>
      {type}
    </div>
  );
};

export default Alert;
