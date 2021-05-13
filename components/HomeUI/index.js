import Link from "next/link";
import Router from 'next/router'
import { deleteNote } from '../../repositories'
import {
  HomeWrp,
  CardWrp,
  CardTitle,
  ButtonWrp,
  EditButton,
  DeleteButton,
  CardDescription,
} from "./style";


const Home = ({ notes }) => {

  const handleDeleteClick = async ({ id }) => {
    await deleteNote({ id })
    Router.push('/')
  }

  return (
    <HomeWrp>
      {notes?.map((note) => {
        const { _id, title, description } = note;
        return (
          <CardWrp key={_id}>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <ButtonWrp>
              <Link href={`note/${_id}/edit`}>
                <EditButton>Edit</EditButton>
              </Link>
              <DeleteButton onClick={() => handleDeleteClick({ id: _id })}>Delete</DeleteButton>
            </ButtonWrp>
          </CardWrp>
        );
      })}
    </HomeWrp>
  );
};

export default Home;
