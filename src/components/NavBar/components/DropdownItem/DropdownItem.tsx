import style from './DropdownItem.module.css';

const items = [
  { label: 'ABOUT US', url: '/about-us' },
  { label: 'SUPPORT', url: '/support' },
  { label: 'TERMS', url: '/terms' },
  { label: 'PRIVACY', url: '/privacy' },
];

const DropdownItem = () => {
  return (
    <div className={style.container}>
      <ul className={style.items}>
        {items.map(({ label, url }) => (
          <li
            key={url}
            className={style.item}
          >
            <a
              key={url}
              href={url}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownItem;
