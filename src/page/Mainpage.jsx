import styles from '../styles/Mainpage.module.css'

export default function Mainpage() {
    return (
        <div className={styles.background_video_content}>
            <video src="/mainpageVideo/background.mp4" autoPlay muted loop></video>

            <div className={styles.video_dec}>
                <div className={styles.video_dec_content}>
                    <a href=""><p>Try System M1.</p></a>

                </div>

            </div>
        </div>

    )
}