import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@samity/base/schema-type'
import testimonials from './testimonials'
export default createSchema({
    name:'default',
    types:schemaTypes.concat([
        testimonials
    ]),
})
