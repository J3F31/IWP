<!-- <template>
  <Navbar/>
  <section>
    <h1>Example</h1>
    <p>This will be a asessmrnt agenda!</p>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Navbar from '../components/NavBar.vue'

export default defineComponent({
  name: 'AsessmentPage',
  components: {
    Navbar
  }
});
</script> -->

<template>
	<main class="app">
		<h1>The Quiz</h1>
		
		<section class="quiz" v-if="!quizCompleted">
			<div class="quiz-info">
				<span class="question">{{ GetCurrentQuestion().question }}</span>
				<span class="score">Score {{ score }}/{{ questions.length }}</span>
			</div>
			
			<div class="options">
				<label 
					v-for="(option, index) in GetCurrentQuestion().options " :key="option"
					:for="'option' + index" 
					:class="`option ${
						GetCurrentQuestion().selected == index 
							? index == GetCurrentQuestion().answer 
								? 'correct' 
								: 'wrong'
							: ''
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
					currentQuestion == questions.length - 1 ? 'Finish' : GetCurrentQuestion().selected == null ? 'Select an option' : 'Next question'
				}}
			</button>
		</section>

		<section v-else>
			<h2>You have finished the quiz!</h2>
			<p>Your score is {{ score }}/{{ questions.length }}</p>
		</section>
    <button @click="Return">HOME</button>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import router from '@/router';

export default defineComponent({
  name: 'AsessmentPage',
  data() {
    return {
      questions: [
        {
          question: 'What is Vue?',
          answer: 0,
          options: [
            'A framework',
            'A library',
            'A type of hat'
          ],
          selected: null
        },
        {
          question: 'What is Vuex used for?',
          answer: 2,
          options: [
            'Eating a delicious snack',
            'Viewing things',
            'State management'
          ],
          selected: null
        },
        {
          question: 'What is Vue Router?',
          answer: 1,
          options: [
            'An ice cream maker',
            'A routing library for Vue',
            'Burger sauce'
          ],
          selected: null
        }
      ] as { question: string; answer: number; options: string[]; selected: null; }[],
      quizCompleted: false as boolean,
      currentQuestion: 0 as number,
      score: 0 as number
    }
  },
  methods: {
    GetCurrentQuestion() {
      let question = this.questions[this.currentQuestion]
      return question
    },
    SetAnswer(e: any) {
      this.questions[this.currentQuestion].selected = e.target.value
      if (this.questions[this.currentQuestion].selected != this.questions[this.currentQuestion].answer) return
      this.score++
    },
    NextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) this.currentQuestion++
      else this.quizCompleted = true
    },
    Return() {
      router.push("/homePage")
    }
  }
});
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Montserrat', sans-serif;
}

body {
	background-color: #271c36;
	color: #FFF;
}

.app {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	height: 100vh;
}

h1 {
	font-size: 2rem;
	margin-bottom: 2rem;
}

.quiz {
	background-color: #382a4b;
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
	color: #8F8F8F;
	font-size: 1.25rem;
}

.quiz-info.score {
	color: #FFF;
	font-size: 1.25rem;
}

.options {
	margin-bottom: 1rem;
}

.option {
	padding: 1rem;
	display: block;
	background-color: #271c36;
	margin-bottom: 0.5rem;
	border-radius: 0.5rem;
	cursor: pointer;
}

.option:hover {
	background-color: #2d213f;
}

.option.correct {
	background-color: #2cce7d;
}

.option.wrong {
	background-color: #ff5a5f;
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
	background-color: #2cce7d;
	color: #2d213f;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 1.2rem;
	border-radius: 0.5rem;
}

button:disabled {
	opacity: 0.5;
}

h2 {
	font-size: 2rem;
	margin-bottom: 2rem;
	text-align: center;
}

p {
	color: #8F8F8F;
	font-size: 1.5rem;
	text-align: center;
}
</style>
