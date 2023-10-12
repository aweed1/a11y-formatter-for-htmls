import {useCallback, useState} from 'react'
import TemplateComponent from 'react-mustache-template-component'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { baseTemplate } from "./templates/baseTemplate.js";
import './App.css'
import mustache from 'mustache'
import { useDropzone } from "react-dropzone";

const guid = uuidv4()
const resourceType = 'html'

export const App = () => {

  const [id, setId] = useState(guid)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [publisher, setPublisher] = useState('')
  const [subject, setSubject] = useState('')
  const [date, setData] = useState(new Date())
  const [source, setSource] = useState('')
  const [creator, setCreator] = useState('')
  const [format, setFormat] = useState('')
  const [license, setLicense] = useState('')
  const [lang, setLang] = useState('eng')
  const [viewMode, setViewMode] = useState('preview') // Can be 'preview' or 'code'

  const handleSubmit = e => {
    e.preventDefault()
  }

  const getCodeOutput = () => {
    return mustache.render(baseTemplate, {
      title,
      description,
      publisher,
      subject,
      date,
      source,
      creator,
      format,
      license,
      lang,
      body: '<h2>Placeholder</h2><p>Placeholder content</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
    })
  }


  const handleDrop = useCallback(files => {

    const textDecoder = new TextDecoder('utf-8')

    files.forEach(file => {
      const reader = new FileReader()

      reader.onabort = () => console.log('FileReader was aborted')
      reader.onerror = () => console.log('FileReader error')
      reader.onload = () => {
        const buff = reader.result
        console.log(textDecoder.decode(buff))
      }
      reader.readAsArrayBuffer(file)
    })

  }, [])


  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: {
      'text/html': ['.html', '.htm']
    }
  })

  return (
    <div className={`w-screen h-screen max-w-screen max-h-screen flex flex-row`}>
      <div className={`w-1/2 p-3 border-r-2`}>
        <div className={`border p-3 mb-3`}>
          <h2 className={`text-2xl mb-3`}>Document Metadata</h2>
          <form onSubmit={handleSubmit}>
            <FormField>
              <FieldLabel htmlFor="meta__id">Id</FieldLabel>
              <TextInput id="meta__id" readOnly value={id}/>
            </FormField>
            <FormField>
              <FieldLabel htmlFor="meta__title">Title</FieldLabel>
              <TextInput  id="meta__title" type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            </FormField>
            <FormField>
              <FieldLabel htmlFor="meta__description">Description</FieldLabel>
              <TextInput  id="meta__description" type="text" value={description} onChange={e => setDescription(e.target.value)}/>
            </FormField>
            <FormField>
              <FieldLabel htmlFor="meta__publisher">Publisher</FieldLabel>
              <TextInput  id="meta__publisher" type="text" value={publisher} onChange={e => setPublisher(e.target.value)}/>
            </FormField>
            <FormField>
              <FieldLabel htmlFor="meta__resource-type">Resource Type</FieldLabel>
              <TextInput  id="meta__resource-type" type="text" readOnly value={resourceType} />
            </FormField>
            <FormField>
              <FieldLabel htmlFor="meta__lang">Language</FieldLabel>
              <TextInput  id="meta__lang" type="text" value={lang} maxLength={3} onChange={e => setLang(e.target.value)}/>
            </FormField>
          </form>
        </div>
        <div className={`border p-3`}>
          <h2 className={`text-2xl mb-3`}>Document Upload</h2>

          <div {...getRootProps()} className={`border-dashed border-4 border-sky-500 p-5`}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>

          {/*<div {...getRootProps()} style={{ width: 400, height: 400, border: '1px solid black' }}>*/}
          {/*  <div {...getInputProps()}>*/}
          {/*    <p>Drag and drop HTML file(s) here, or click to select.</p>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
      <div className={`w-1/2 border-l-2`}>
        <div className="flex flex-row justify-end my-3">
          <Button disabled={viewMode === 'code'} onClick={() => setViewMode('code')}>Show Code</Button>
          <Button disabled={viewMode === 'preview'} onClick={() => setViewMode('preview')}>Show Preview</Button>
          <Button>Export to HTML</Button>
        </div>
        <div className="p-3">
          <div className={`border p-3`}>
            {viewMode === 'preview' && <TemplateComponent
              template={baseTemplate}
              data={{
                title,
                description,
                publisher,
                subject,
                date,
                source,
                creator,
                format,
                license,
                lang,
                body: '<h2>Placeholder</h2><p>Placeholder content</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
              }} />}
              {viewMode === 'code' && <div><code>{getCodeOutput()}</code></div>}
          </div>
        </div>
      </div>
    </div>
  )
}

const Button = styled.button.attrs({ className: `border rounded disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 px-2 py-1 me-2 text-sm` })``
const FormField = styled.div.attrs({ className: `flex flex-col w-100 my-3` })``
const FieldLabel = styled.label.attrs({ className: `pb-1` })``
const TextInput = styled.input.attrs({ className: `border px-2 py-1` })``