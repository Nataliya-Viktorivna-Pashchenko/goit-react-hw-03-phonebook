import css from "./Styles.module.css";

export const Filter = ({ value, onChange }) => {
    return (
        <div>
      <label className={css.filter}>
        Find contacts by name
                <input
                    className={css.input}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};