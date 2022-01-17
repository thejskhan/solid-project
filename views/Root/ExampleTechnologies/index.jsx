//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./ExampleTechnologies.module.scss";

const ExampleTechnologies = (props) => {
  return (
    <section className={`${styles.container} mb-spacer`}>
      <h1 className="mb-soft">Technologies</h1>
      <p className="mb-hard">
        The following packages are hand-picked and maintained to have 0
        vulnerabilities. Not only does this ensure that your project is safe, it
        also makes development process frictionless. In addition, with these
        packages as our foundation, we create countless custom and optimized
        solutions for you to use.
      </p>
      <h2 className="mb-regular">List of Dependencies</h2>
      <ul className="mb-hard ml-regular">
        <li className="mb-regular">
          <a
            rel="noopener noreferrer"
            target="_blank"
            title="Next Homepage"
            href="https://nextjs.org/"
          >
            Next.js
          </a>{" "}
          - React Framework for building a production-ready web
        </li>
        <li className="mb-regular">
          <a
            rel="noopener noreferrer"
            target="_blank"
            title="React Homepage"
            href="https://reactjs.org/"
          >
            React
          </a>{" "}
          - JavaScript library for creating a component-based user interfaces
        </li>
        <li className="mb-regular">
          <a
            rel="noopener noreferrer"
            target="_blank"
            title="Next Auth Homepage"
            href="https://next-auth.js.org/"
          >
            Next Auth
          </a>{" "}
          - Authentication and Authorization for Next.js
        </li>
        <li className="mb-regular">
          <a
            rel="noopener noreferrer"
            target="_blank"
            title="MongoDB Homepage"
            href="https://www.mongodb.com/"
          >
            MongoDB
          </a>{" "}
          - NoSQL Database
        </li>
        <li className="mb-regular">
          <a
            rel="noopener noreferrer"
            target="_blank"
            title="Mongoose Homepage"
            href="https://mongoosejs.com/"
          >
            Mongoose
          </a>{" "}
          - MongoDB Object Modeling Tool
        </li>
        <li className="mb-regular">
          <a
            rel="noopener noreferrer"
            target="_blank"
            title="Axios Homepage"
            href="https://axios-http.com/"
          >
            Axios
          </a>{" "}
          - Promise based HTTP client
        </li>
        <li className="mb-regular">
          <a
            rel="noopener noreferrer"
            target="_blank"
            title="SWR Homepage"
            href="https://swr.vercel.app/"
          >
            SWR
          </a>{" "}
          - React Hook for fetching data from a remote API
        </li>
        <li className="mb-regular">
          <a
            rel="noopener noreferrer"
            target="_blank"
            title="Framer Motion Homepage"
            href="https://www.framer.com/motion/"
          >
            Framer Motion
          </a>{" "}
          - Production-ready Animation Library for React
        </li>
        <li className="mb-regular">
          <a
            rel="noopener noreferrer"
            target="_blank"
            title="Styled Components Homepage"
            href="https://styled-components.com/"
          >
            Styled Components
          </a>{" "}
          - CSS in JS library
        </li>
        <li className="mb-regular">
          <a
            rel="noopener noreferrer"
            target="_blank"
            title="Styled Icon Homepage"
            href="https://styled-icons.dev/"
          >
            Styled Icons
          </a>{" "}
          - React Component Library for SVG Icons
        </li>

        <li className="mb-regular">
          <a
            rel="noopener noreferrer"
            target="_blank"
            title="Sass Homepage"
            href="https://sass-lang.com/"
          >
            Sass
          </a>{" "}
          - CSS Extension Language for managing variables, mixins, functions
        </li>
      </ul>

      <p>
        Check the <code>package.json</code> for the full list of dependencies.
      </p>
    </section>
  );
};

export default ExampleTechnologies;
