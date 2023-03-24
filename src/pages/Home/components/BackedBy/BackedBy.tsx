import styles from './backedBy.module.css';
import sony from './assets/Sony.png';
import microsoft from './assets/MicroSoft.png';
import nintendo from './assets/nintendo.png';
import naughtyDog from './assets/Naughty.png';
import mojang from './assets/Mojang.png';
import eaSports from './assets/EA.png';
import popCap from './assets/popcap.png';
import blizzard from './assets/Blizzard.png';
import rockStar from './assets/Rockstar.png';
import twok from './assets/2K.png';
import sega from './assets/sega.png';
import santaMonica from './assets/Santa.png';
import backedBy from './assets/backedBy.png';

const BackedBy = () => {
  return (
    <div className={styles.backed_by}>
      <div className={styles.logo_title}>
        <img
          src={backedBy}
          alt="backedBy"
        />
        <h2 className={styles.title}>Backed By</h2>
      </div>

      <div className={styles.logo_wall}>
        <div className={styles.logo_row}>
          <div className={styles.logo_1}>
            <img
              src={sega}
              alt="Sega"
            />
          </div>
          <div className={styles.logo_1}>
            <img
              src={microsoft}
              alt="Microsoft"
            />
          </div>
          <div className={styles.logo_1}>
            <img
              src={nintendo}
              alt="Nintendo"
            />
          </div>
        </div>
        <div className={styles.logo_row}>
          <div className={styles.logo_2}>
            <img
              src={sony}
              alt="Sony"
            />
          </div>
          <div className={styles.logo_2}>
            <img
              src={mojang}
              alt="Mojang"
            />
          </div>
        </div>
        <div className={styles.logo_row}>
          <div className={styles.logo}>
            <img
              src={eaSports}
              alt="EA Sports"
            />
          </div>
          <div className={styles.logo}>
            <img
              src={popCap}
              alt="PopCap"
            />
          </div>
          <div className={styles.logo}>
            <img
              src={blizzard}
              alt="Blizzard"
            />
          </div>
          <div className={styles.logo}>
            <img
              src={rockStar}
              alt="Rockstar"
            />
          </div>
        </div>
        <div className={styles.logo_row}>
          <div className={styles.logo}>
            <img
              src={twok}
              alt="2K"
            />
          </div>
          <div className={styles.logo_1}>
            <img
              src={naughtyDog}
              alt="Naughty Dog"
            />
          </div>
          <div className={styles.logo}>
            <img
              src={santaMonica}
              alt="Santa Monica"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackedBy;
