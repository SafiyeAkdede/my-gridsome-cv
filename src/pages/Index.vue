<template>
  <Layout>
    <div class="container-fluid p-0">
      <About />
      <hr class="m-0" />
      <Contact />
      <hr class="m-0" />
      <Informations />
      <hr class="m-0" />
      <Experiences />
      <hr class="m-0" />
      <Studies />
      <hr class="m-0" />
      <Skills />
      <hr class="m-0" />
      <Languages />
    </div>
  </Layout>
</template>
<script>
import About from "../components/About";
import Experiences from "../components/Experiences";
import Studies from "../components/Studies";
import Contact from "../components/Contact";
import Informations from "../components/Informations";
import Skills from "../components/Skills";
import Languages from "../components/Languages";

export default {
  components: {
    About,
    Contact,
    Informations,
    Experiences,
    Studies,
    Skills,
    Languages
  },
  metaInfo: {
    title: "Safiye Akdede"
  }
};
</script>