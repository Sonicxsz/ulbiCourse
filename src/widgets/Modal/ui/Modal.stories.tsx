import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Modal } from "./Modal"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"

export default {
  title: "widget/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal isVisible {...args}>This is the Modal </Modal>

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})

Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]




