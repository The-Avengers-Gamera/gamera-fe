import style from './DropdownItem.module.css';

const items = [
  { label: 'ABOUT US', url: '/about-us' },
  { label: 'SUPPORT', url: '/support' },
  { label: 'TERMS', url: '/terms' },
  { label: 'PRIVACY', url: '/privacy' },
];

const DropdownItem = ({ setIsMore }: any) => {
  const handleExpansionOpen = () => {
    setIsMore(true);
  };

  const handleExpansionClose = () => {
    setIsMore(false);
  };
  return (
    <div
      className={style.container}
      onMouseEnter={handleExpansionOpen}
      onMouseLeave={handleExpansionClose}
    >
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
