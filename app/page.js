import Articles from "./components/home/articles/Articles";
import Clock from "./components/home/clock/Clock";

export default function Home() {
  return (
    <main style={{ margin: '190px 0px 120px 0px' }}>
      {/* <Clock /> */}
      <Articles api={'politics'} />
      <Articles api={'politics'} />
    </main>
  )
}
