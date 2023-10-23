import {v4 as uuidv4} from 'uuid'
import styled from 'styled-components'
import {
  accessibilityFeaturesOptions,
  accessibilityHazardsOptions,
  formatOptions,
  remediationAspectsOptions,
  remediationSourceOptions,
  remediationStatusOptions,
  seriesTypeOptions,
  typeOptions
} from './FieldOptions.js'
import {SelectField} from './SelectField.jsx'
import {TextField} from './TextField.jsx'
import {FormProvider, useForm} from 'react-hook-form'
import {useDropzone} from 'react-dropzone'
import {useCallback, useState} from 'react'

export const MetadataForm = ({onSubmit}) => {

  // the user-provided HTML file
  const [fileText, setFileText] = useState('')
  // Filename for user-provided HTML file
  const [filename, setFilename] = useState('')
  const [filesize, setFilesize] = useState('')

  const methods = useForm()

  // run this when form is submitting
  const handleSubmit = formData => {
    const templateData = {
      id: uuidv4(),
      ...formData,
      content: fileText
    }

    console.log(templateData)
    onSubmit(templateData)
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
        const txt = textDecoder.decode(buff)
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(txt, 'text/html');
        const body = htmlDoc.querySelector('body')
        setFileText(body.outerHTML)
        setFilename(file.name)
        setFilesize(file.size.toString())
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
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <TextField
          name={'originalCreator'}
          label={'Original Creator *'}
          validations={{required: true}}
        />

        <TextField
          name={'filename'}
          label={'Filename *'}
          validations={{required: true}}
        />

        <SelectField
          name={'remediationComplete'}
          label={'Remediation Complete? *'}
          options={[
            {label: 'Yes', value: 'Yes'},
            {label: 'No', value: 'No'}
          ]}
          validations={{required: true}}
        />

        <SelectField
          name={'format'}
          label={'Format *'}
          options={formatOptions}
          validations={{required: true}}
        />

        <TextField
          name={'language'}
          label={'Language *'}
          validations={{required: true}}
        />

        <TextField
          name={'partsRemediated'}
          label={'Parts Remediated *'}
          validations={{required: true}}
        />

        <TextField
          name={'remediationComments'}
          label={'Remediation Comments'}
        />

        <SelectField
          name={'remediationStatus'}
          label={'Remediation Status *'}
          options={remediationStatusOptions}
          validations={{required: true}}
        />

        <TextField
          name={'title'}
          label={'Title *'}
          validations={{required: true}}
        />

        <SelectField
          name={'type'}
          label={'Remediation Type *'}
          options={typeOptions}
          validations={{required: true}}
        />

        <SelectField
          name={'accessibilityFeatures'}
          label={'A11y Features'}
          multiple={true}
          options={accessibilityFeaturesOptions}
        />

        <SelectField
          name={'accessibilityHazards'}
          label={'A11y Hazards'}
          multiple={true}
          options={accessibilityHazardsOptions}
        />

        <TextField
          name={'accessibilitySummary'}
          label={'Accessibility Summary'}
        />

        <TextField
          name={'identifiers'}
          label={'Identifiers'}
        />

        <TextField
          name={'publisher'}
          label={'Publisher'}
        />

        <TextField
          name={'relatedIdentifiers'}
          label={'Related Identifiers'}
        />

        <SelectField
          name={'remediationAspects'}
          label={'Remediation Aspects'}
          options={remediationAspectsOptions}
        />

        <TextField
          name={'remediatedBy'}
          label={'Remediated By *'}
          validations={{required: true}}
        />

        <TextField
          name={'seriesPosition'}
          label={'Series Position'}
        />

        <TextField
          name={'seriesTitle'}
          label={'Series Title'}
        />

        <SelectField
          name={'seriesType'}
          label={'Series Type'}
          options={seriesTypeOptions}
        />

        <SelectField
          name={'remediationSource'}
          label={'Remediation Source'}
          options={remediationSourceOptions}
        />

        <p className={`text-2xl my-3`}>Upload your HTML file</p>
        <div
          {...getRootProps()}
          className={`border-4 p-5 my-3 ${fileText.length > 0 ? 'border-solid border-green-500 bg-green-400 text-black' : 'border-dashed border-sky-500'}`}
        >
          <input {...getInputProps()} />
          {fileText.length > 0 ? <>
            <p>Uploaded {filename} - {filesize} bytes</p>
            <p>Drag 'n' drop some files here, or click to replace {filename}</p>
          </>: <p>Drag 'n' drop some files here, or click to select files</p>}
        </div>

        <SubmitButton type={'submit'} disabled={!methods.formState.isValid || fileText.length <= 1}>Submit</SubmitButton>
      </form>
    </FormProvider>
  )
}

const SubmitButton = styled.button.attrs({
  className: 'rounded-sm bg-indigo-600 text-white py-1 px-3 disabled:bg-gray-300'
})``
