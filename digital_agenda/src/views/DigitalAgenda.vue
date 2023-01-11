<template>
  <div class="main">
    <Navbar selected-id="agenda"/>
    <div class="poster" id="communication-poster">
      <section>
        <h1>Professional Engagement</h1>
        <p>
          Digital <strong>Communication</strong> a basic set of rules you should follow to make the Internet a <strong>better place for yourself</strong> and for others. 
          Just as there are rules of etiquette in real life, face-to-face encounters, there are also rules you should follow while online.
        </p>
      </section> 
      <!--<img class="infographic" src="../../public/assets/Communication_V2.png" alt="Infographic Communication" loading="lazy" usemap="#workmap">-->
      <svg class="infographic" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6912 3456">
        <image width="6912" height="3456" xlink:href="../../public/assets/Communication_V2.png"></image> 
        <a>
          <rect x="300" y="640" fill="#fff" opacity="0" width="900" height="950" @click="ZoomContent(
            'Do not send every 1-2 words as a separate message from what you are attempting to write.'
          )"></rect>
        </a><a>
          <rect x="1911" y="640" fill="#fff" opacity="0" width="900" height="950" @click="ZoomContent(
            'Also, don’t use too many exclamation points. Both of them read like screams.'
          )"></rect>
        </a><a>
          <rect x="3525" y="640" fill="#fff" opacity="0" width="900" height="950" @click="ZoomContent(
            'Spelling and punctuation were created for a purpose. Make an attempt to write correctly even if you’re texting while on the go.'
          )"></rect>
        </a><a>
          <rect x="5150" y="640" fill="#fff" opacity="0" width="900" height="950" @click="ZoomContent(
            'When sending a link to text, audio, or video to your opponent, it is always best to introduce what you are forwarding quickly. Otherwise, it may appear to be spam, an advertisement, or a virus.'
          )"></rect>
        </a><a>
          <rect x="1102" y="1744" fill="#fff" opacity="0" width="900" height="950" @click="ZoomContent(
            'You never know what kind of mood someone may be in when they get your message. So say hello in the beginning of the message if you are having first conversation of the day.'
          )"></rect>
        </a><a>
          <rect x="2696" y="1744" fill="#fff" opacity="0" width="900" height="950" @click="ZoomContent(
            'We feel it is ideal to send audio messages to someone only if both of you agree on this mode of communication.'
          )"></rect>
        </a><a>
          <rect x="4290" y="1744" fill="#fff" opacity="0" width="900" height="950" @click="ZoomContent(
            'Use emoji as a garnish: they can give a hint of meaning, but they should not be the major focus of the message.'
          )"></rect>
        </a><a>
          <rect x="5890" y="1744" fill="#fff" opacity="0" width="900" height="950" @click="ZoomContent(
            'Stick to the same application where you received the message, for example, if you received a query in an e-mail, do not move to a messenger to react. Alternatively, phone/video call to discuss in depth.'
          )"></rect>
        </a>
      </svg>
    </div>
    <h1 id="poster-content" class="no-show" @click="ZoomContent('')"></h1>
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
        <h1>Digital Security</h1>
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
      const poster = document.getElementById('communication-poster')
      console.log(poster)
      if (hex == null) return
      hex!.textContent = content
      poster!.style.opacity = poster!.style.opacity == '0.5'? '1' : '0.5'
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
rect {
  cursor: pointer;
}
#poster-content {
  cursor: pointer;
  
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  background-color: var(--gray);
  border: 1px solid var(--darkblue);
  border-radius: 0 14px 0 14px;
  padding: 1.6rem;
  font-weight: 300;
}
.no-show {
  display: none;
}
</style>