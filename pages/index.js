import { getNotes } from "../repositories";
import HomeUI from "../components/HomeUI";

const Index = ({ notes }) => {
  return <HomeUI notes={notes} />;
};

export const getServerSideProps = async () => {
  const notes = await getNotes();
  return { props: { notes } };
}

export default Index;
