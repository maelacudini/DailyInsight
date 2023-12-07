import Articles from "./components/home/articles/Articles";

export default function Home() {
  return (
    <main style={{ margin: '140px 0px 40px 0px' }}>
      <Articles category={'science'} />
      <Articles category={'technology'} />
      <Articles category={'business'} />
    </main>
  )
}
