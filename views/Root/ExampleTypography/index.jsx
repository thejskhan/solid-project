//Next, React (core node_modules) imports must be placed here
import { forwardRef } from "react";
//import STORE from '@/store'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./ExampleTypography.module.scss";

const ExampleTypography = forwardRef((props, ref) => {
  return (
    <section className={`${styles.container} mb-spacer`} ref={ref}>
      <h1 className="mb-soft">Typography</h1>
      <p className="mb-regular">
        Selecting colors, fonts, and sizes for your website is a big part of a
        development process. Solid Project comes with a set of pre-built styles
        that you can use to quickly get your website up and running.
      </p>
      <p className="mb-regular">
        Typography settings are located under{" "}
        <code>sass/base/_typography.scss</code>
      </p>

      <div className={styles.showcase}>
        <h1>Example Heading 1</h1>
        <h2>Example Heading 2</h2>
        <h3>Example Heading 3</h3>
        <h4>Example Heading 4</h4>
        <p>Example Paragraph</p>
      </div>
    </section>
  );
});

export default ExampleTypography;
