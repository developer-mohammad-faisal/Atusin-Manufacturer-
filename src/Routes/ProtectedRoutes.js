import Purchase from '../Pages/Purchase'

const ProtectedRoutes = [
  { path: "/purchase/:id", name: "Purchase", Component: Purchase },
]

export default ProtectedRoutes