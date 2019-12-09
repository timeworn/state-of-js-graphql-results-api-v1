import { getEntity } from '../helpers.mjs'


const mockToolsBuckets = [
  {
      id: 'Emacs',
      count: 201,
      percentage: 1.78
  },
  {
      id: 'Vim',
      count: 1984,
      percentage: 17.53
  },
  {
      id: 'Webstorm',
      count: 2096,
      percentage: 18.52
  },
  {
      id: 'Atom',
      count: 2487,
      percentage: 21.98
  },
  {
      id: 'Sublime Text',
      count: 3855,
      percentage: 34.06
  },
  {
      id: 'VS Code',
      count: 7994,
      percentage: 70.64
  }
]

export default {
  year: async (opinion, args, context, info) => {
      return {
          year: 2020,
          total: 123,
          completion: { count: 123, percentage: 99 },
          buckets: mockToolsBuckets.map(tool => ({
              entity: getEntity(tool),
              ...tool
          }))
      }
  }
}