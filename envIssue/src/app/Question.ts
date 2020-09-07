export class Question {
	public question: string;
	public answers: string[];
	public disabled: boolean;
	public correctAnswer: number;
	public fact: string;
	public source: string[];
	public isAnswered: boolean;
	public isCorrect: string;
	public correctLetter: string;
	constructor(question: string, answers: string[], correctAnswer: number, fact: string, source: string[]) {
		this.disabled = false;
		this.question = question;
		this.answers = answers;
		this.correctAnswer = correctAnswer;
		this.fact = fact;
		this.source = source;
		this.isAnswered = false;
		this.isCorrect = 'Incorrect!';

		switch (correctAnswer) {
			case 0: {
				this.correctLetter = 'A';
				break;
			}
			case 1: {
				this.correctLetter = 'B';
				break;
			}
			case 2: {
				this.correctLetter = 'C';
				break;
			}
			default:
				this.correctLetter = 'D';
		}
	}
}
