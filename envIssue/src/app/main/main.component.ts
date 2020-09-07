declare let alertify: any;
import { Component, Input } from '@angular/core';
import { QuestionsService } from '../Questions.service';
import { Question } from '../Question';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: [ './main.component.css' ]
})
export class MainComponent {
	questionList: Question[] = this.QuestionService.getQuestionList();
	currQuestionIndex: number = 0;
	currCorrectAnswers: number = 0;
	currAnswers: number = 0;

	constructor(private QuestionService: QuestionsService) {}

	collapse(event: any, question: Question) {
		const item: HTMLElement = event.target;

		if (item.classList.contains('disabled'))
			alertify.error(
				'Nah!! The following questions may contain spoiled information. You must complete the questions in order.'
			);
		else question.disabled = !question.disabled;
	}

	answerHandler(event: any, index: number) {
		if (index == this.currQuestionIndex) {
			// user answered the lastest question
			const item: HTMLElement = event.target;
			const inputAnswer: number = +item.id;
			const currQuestion = this.QuestionService.getQuestion(this.currQuestionIndex);
			if (currQuestion == null) return;
			const correctAnswer = currQuestion.correctAnswer;

			if (inputAnswer == correctAnswer) {
				item.classList.add('correct');
				currQuestion.isCorrect = 'Correct!';
				this.currCorrectAnswers++;
			} else item.classList.add('incorrect');

			currQuestion.isAnswered = true;
			this.currQuestionIndex++;
		} else {
			alertify.warning('This question has been answered!');
		}
	}
}
