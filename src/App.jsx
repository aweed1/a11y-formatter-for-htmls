import { useState } from 'react'
import TemplateComponent from 'react-mustache-template-component'
import styled from 'styled-components'

const template = `<h1>{{title}}</h1>`;
const data = { title: 'Some Title' };

export const App = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className={`w-screen h-screen max-w-screen max-h-screen flex flex-row`}>
      <div className={`w-1/2 p-3 border-r-2`}>
        <h2>Editor</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <label htmlFor="meta__title">Document Title</label>
            <input id="meta__title" type="text" className={`border`} value={title} onChange={e => setTitle(e.target.value)}/>
          </FormField>
          <FormField>
            <label htmlFor="meta__description">Document Description</label>
            <input id="meta__description" type="description" className={`border`} value={description} onChange={e => setDescription(e.target.value)}/>
          </FormField>
        </form>
      </div>
      <div className={`w-1/2 p-3 border-l-2`}>
        <div>
          <h2>Preview</h2>
        </div>
        <div>
          <TemplateComponent template={template} data={data} />
        </div>
      </div>
    </div>
  )
}

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
`