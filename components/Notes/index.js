import { useState } from 'react'
import Router from 'next/router'
import { addNote, editNote } from '../../repositories'
import {
  AddEditWrp,
  Form,
  Input,
  TextArea,
  Submit
} from './style'

const AddEditForm = ({ _id, title, description }) => {

  const [ data, setData ] = useState({ noteTitle: title ?? '', noteDescription: description ?? '' })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
      e.preventDefault()
      const title = data?.noteTitle ?? ''
      const description = data?.noteDescription ?? ''
      if(_id) {
          const res = await editNote({ id: _id, data: { title, description } })
          if(res) {
            Router.push('/')
          }
      } else {
        const res = await addNote({ data: { title, description } })
        if(res) {
          Router.push('/')
        }
      }
  }
  
  const { noteTitle, noteDescription } = data

  return (
      <AddEditWrp>
          <Form onSubmit={handleSubmit}>
              <Input type="text" placeholder={`Enter title`} value={noteTitle} onChange={handleChange} name="noteTitle" />
              <TextArea placeholder={`Enter description`} onChange={handleChange} name="noteDescription" value={noteDescription} />
              <Submit>
                  { _id ? 'Update Note' : '+ Add Note' }
              </Submit>
          </Form>
      </AddEditWrp>
  )
}

export default AddEditForm
