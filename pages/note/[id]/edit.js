import { getNoteById } from "../../../repositories";
import AddEdit from "../../../components/Notes";

const EditNote = ({ note }) => {
  return <AddEdit {...note} />;
};

EditNote.getInitialProps = async (ctx) => {
  const note = await getNoteById({ id: ctx?.query?.id });
  return { note };
};

export default EditNote;
