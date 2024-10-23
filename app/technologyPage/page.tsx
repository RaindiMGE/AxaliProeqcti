'use client' 

import Image from 'next/image';
import styles from './page.module.scss';

const TechnologyPage = () => {
    return <div className={styles.container}>
        <div className={styles.boxesWrapper}>
            <div className={styles.grayBox}></div>
            <div className={styles.grayBox}></div>
            <div className={styles.grayBox}></div>
            <div className={styles.grayBox}></div>
        </div>
        <div className={styles.descriptionContainer}>
            <div className={styles.vidoeContainer}>
                <h1>Net Watch</h1>
                <div className={styles.videoBox}>
                    {/* <Image /> */}
                </div>
            </div>
            <div className={styles.infoBoxes}>
                <div className={styles.infoBox}>
                    <div className={styles.technologyBox}>
                        {/* <Image /> */}
                    </div>
                    <div className={styles.technologyDescription}>
                        არდუინო არდუინო <br />
                        არდუინო არდუინო <br />
                        არდუინო არდუინო <br />
                    </div>
                </div>
                <div className={styles.infoBox}>
                    <div className={styles.technologyBox}>
                        {/* <Image /> */}
                    </div>
                    <div className={styles.technologyDescription}>
                        არდუინო არდუინო <br />
                        არდუინო არდუინო <br />
                        არდუინო არდუინო <br />
                    </div>
                </div>
                <div className={styles.infoBox}>
                    <div className={styles.technologyBox}>
                        {/* <Image /> */}
                    </div>
                    <div className={styles.technologyDescription}>
                        არდუინო არდუინო <br />
                        არდუინო არდუინო <br />
                        არდუინო არდუინო <br />
                    </div>
                </div>
                <div className={styles.infoBox}>
                    <div className={styles.technologyBox}>
                        {/* <Image /> */}
                    </div>
                    <div className={styles.technologyDescription}>
                        არდუინო არდუინო <br />
                        არდუინო არდუინო <br />
                        არდუინო არდუინო <br />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default TechnologyPage;