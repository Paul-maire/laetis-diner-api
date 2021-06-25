const { gql } = require('apollo-server')

module.exports = gql`
  scalar JSON
  scalar GraphQLDate
  scalar GraphQLTime
  scalar GraphQLDateTime

  directive @intl on FIELD_DEFINITION

  type Query {
    recipes: [Recipe!]
    recipe(id: Int!): Recipe!

    categories: [Category!]
    category(id: Int!): Category!
  }

  type Mutation {
    saveRecipe(recipe: RecipeInput!): Recipe!
    saveCategory(category: CategoryInput!): Category!
  }

  type Recipe {
    id: Int!
    title: String!

    image: String!

    categories: [Category!]
    categories_id: [Int!]
    difficulty: String! @intl
    done: Boolean!

    preparation_time: Int!
    rest_time: Int!
    baking_time: Int!
    total_time: Int!

    servings: Int!
    ingredients: [String!]!
    utensils: [String!]!

    preparation_steps: [String!]!

    notes: String
  }
  input RecipeInput {
    id: Int
    title: String

    categories_id: [Int!]
    difficulty: String
    done: Boolean

    preparation_time: Int
    rest_time: Int
    baking_time: Int
    total_time: Int


    servings: Int
    ingredients: [String!]
    utensils: [String!]

    preparation_steps: [String!]
    
    notes: String
  }

  type Category {
    id: Int!
    name: String!
    recipes: [Recipe!]
  }
  input CategoryInput {
    id: Int
    name: String
    recipes_id: [Int!]
  }
`