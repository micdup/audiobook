'use client';

import styles from './page.module.css'
import AudioPage from "@/app/AudioPage";
import Pages from 'public/pages.json'

export default function Home() {

  const onAudioPlay = (audio: string) => {
    console.log("CLICK AUDIO: " + audio)
//    console.log(JSON.stringify(Config))
    new Audio(audio).play()
  }

  return (
    <main className={styles.main}>
      { Pages.map(p => <AudioPage key={p.label}
        label={p.label}
        page={p.page}
        width={p.width} height={p.height}
        audioButtons={p.audio_buttons} onAudioPlay={onAudioPlay}/>) }
    </main>
  )
}
