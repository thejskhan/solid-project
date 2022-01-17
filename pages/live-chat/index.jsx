//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

//import LAYOUT from '@/layouts'

//import VIEWS from '@/views'

//import useFETCHER from '@/tools'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./Live-chat.module.scss";

const LiveChatPage = (props) => {
  return (
    <main className={`${styles.container} mt-hard`}>
      <h1 className={`${styles.heading} mb-soft`}>Live Chat</h1>
      <div className={`${styles.content} mb-regular`}>
        <div className={styles.messageContainer}>
          <span className={styles.username}>Username</span>
          <span className={styles.message}>Message1</span>
        </div>
        <div className={styles.messageContainer}>
          <span className={styles.username}>Username</span>
          <span className={styles.message}>Message2</span>
        </div>
        <div className={styles.messageContainer}>
          <span className={styles.username}>Username</span>
          <span className={styles.message}>Message3</span>
        </div>
      </div>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Type your message here"
        />
        <button className="primaryButton">Илгээх</button>
      </form>
    </main>
  );
};

export default LiveChatPage;
