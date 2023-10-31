import Image from 'next/image'
import styles from './page.module.css'


export interface AudioButtonProps {
    x: number,
    y: number,
    width: number,
    height: number,
    audio: string,
    onAudioPlay: (string) => void
}

const AudioButton = ({x, y, width, height, audio, onAudioPlay}: AudioButtonProps) => {
    return (
            <button
                className={styles.audioButton}
                style={{
                    top: x +"px",
                    left: y + "px",
                    width: width + "px",
                    height: height + "px",
                }}
                onClick={e => {onAudioPlay("audio/" + audio)}}
                ></button>
    )
}

export default AudioButton