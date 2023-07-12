import Layout from "@/component/layout";
import Hero from "@/containers/Hero";
import QuerySection from "@/containers/Query section";
import FreshMart from "@/containers/FreshMart section";
import GetApp from "@/containers/get-the-app-section";
import WefreshForBusiness from "@/containers/WeFreshForBusiness";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FreshMart />
      <QuerySection />
      <GetApp />
      <WefreshForBusiness />
    </Layout>
  );
}
