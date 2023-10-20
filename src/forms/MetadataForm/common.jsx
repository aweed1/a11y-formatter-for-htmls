import styled from 'styled-components'
import {useFormContext} from 'react-hook-form'

export const ConnectForm = ({children}) => {
  const methods = useFormContext()
  return children({...methods})
}

export const Field = styled.div.attrs({
  className: `flex flex-col w-100 my-3`
})``
export const Error = styled.div.attrs({className: 'text-red-500'})``
export const Label = styled.label.attrs({className: 'pb-1'})``
