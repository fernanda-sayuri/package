import { TagTextProps } from './props'

export const TagText: React.FC<TagTextProps> = ({ status, message }) => {
  const selectedData = {
    sucess: { text: 'text-ligth-success-text', bg: 'bg-ligth-success-text' },
    danger: {
      text: 'text-ligth-failure-bg-strong',
      bg: 'bg-ligth-failure-text',
    },
    warning: { text: 'text-ligth-main-text', bg: 'bg-ligth-main-text' },
  }
  return (
    <div className='flex flex-row items-center gap-2 mt-2'>
      <div className={`w-2 h-2 rounded-lg ${selectedData[status].bg}`}></div>
      <label className={`${selectedData[status].text}`}>{message}</label>
    </div>
  )
}
