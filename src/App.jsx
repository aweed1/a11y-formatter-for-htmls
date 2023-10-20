import {useCallback, useState} from 'react'
import TemplateComponent from 'react-mustache-template-component'
import styled from 'styled-components'
import {baseTemplate} from './templates/baseTemplate.js'
import './App.css'
import mustache from 'mustache'
import {useDropzone} from 'react-dropzone'
import {MetadataForm} from './forms/MetadataForm/MetadataForm.jsx'

export const App = () => {
  const [viewMode, setViewMode] = useState('preview') // Can be 'preview' or 'code'

  // Generaete the HTML code for the output view by passing the supplied metadata through the mustache template
  const getCodeOutput = () => {
    return mustache.render(baseTemplate, {})
  }

  // Handle what happens when a file is dropped into the dropzone
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

  // Set up react-dropzone to accept only html files
  const {getRootProps, getInputProps} = useDropzone({
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
          <MetadataForm />
        </div>
        <div className={`border p-3`}>
          <h2 className={`text-2xl mb-3`}>Document Upload</h2>

          <div
            {...getRootProps()}
            className={`border-dashed border-4 border-sky-500 p-5`}
          >
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </div>
      </div>
      <div className={`w-1/2 border-l-2`}>
        <div className="flex flex-row justify-end my-3">
          <Button
            disabled={viewMode === 'code'}
            onClick={() => setViewMode('code')}
          >
            Show Code
          </Button>
          <Button
            disabled={viewMode === 'preview'}
            onClick={() => setViewMode('preview')}
          >
            Show Preview
          </Button>
          <Button>Export to HTML</Button>
        </div>
        <div className="p-3">
          <div className={`border p-3`}>
            {viewMode === 'preview' && (
              <TemplateComponent
                template={baseTemplate}
                data={{}}
              />
            )}
            {viewMode === 'code' && (
              <div>
                <code>{getCodeOutput()}</code>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Button = styled.button.attrs({
  className: `border rounded disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 px-2 py-1 me-2 text-sm`
})``
