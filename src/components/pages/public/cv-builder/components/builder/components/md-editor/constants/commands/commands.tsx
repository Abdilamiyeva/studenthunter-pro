import {ICommand, TextAreaTextApi, TextState, commands} from '@uiw/react-md-editor'
import {BoldIcon, ItalicIcon, StrikeThroughIcon, UnderlineIcon} from '../../icons'

export const COMMANDS: ICommand[] = [
  {
    ...commands.bold,
    buttonProps: {
      ...commands.bold.buttonProps,
      'aria-label': 'Add bold text (ctrl+b)',
      title: 'Add bold text (ctrl+b)',
      className: '!h-7 !text-blue',
    },
    shortcuts: 'ctrlcmd+b',
    icon: <BoldIcon />,
  },
  {
    ...commands.italic,
    buttonProps: {
      ...commands.bold.buttonProps,
      'aria-label': 'Add italic text (ctrl+i)',
      title: 'Add italic text (ctrl+i)',
      className: '!h-7 !text-blue',
    },
    shortcuts: 'ctrlcmd+i',
    icon: <ItalicIcon />,
  },
  {
    name: 'underline',
    keyCommand: 'underline',
    buttonProps: {
      'aria-label': 'Add underlined text (ctrl+u)',
      title: 'Add underlined text (ctrl+u)',
      className: '!h-7 !text-blue',
    },
    icon: <UnderlineIcon />,
    execute: (state: TextState, api: TextAreaTextApi) => {
      if (state.selectedText) {
        return api.replaceSelection(`<u>${state.selectedText}</u>`)
      }

      const state1 = api.setSelectionRange({
        start: api.textArea.selectionEnd,
        end: api.textArea.selectionEnd,
      })
      // Replaces the current selection with the strikethrough mark up
      const state2 = api.replaceSelection(`<u>${state1.selectedText}</u>`)

      api.setSelectionRange({
        start: state2.selection.end - 4 - state1.selectedText.length,
        end: state2.selection.end - 4,
      })
    },
  },
  {
    ...commands.strikethrough,
    buttonProps: {
      ...commands.bold.buttonProps,
      'aria-label': 'Add strikethroughed text (ctrl+d)',
      title: 'Add strikethroughed text (ctrl+d)',
      className: '!h-7 !text-blue',
    },
    icon: <StrikeThroughIcon />,
  },
]
