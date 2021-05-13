import axios from "axios";

const BASE_URL = `http://localhost:3000/api`;

export const getNotes = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/notes`);
    return res?.data?.data;
  } catch (error) {
    console.error(`getNotes returned an error:`, error);
  }
};

export const getNoteById = async ({ id }) => {
  try {
    const res = await axios.get(`${BASE_URL}/notes/${id}`);
    return res?.data?.data;
  } catch (error) {
    console.error(`getNoteById returned an error:`, error);
  }
};

export const addNote = async ({ data }) => {
  try {
    const res = await axios.post(`${BASE_URL}/notes`, { ...data });
    return res?.data?.data;
  } catch (error) {
    console.error(`addNote returned an error:`, error);
  }
};

export const editNote = async ({ id, data }) => {
  try {
    const res = await axios.put(`${BASE_URL}/notes/${id}`, { ...data });
    return res?.data?.data;
  } catch (error) {
    console.error(`editNote returned an error:`, error);
  }
};

export const deleteNote = async ({ id }) => {
  try {
    const res = await axios.delete(`${BASE_URL}/notes/${id}`);
    return res?.data?.data;
  } catch (error) {
    console.error(`deleteNote returned an error:`, error);
  }
};
