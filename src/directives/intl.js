const { SchemaDirectiveVisitor } = require("apollo-server")
const { defaultFieldResolver } = require("graphql")
const i18next = require('i18next')
const locales = require('../locales')

const i18n = i18next.init({
    lng: 'fr',
    debug: process.env.NODE_ENV == 'development',
    resources: locales
})

class IntlDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const { resolve = defaultFieldResolver } = field

        field.resolve = async function (...args) {
            const result = await resolve.apply(this, args)

            if (typeof result === "string")
                i18n.then(t => t(result))

            return result
        }
    }
}

module.exports = IntlDirective