import { Tab as TabUi } from '@headlessui/react'
import { TabProps } from './props'

/**
     - Categories as a string array, on change return index from category selected
 **/
export const Tab = ({ onChange, categories }: TabProps) => {
  return (
    <div className='w-full p-2 py-4 sm:px-0 '>
      <TabUi.Group onChange={onChange}>
        <TabUi.List className='flex space-x-1 w-full border-x-0 border-t-0  gap-4 border border-b-1 border-state-400/20'>
          {categories.map((category) => (
            <TabUi
              className={({ selected }) =>
                selected
                  ? 'text-blue-900 px-4 border-b-2 pb-3  border-blue-900  focus:outline-0'
                  : 'pb-3 px-4'
              }
              key={category}
            >
              {category}
            </TabUi>
          ))}
        </TabUi.List>
      </TabUi.Group>
    </div>
  )
}

