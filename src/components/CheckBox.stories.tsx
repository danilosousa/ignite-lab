import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './CheckBox'
import  { Text } from './Text'
export default {
  title: 'Components/Checkbox',
  component:Checkbox,
  argTypes: {},
  decorators:[
    (Story) => {
      return (
        <div className='flex items-center gap-2'>
          {Story()}
          <Text size='sm'>Eu aceito os termos de uso</Text>
        </div>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
