import {ConnectForm, Label, Field, Error} from './common.jsx'

export const TextField = ({label, name, type, validations}) => {
  return (
    <ConnectForm>
      {({register, formState}) => (
        <Field>
          <Label htmlFor={name}>{label}</Label>
          <input
            id={name}
            className="border px-2 py-1"
            aria-invalid={formState?.errors?.[name] ? 'true' : 'false'}
            type={type}
            {...register(name, validations)}
          />
          {formState?.errors?.[name] &&
            formState?.errors?.[name]?.type === 'required' && (
              <Error role={'alert'}>{label} is required</Error>
            )}
        </Field>
      )}
    </ConnectForm>
  )
}
