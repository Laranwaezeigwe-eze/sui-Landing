import MainHeader from "@/component/MainHeader";
import About from "@/component/About";
import Features from "@/component/Features";
import Criteria from "@/component/Criteria";
import Requirement from "@/component/Requirement";
import Action from "@/component/Action";
import Footer from "@/component/Footer";

export default function Home() {
  return (
      <div className={'tw-flex tw-flex-col'}>
      <MainHeader/>
          <About/>
          <Features/>
          <Criteria/>
          <Requirement/>
          <Action/>
          <Footer/>
      </div>
  );
}
