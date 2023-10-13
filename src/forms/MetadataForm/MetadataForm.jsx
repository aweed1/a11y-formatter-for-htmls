import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import styled from "styled-components";
import { accessibilityFeaturesOptions, accessibilityHazardsOptions, formatOptions, remediationAspectsOptions, remediationSourceOptions, remediationStatusOptions, seriesTypeOptions, typeOptions } from './FieldOptions.js'

export const MetadataForm = (props) => {

  // Metadata fields
  const [swatId, setSwatId] = useState(uuidv4())
  const [originalCreator, setOriginalCreator] = useState('')
  const [remediationComplete, setRemdiationComplete] = useState(false)
  const [filename, setFilename] = useState('')
  const [format, setFormat] = useState('')
  const [language, setLanguage] = useState('')
  const [partsRemediated, setPartsRemediated] = useState('')
  const [remediationStatus, setRemediationStatus] = useState('')
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [accessibilityFeatures, setAccessibilityFeatures] = useState([])
  const [accessibilityHazards, setAccessibilityHazards] = useState([])
  const [accessibilitySummary, setAccessibilitySummary] = useState('')
  const [identifiers, setIdentifiers] = useState('')
  const [publisher, setPublisher] = useState('')
  const [relatedIdentifiers, setRelatedIdentifiers] = useState('')
  const [remediationAspects, setRemediationAspects] = useState([])
  const [remediatedBy, setRemediatedBy] = useState('')
  const [remediationDate, setRemediationDate] = useState(Date.now())
  const [seriesPosition, setSeriesPosition] = useState('')
  const [seriesTitle, setSeriesTitle] = useState('')
  const [remediationSource, setRemediationSource] = useState('')
  const [keywords, setKeywords] = useState([])

  // Handle the submission of the metadata form
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>

      <FormField>
        <FieldLabel htmlFor="meta__originalCreator">Original Creator</FieldLabel>
        <TextInput id="meta__originalCreator" value={originalCreator} onChange={e => setOriginalCreator(e.target.value)} />
      </FormField>

      <FormField>
        <FieldLabel htmlFor="meta__filename">Filename</FieldLabel>
        <TextInput id="meta__filename" value={filename} onChange={e => setFilename(e.target.value)} />
      </FormField>

      <FormField>
        <FieldLabel htmlFor="meta__language">Language</FieldLabel>
        <TextInput id="meta__language" value={language} onChange={e => setLanguage(e.target.value)} />
      </FormField>

      <FormField>
        <FieldLabel htmlFor="meta__partsRemediated">Parts Remediated</FieldLabel>
        <TextInput id="meta__partsRemediated" value={partsRemediated} onChange={e => setPartsRemediated(e.target.value)} />
      </FormField>

      <FormField>
        <FieldLabel htmlFor="meta__title">Title</FieldLabel>
        <TextInput id="meta__title" value={title} onChange={e => setTitle(e.target.value)} />
      </FormField>

      <FormField>
        <FieldLabel htmlFor="meta__accessibilitySummary">Accessibility Summary</FieldLabel>
        <TextInput id="meta__accessibilitySummary" value={accessibilitySummary} onChange={e => setAccessibilitySummary(e.target.value)} />
      </FormField>

      <FormField>
        <FieldLabel htmlFor="meta__identifiers">Identifiers</FieldLabel>
        <TextInput id="meta__identifiers" value={identifiers} onChange={e => setIdentifiers(e.target.value)} />
      </FormField>

      <FormField>
        <FieldLabel htmlFor="meta__publisher">Publisher</FieldLabel>
        <TextInput id="meta__publisher" value={publisher} onChange={e => setPublisher(e.target.value)} />
      </FormField>

      <FormField>
        <FieldLabel htmlFor="meta__relatedIdentifiers">Related Identifiers</FieldLabel>
        <TextInput id="meta__relatedIdentifiers" value={relatedIdentifiers} onChange={e => setRelatedIdentifiers(e.target.value)} />
      </FormField>

      <FormField>
        <FieldLabel htmlFor="meta__remediatedBy">Remediated By</FieldLabel>
        <TextInput id="meta__remediatedBy" value={remediatedBy} onChange={e => setRemediatedBy(e.target.value)} />
      </FormField>

      <FormField>
        <FieldLabel htmlFor="meta__seriesPosition">Series Position</FieldLabel>
        <TextInput id="meta__seriesPosition" value={seriesPosition} onChange={e => setSeriesPosition(e.target.value)} />
      </FormField>

      <FormField>
        <FieldLabel htmlFor="meta__seriesTitle">Series Title</FieldLabel>
        <TextInput id="meta__seriesTitle" value={seriesTitle} onChange={e => setSeriesTitle(e.target.value)} />
      </FormField>

    </form>
  )
}


const FormField = styled.div.attrs({ className: `flex flex-col w-100 my-3` })``
const FieldLabel = styled.label.attrs({ className: `pb-1` })``
const TextInput = styled.input.attrs({ className: `border px-2 py-1` })``
