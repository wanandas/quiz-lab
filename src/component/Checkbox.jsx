export const Checkbox = ({ label, ...props }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" {...props} />
      <span className="checkbox__label">{label}</span>
    </label>
  );
};
