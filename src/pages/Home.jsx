import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"

function Home() {
  return (
    <>
      <h1 className="text-6xl">Miaow!</h1>
      <div>{Math.random() * 100}</div>
      <UserSearch />
      <UserResults />
    </>
  )
}

export default Home