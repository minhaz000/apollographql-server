const Product = `#graphql
type Product {
  _id:String
  title:String
  des:String
  price:String

}
input Product_Filter {
  _id:StringFilter
  title:StringFilter
  des:StringFilter
  price:StringFilter
}
input StringFilter {
  eq: String
  ne: String
  lt: String
  le: String
  gt: String
  ge: String
  regex: String
  startsWith: String
  allOfTerms: [String!]
  anyOfTerms: [String!]
}
`;
export default Product;
