import {useState} from 'react'
import styled from 'styled-components'
import {baseTemplate} from './templates/baseTemplate.js'
import './App.css'
import mustache from 'mustache'
import {MetadataForm} from './forms/MetadataForm/MetadataForm.jsx'
import beautify from 'beautify'

export const App = () => {
  const [viewMode, setViewMode] = useState('preview') // Can be 'preview' or 'code'
  const [templateOutput, setTemplateOutput] = useState('')
  const [previewBody, setPreviewBody] = useState('')

  // Generate the HTML code for the output view by passing the supplied metadata through the mustache template
  const getCodeOutput = (templateData = {}) => {
    return mustache.render(baseTemplate, templateData)
  }

  const handleSubmit = formValues => {
    const code = getCodeOutput({ ...formValues })
    setPreviewBody(formValues.content)
    const beautified = beautify(code, { format: 'html' })
    setTemplateOutput(beautified)
  }

  return (
    <div className={`w-screen h-screen max-w-screen max-h-screen flex flex-row`}>
      <div className={`w-1/2 p-3 border-r-2 overflow-auto`}>
        <div className={`border p-3 mb-3`}>
          <h2 className={`text-2xl mb-3`}>Document Metadata</h2>
          <MetadataForm onSubmit={handleSubmit} />
        </div>
      </div>
      <div className={`w-1/2 border-l-2 overflow-auto`}>
        <div className="flex flex-row justify-end my-3 sticky top-0" style={{ background: '#eeeeee'}}>
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
              <div
                id="preview"
                dangerouslySetInnerHTML={{ __html: previewBody }} />
            )}
            {viewMode === 'code' && (
              <code style={{whiteSpace: 'pre'}}>
                {templateOutput}
              </code>
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
