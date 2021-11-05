import React, {useState} from "react";
import  styles from'./App.module.css';
import {useHistory} from "react-router-dom";
function JuegoSumaL1(){
    let history = useHistory();
    const questions = [
		{
			questionText: ' 9 + 8 = ',
			answerOptions: [
				{ answerText: '18', isCorrect: false },
				{ answerText: '14', isCorrect: false },
				{ answerText: '17', isCorrect: true  },
				{ answerText: '16', isCorrect: false },
			],
		},
		{
			questionText: '5 + 3 =',
			answerOptions: [
				{ answerText: '7', isCorrect: false },
				{ answerText: '8', isCorrect: true },
				{ answerText: '10', isCorrect: false },
				{ answerText: '9', isCorrect: false },
			],
		},
		{
			questionText: '6 + 7 = ',
			answerOptions: [
				{ answerText: '13', isCorrect: true },
				{ answerText: '12', isCorrect: false },
				{ answerText: '11', isCorrect: false },
				{ answerText: '14', isCorrect: false },
			],
		},
		{
			questionText: '2 + 5 = ',
			answerOptions: [
				{ answerText: '8', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);



	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
			
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    return  (
		
        <div className = {styles.ini}>
			<button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/Tab1");
                 }         
             }>
                🠔atras
            </button>
        <div className={styles.ap}>
			{showScore ? (
				<div className={styles.scoresection}>
					Tu puntuacion es de {score} sobre {questions.length}
				</div>
			) : (
				<>
					<div className={styles.questionsection}>
						<div className={styles.questioncount}>
							<span>Pregunta {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className={styles.questiotext}>{questions[currentQuestion].questionText}</div>
					</div>
					<div className={styles.answersection}>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className = {styles.bt} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
                      
				</>
			)}
		</div>
        </div>
    );
    
}

export default JuegoSumaL1;