import ThemeToggler from "@/components/ThemeToggler";

import styles from "./Root.module.scss";

const RootPage = (props) => {
  return (
    <main className={styles.container}>
      <h1>Hello World!</h1>
      <ThemeToggler />
      <h1>THIS IS HEADING 1</h1>
      <h2>THIS IS HEADING 2</h2>
      <h3>THIS IS HEADING 3</h3>
      <h4>THIS IS HEADING 4</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, incidunt
        vitae! Voluptates minus quia dignissimos voluptatum fugiat eveniet est
        voluptatibus sed, inventore deserunt, totam non id? Ipsum natus dolor
        error.
      </p>
    </main>
  );
};

export default RootPage;
