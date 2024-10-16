import Image from "next/image";
import Header from '@/app/components/header'
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
      <Header />
      <h1>This is: <br /> Ali dost</h1>
      
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  <br />Natus neque voluptate ducimus! Perspiciatis id expedita voluptatem quisquam, illo velit tempore molestiae vel quis aspernatur adipisci officiis provident, cupiditate nulla. Quod!</p>
      <img src="https://static.toiimg.com/photo/80387978.cms" alt="" />
      
      <Footer/>
    </div>
  );
}
