<template>
	<Navbar selected-id="assessment"/>
	<main class="app">
		<h1>Self-assessment</h1>
		
		<section class="quiz" v-if="!quizCompleted">
			<div class="quiz-info">
				<span class="question">{{ GetCurrentQuestion().question }}</span>
				<!--<span class="score">Score {{ score }}/{{ questions.length }}</span>-->
			</div>
			
			<div class="options">
				<label 
					v-for="(option, index) in GetCurrentQuestion().options " :key="option"
					:for="'option' + index" 
					:class="`option ${
            //this now only checks on what answer you clicked, not if it's right or wrong
						GetCurrentQuestion().selected == index? 'selected' : 'not-selected'
					} ${
						GetCurrentQuestion().selected != null &&
						index != GetCurrentQuestion().selected
							? 'disabled'
							: ''
					}`">
					<input 
						type="radio" 
						:id="'option' + index" 
						:name="GetCurrentQuestion().options[index]" 
						:value="index" 
						v-model="GetCurrentQuestion().selected" 
						:disabled="GetCurrentQuestion().selected == null ? false : true"
						@change="SetAnswer" 
					/>
					<span>{{ option }}</span>
				</label>
			</div>
			
			<button 
				@click="NextQuestion" 
				:disabled="!GetCurrentQuestion().selected">
				{{ 
					currentQuestion == questions.length - 1 ? 'Finish' : GetCurrentQuestion().selected == null? 'Select an option' : 'Next question'
				}}
			</button>
		</section>

		<section v-else>
			<h2>You have finished the self-assessment!</h2>
			<!--<p>Your score is {{ score }}/{{ questions.length }}</p>-->
		</section>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/NavBar.vue'
import { getFirestore, setDoc, doc } from '@firebase/firestore';

export default defineComponent({
  name: 'AsessmentPage',
  components: {
    Navbar
  },
  data() {
    return {
      questions: [
        {
          question: 'I use digital technologies to work together with colleagues inside and outside my educational organization',
          topic: 'communication',
          options: [
            'I rarely have the opportunity to collaborate with other teachers',
            'Sometimes I exchange materials with colleagues, e.g. via e-mail',
            'Among colleagues, we work together in collaborative environments or use shared drives',
            'I exchange ideas and materials, also with teachers outside my organization, e.g. in an online teacher network',
            'I jointly create materials with other teachers in an online network'
          ],
          selected: null
        },
        {
          question: 'I actively develop my digital teaching skills',
          topic: 'communication',
          options: [
            'I rarely have the time to work on my digital teaching skills',
            'I improve my skills through reflection and experimentation',
            'I use a  range of resources to develop my digital teaching skills',
            'I discuss with peers how to use digital technologies to innovate and improve educational practice',
            'I help colleagues in developing their digital teaching strategies'
          ],
          selected: null
        },
        {
          question: 'I effectively protect sensitive content, e.g. exams, students’ grades, personal data',
          topic: 'security',
          options: [
            'I do not need to do that, because the school takes care of this',
            'I avoid storing personal data electronically',
            'I protect some personal data',
            'I password protect files with personal data',
            'I comprehensively protect personal data, e.g. combining hard-to-guess passwords with encryption and frequent software updates'
          ],
          selected: null
        },
        {
          question: 'I create my own digital resources and modify existing ones to adapt them to my needs',
          topic: 'security',
          options: [
            'I do not create my own digital resources',
            'I do create worksheets with a computer, but then I print them',
            'I create digital presentations, but not much more',
            'I create and modify different types of resources',
            'I set up and adapt complex, interactive resources'
          ],
          selected: null
        },
        {
          question: 'When my students work in groups or teams, they use digital technologies to acquire and document evidence',
          topic: 'tools',
          options: [
            'My students do not work in groups ',
            'It is not possible for me to integrate digital technologies into group work',
            'I encourage students working in groups to search for information online or to present their results in digital format',
            'I require students working in teams to use the internet to find information and present their results in a digital format',
            'My students exchange evidence and jointly create knowledge in a collaborative online space'
          ],
          selected: null
        },
        {
          question: 'I use digital technologies to allow students to plan, document and monitor their learning themselves (e.g. quizzes for self-assessment, ePortfolios for documentation and showcasing, online diaries/blogs for reflection)',
          topic: 'tools',
          options: [
            'Not possible in my work environment',
            'My students do reflect on their learning, but not with digital technologies',
            'Sometimes I use, for example quizzes for self-assessment',
            'I use a variety of digital tools to allow learners to plan, document or reflect on their learning',
            'I systematically integrate different digital tools to allow learners to plan, monitor and reflect on their progress '
          ],
          selected: null
        }
      ] as { question: string; topic: string; options: string[]; selected: null; }[],
      quizCompleted: false as boolean,
      currentQuestion: 0 as number,
      scoreCommunication: 0 as number,
      scoreSecurity: 0 as number,
      scoreTools: 0 as number,
      userId: this.$userId.toString()
    }
  },
  methods: {
    GetCurrentQuestion() {
      let question = this.questions[this.currentQuestion]
      return question
    },
    SetAnswer(e: any) {
      this.questions[this.currentQuestion].selected = e.target.value
      if (this.questions[this.currentQuestion].selected == null) return
      this.scoreCommunication += this.questions[this.currentQuestion].topic == "communication" ? +this.questions[this.currentQuestion].selected! + 1 : 0
      this.scoreSecurity += this.questions[this.currentQuestion].topic == "security" ? +this.questions[this.currentQuestion].selected! + 1 : 0
      this.scoreTools += this.questions[this.currentQuestion].topic == "tools" ? +this.questions[this.currentQuestion].selected! + 1 : 0
    },
    NextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) this.currentQuestion++
      else {
        this.quizCompleted = true
        this.UpdateUserScore()
      }
    },
    async UpdateUserScore() {
      const db = getFirestore()
      await setDoc(doc(db, "Users", this.userId), {
        communication: this.scoreCommunication,
        security: this.scoreSecurity,
        tools: this.scoreTools
      })
    }
  }
});
</script>

<style scoped>
.app {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
}

h1 {
	font-size: 2rem;
	margin-bottom: 2rem;
}

.quiz {
	background-color: var(--gray);
	padding: 1rem;
	width: 100%;
	max-width: 640px;
}

.quiz-info {
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;
}

.quiz-info .question {
	color: var(--darkblue);
	font-size: 1.25rem;
}

.quiz-info.score {
	color: var(--gray);
	font-size: 1.25rem;
}

.options {
	margin-bottom: 1rem;
}

.option {
	padding: 1rem;
	display: block;
	background-color: #cccccc;
	margin-bottom: 0.5rem;
	border-radius: 0.5rem;
	cursor: pointer;
}

.option:hover {
	background-color: var(--orange);
}
.option.disabled:hover {
  background-color: #cccccc;
}

.option.selected {
	background-color: var(--lightblue);
}

.option:last-of-type {
	margin-bottom: 0;
}

.option.disabled {
	opacity: 0.5;
}

.option input {
	display: none;
}

button {
	appearance: none;
	outline: none;
	border: none;
	cursor: pointer;
	padding: 0.5rem 1rem;
	background-color: var(--orange);
	color: var(--gray);
	font-weight: 700;
	text-transform: uppercase;
	font-size: 1.2rem;
	border-radius: 0.5rem;
}

button:disabled {
	opacity: 0.5;
}
</style>
