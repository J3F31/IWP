<template>
  <Navbar selected-id="home"/>
  <div class="main">
    <span class="grid"></span>
    <img src="../../public/assets/ErasmusMerge.png" alt="Erasmus+" class="erasmus">
    <h1>DIGITAL TRANSFORMATION</h1>
    <section class="info">
      <h2>We are IGNITION</h2>
      <p>
        Welcome to the IGNITION platform, where you can increase your level of <strong>digital literacy</strong>. 
        We are IGNITION which is an Erasmus plus partnership involving multiple European Higher Education Institutions. 
        Our goal with this platform is to provide new <strong>digital tools</strong>> that help improve and strengthen digital literacy within the educational field.
      </p>
    </section>
    <section class="info">
      <h2>Our Digital Agenda</h2>
      <p>
        In order to provide the necessary information for the improvement of digital literacy, we created an <strong>agenda</strong>. 
        This agenda contains information about the different topics that are required for the educational field to improve and strengthen digital literacy among their staff.
      </p>
      <router-link to="/agenda" class="agenda-link">Read the digital agenda</router-link>
    </section>
    <div class="boxes">
      <section class="community">
        <img src="../../public/assets/Hexagon_Dark_Blue_Open.png" alt="hexagon" class="hex">
        <h2>Community of Teachers</h2>
        <p>
          Not only do we provide the necessary information for the educational field, we also provide 
          a <strong>welcoming environment</strong> for teachers and staff to <strong>discuss, share and request</strong> guidance to help 
          improve and strengthen digital literacy. This community is available for all users at any given time, 
          allowing everyone to feel <strong>connected</strong> with their work field.
        </p>
        <router-link to="/forum" class="forum-link">Join the community!</router-link>
      </section>
      <section class="skills">
        <h2>Assess Your Skills</h2>
        <p>
          If you feel that your digital literacy skills are already on par, why not partake in our <strong>personal assessment tool</strong> and quiz yourself on your knowledge. 
          For each mastered subject, you receive a <strong>badge</strong> that allows you to show your proficiency to others and assure them that you can help those who could use some tips.
        </p>
        <router-link to="/assessment" class="assessment-link">Test your skills now</router-link>
      </section>
    </div>
  </div>  
</template>
  
<script lang='ts'>
import { defineComponent } from 'vue';
import Navbar from '../components/NavBar.vue'

export default defineComponent({
  name: 'homePage',
  components: {
    Navbar
  }
});

</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/chalkduster');
.main {
  margin: 5rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
h1 {
  font-family: 'Chalkduster', sans-serif;
  color: var(--orange);
  margin: 0 0 1rem 0;
}
h2 {
  color: var(--darkblue);
  margin: 0 0 1rem 0;
}
strong {
  color: var(--lightblue);
}
a {
  color: var(--orange);
}
.info {
  width: 60%;
}
.boxes {
  display: flex;
  margin-top: 2rem;
}
.boxes section {
  width: 40%;
  padding: 1.6rem;
}
.community {
  background-color: #fbdfd3;
  position: relative;
}
.skills {
  background-color: #d9eef9;
}
.erasmus {
  position: absolute;
  right: 12%;
  width: 15%;
}
.grid {
  background-image: url('../../public/assets/Grid.png');
  background-repeat: repeat-y;
  background-size: 100% auto;
  z-index: -1;
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
  width: 20%;
  height: 100%;
}
.hex {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  margin-left: -25px;
  margin-top: -25px;
}
</style>
