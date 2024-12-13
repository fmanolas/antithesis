import "./globals.css"; // Import global styles if needed
import styles from "./page.module.css"; // Adjust to match your structure if needed

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.headlineContainer}>
        <h1 className={styles.headline}>Antithesis</h1>
      </div>
      <img
        src="/antithesis.gif"
        alt="Centered animation"
        className={styles.centeredGif}
      />
      <div className={styles.content}>
        <div className={styles.description}>
          <p className="mt-2">
            Introducing <strong>ANTITHESIS (ANTITH)</strong> the coin that
            disrupts the narrative. In a market full of repetition,{" "}
            <strong>ANTITHESIS</strong> is the bold, unapologetic challenger,
            built on the lightning-fast Solana blockchain. It’s for those who
            dare to question, reject the status quo, and redefine what’s
            possible in crypto. ANTITHESIS isn’t just a token it’s a revolution
            in your wallet, a symbol of innovation, and a stand against the
            ordinary. <strong>ANTITHESIS (ANTITH):</strong> The future doesn’t
            follow trends it creates them.
          </p>
        </div>
        {/* Call-to-Action Button */}
        <div className={styles.ctaRow}>
          <p>ca</p>
        </div>
        {/* Social Icons */}
        <div className={styles.socialRow}>
          <a
            href="https://x.com/antithesisonsol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/x.png" alt="Twitter" className={styles.icon} />
          </a>
          <a
            href="https://t.me/antithesisportal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/telegram.webp" alt="Facebook" className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
}
