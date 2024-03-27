'use client'
import { useState, Fragment } from 'react'
import { SearchProjectsProps } from '@/types/index'
import { Combobox, Transition } from '@/node_modules/@headlessui/react/dist/index'
import Image from '@/node_modules/next/image'
import { projects } from '@/constants/index'

const SearchProjects = ({ project, setProject }: SearchProjectsProps) => {
  const [query, setQuery] = useState('')

  const filteredProjects =
    query === ''
      ? projects
      : projects.filter((item) => (
        item.toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      ))

  return (
    <div className='search-project'>
      <Combobox value={project} onChange={setProject}>
        <div className='relative w-full'>

          <Combobox.Button className='absolute top-[14px]'>
            <Image src='/magnifying-glass.svg' width={20} height={20} className='ml-4' alt='gc-logo' />
          </Combobox.Button>

          <Combobox.Input
            className='search-project__input'
            placeholder='The Graph'
            displayValue={(project: string) =>
              project}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave='transition ease-in duration-80'
            leaveFrom='opacity-80'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {filteredProjects.length === 0 && query !== '' ? (
                <Combobox.Option value={query} className='search-project__option'>
                  '{query}' not found
                </Combobox.Option>
              ) : (
                filteredProjects.map((item) => (
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={({ active }) => `relative search-project__option
                    ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}
                    `}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox >
    </div >
  )
}

export default SearchProjects