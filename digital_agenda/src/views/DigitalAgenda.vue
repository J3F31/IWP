<template>
  <div class="main">
    <Navbar selected-id="agenda"/>
    <div class="poster">
      <section>
        <h1>Professional Engagement</h1>
        <p>
          Digital <strong>Communication</strong> a basic set of rules you should follow to make the Internet a <strong>better place for yourself</strong> and for others. 
          Just as there are rules of etiquette in real life, face-to-face encounters, there are also rules you should follow while online.
        </p>
      </section> 
      <img class="infographic" src="../../public/assets/Communication_V2.png" alt="Infographic Communication" loading="lazy" usemap="#workmap">
    </div>

    <div class="poster">
      <section>
        <h1>Digital Resources</h1>
        <p>
          Educators are currently confronted with a wealth of <strong>digital (educational) resources</strong> they can use for teaching. One of the 
          key competences any educator needs to develop is to come to terms with this variety, to effectively identify resources 
          that best fit their learning objectives, learner group and teaching style, to structure the wealth of materials, establish 
          connections and to modify, add on to and develop themselves digital resources to support their teaching.
        </p>
      </section>
      <img class="infographic" src="../../public/assets/Infographic_Tools.png" alt="Infographic Tools" loading="lazy">
      
    </div>

    <div class="poster">
      <section>
        <h1>Data Security</h1>
        <p>
          Digital technologies can enhance and improve teaching and learning strategies in many different ways. However, whatever 
          pedagogic strategy or approach is chosen, the educator’s specific digital competence lies in effectively orchestrating the use 
          of digital technologies in the different phases and settings of the learning process.
          <br><br>
          At the same time they need to be aware of how to responsibly use and manage digital content. They must respect 
          copyright rules when using, modifying and sharing resources, and protect sensitive content and data, such as digital 
          exams or students’ grades.
        </p>
      </section>
      <img class="infographic" src="../../public/assets/Infographic_Security.png" alt="Infographic Security" loading="lazy">
      
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Navbar from '../components/NavBar.vue'

export default defineComponent({
  name: 'DigitalAgenda',
  components: {
    Navbar
  },
  methods: {
    ZoomContent(content: string) {
      const hex = document.getElementById('poster-content')
      hex?.classList.toggle('no-show')
      console.log(hex)
      if (hex == null) return
      hex!.textContent = content
    }
  }
});
</script>

<style scoped>
.main {
  background-color: var(--gray);
  overflow: hidden;
  text-align: center;
}
.poster{
  height: auto;
  margin: 0;
  padding: 2rem;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.poster p{
  font-size: 15px;
  height: auto;
  width: 80%;
  font-size: 18px;
  margin: auto;
  padding: 2rem;
}
.poster h1{
  height: auto;
  width: 80%;
  margin: auto;
  padding: 2rem 2rem 0 2rem;
  color: var(--darkblue);
  font-size: 30px;
}
.infographic {
  height: 80%;
  width: 80%;
  object-fit: contain;
  margin: auto;
  margin-bottom: 3rem;
  padding: 2rem;
}
strong {
  color: var(--orange);
}
</style>