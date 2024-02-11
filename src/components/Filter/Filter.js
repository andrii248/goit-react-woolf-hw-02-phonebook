import css from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={css.label}>
      Find contact by name
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </label>
  );
};

export default Filter;
