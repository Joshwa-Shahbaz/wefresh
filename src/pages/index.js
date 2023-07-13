import Layout from "@/component/layout";
import Hero from "@/containers/Hero";
import QuerySection from "@/containers/Query section";
import FreshMart from "@/containers/FreshMart section";
import GetApp from "@/containers/get-the-app-section";
import WefreshForBusiness from "@/containers/WeFreshForBusiness";
import OurPartners from "@/containers/our-partners-section";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FreshMart />
      <OurPartners />
      <QuerySection />
      <GetApp />
      <WefreshForBusiness />
    </Layout>
  );
}
