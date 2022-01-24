//Next, React (core node_modules) imports must be placed here
import { useState } from "react";
//import STORE from '@/store'

//import LAYOUT from '@/layouts'

//import VIEWS from '@/views'

//import useFETCHER from '@/tools'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'
import AvatarCard, { placeHolder as AvatarCardPlaceholder } from "@/components/AvatarCard";

import styles from "./Placeholder.module.scss";

const PlaceholderPage = (props) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <main className={styles.container}>
      {(loading && AvatarCardPlaceholder) || (
        <AvatarCard
          profileSrc="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80"
          fullName="Barkhas Tumenbayar"
          jobTitle="Full Stack Developer"
          desc="I have several years of engineering experience under the japanese guidelines. I have a strong background in front-end development and I am currently learning the back-end development."
        />
      )}
    </main>
  );
};

export default PlaceholderPage;
