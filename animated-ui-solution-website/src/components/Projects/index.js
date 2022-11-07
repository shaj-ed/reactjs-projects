import styles from "./Projects.module.css";
import filmo from "./../../assets/work-one.png";
import neuroe from "./../../assets/work-two.png";
import tracker from "./../../assets/work-three.png";
import orixFood from "./../../assets/work-four.png";
import aesthetic from "./../../assets/work-five.jpg";
import art from "./../../assets/work-six.jpg";
import SingleProjects from "../SingleProjects";

const projects = [
  {
    id: 0,
    title: "filmo",
    thumb: filmo,
  },
  {
    id: 1,
    title: "neuro ",
    thumb: neuroe,
  },
  {
    id: 2,
    title: "tracker",
    thumb: tracker,
  },
  {
    id: 3,
    title: "orix food",
    thumb: orixFood,
  },
  {
    id: 4,
    title: "aesthetic",
    thumb: aesthetic,
  },
  {
    id: 5,
    title: "art",
    thumb: art,
  },
  {
    id: 6,
    title: "tracker",
    thumb: tracker,
  },
  {
    id: 7,
    title: "filmo",
    thumb: filmo,
  },
  {
    id: 8,
    title: "orix food",
    thumb: orixFood,
  },
  {
    id: 9,
    title: "art",
    thumb: art,
  },
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      {projects.map((project) => {
        const { id, title, thumb } = project;
        return <SingleProjects key={id} title={title} thumb={thumb} />;
      })}
    </section>
  );
};

export default Projects;
