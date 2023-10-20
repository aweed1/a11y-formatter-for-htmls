import {ConnectForm, Error, Field, Label} from './common.jsx'

export const SelectField = ({options, label, name, validations, value, multiple}) => {
  return (
    <ConnectForm>
      {({register, formState}) => (
        <Field>
          <Label htmlFor={name}>{label}</Label>
          <select
            id={name}
            className={'border px-2 py-1'}
            aria-invalid={formState?.errors?.[name] ? 'true' : 'false'}
            value={value}
            multiple={multiple}
            {...register(name, validations)}
          >
            {options.map(option => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          {formState?.errors?.[name] &&
            formState?.errors?.[name]?.type === 'required' && (
              <Error role={'alert'}>{label} is required</Error>
            )}
        </Field>
      )}
    </ConnectForm>
  )
}
