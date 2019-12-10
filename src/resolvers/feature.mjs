import { computeFeatureUsageByYear } from '../analysis/index.mjs'

export default {
    FeatureExperience: {
        allYears: async (feature, args, context, info) => {
            return await computeFeatureUsageByYear(context.db, feature.id)
        },
        year: async (feature, args, context, info) => {
            const allYears = await computeFeatureUsageByYear(context.db, feature.id)
            return allYears.find(yearItem => yearItem.year === args.year)
        }
    }
}
