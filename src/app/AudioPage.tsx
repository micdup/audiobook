import Image from 'next/image'
import styles from './page.module.css'
import AudioButton from "@/app/AudioButton";


export interface AudioPageProps {
    label: string,
    page: string,
    width: number,
    height: number,
    audioButtons: Array<any>,
    onAudioPlay: (onAudioPlay: string) => void
}

const AudioPage = ({label, page, width, height, audioButtons, onAudioPlay}: AudioPageProps) => {
    return (
        <div className={styles.container}>
            <Image
                src={"/images/" + page}
                alt="page1"
                width={width}
                height={height}
                priority
            />
            {audioButtons.map(b => {
                const coords = b.coords.split(' ')
                return <AudioButton key={b.key}
                    x={coords[0]} y={coords[1]} width={coords[2]} height={coords[3]}
                    audio={b.audio} onAudioPlay={onAudioPlay}/>
            })}
        </div>
    )
}

export default AudioPage