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

export const MetadataForm = () => {

  const methods = useForm()

  // run this when form is submitting
  const onSubmit = formData => {
    const templateData = {
      id: uuidv4(),
      ...formData
    }
    console.log(templateData)
    return templateData
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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

        <SubmitButton type={'submit'}>Submit</SubmitButton>
      </form>
    </FormProvider>
  )
}

const SubmitButton = styled.button.attrs({
  className: 'rounded-sm bg-indigo-600 text-white py-1 px-3'
})``
