'use client'
import Image from 'next/image';
import styles from './TeammateBox.module.scss';

interface Props {
    name: string;
    image: string;

}

const TeammateBox = (props: Props) => {
    return <div className={styles.container}>
        <Image className={styles.image} src={props.image} alt={'teamate image'} width={142} height={142} />
        <span className={styles.title}>
            {props.name}
        </span>
    </div>
}

export default TeammateBox;