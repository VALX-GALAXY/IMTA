import { Toaster as Sonner } from 'sonner'

export function Toaster(props) {
  return (
    <Sonner
      position="top-center"
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast: '!rounded-xl !border !border-border !bg-surface !text-ink !shadow-surface',
          title: '!text-sm !font-semibold',
          description: '!text-sm !text-earth',
        },
      }}
      {...props}
    />
  )
}
