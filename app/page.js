import Articles from "./components/home/articles/Articles";

export default function Home() {
  return (
    <main style={{ margin: '120px 0px' }}>
      <Articles api={'world'} />
      <Articles api={'politics'} />
    </main>
  )
}
