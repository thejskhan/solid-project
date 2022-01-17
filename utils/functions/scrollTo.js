import { polyfill } from "smoothscroll-polyfill";

const scrollTo = (ref, offset) => {
  polyfill();
  window.scrollBy({
    top: ref.current.getBoundingClientRect().top - offset,
    behavior: "smooth",
  });
};

export default scrollTo;
