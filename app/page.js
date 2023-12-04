import Articles from "./components/home/articles/Articles";

export default function Home() {
  return (
    <main style={{ margin: '190px 0px 120px 0px' }}>
      <Articles topic={'politics'} />
      <Articles topic={'business'} />
      <Articles topic={'technology'} />
    </main>
  )
}
