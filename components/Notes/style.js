import styled, { css } from "styled-components";

const commonFormStyling = css`
  border-radius: 4px;
  box-shadow: 2px 2px 5px #e1e2e3;
  padding: 0.9rem;
  width: 100%;
`;

export const NotesWrp = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3f3f3;
  padding: 2rem;
  flex-direction: column;
`;

export const NoteTitle = styled.h2`
  color: black;
  margin-bottom: 1rem;
`;
export const NoteDesc = styled.p`
  font-size: 0.9rem;
  color: black;
`;
export const AddEditWrp = styled(NotesWrp)``;

export const Form = styled.form`
  max-width: 20rem;
`;
export const Input = styled.input`
  ${commonFormStyling};
  margin-bottom: 0.6rem;
`;
export const TextArea = styled.textarea`
  ${commonFormStyling};
  margin-bottom: 1.2rem;
  resize: none;
  outline: none;
  border: none;
  min-height: 6rem;
`;
export const Submit = styled.button`
  ${commonFormStyling};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  background-color: rgb(21,55,93);
  color: #fff;
`;
