import React, {useState} from "react";
import  styles from'./Practica.module.css';
import {useHistory} from "react-router-dom";

export function PMP(){
    let history = useHistory();
    const questions = [
		{
			questionText: '101x33',
			answerOptions: [
				{ answerText: '3135', isCorrect: false },
				{ answerText: '3133', isCorrect: false },
				{ answerText: '3333', isCorrect: true  },
				{ answerText: '3331', isCorrect: false },
			],
		},
		{
			questionText: '123x10',
			answerOptions: [
				{ answerText: '1330', isCorrect: false },
				{ answerText: '1230', isCorrect: true },
				{ answerText: '1303', isCorrect: false },
				{ answerText: '1302', isCorrect: false },
			],
		},
		{
			questionText: '213x4',
			answerOptions: [
				{ answerText: '852', isCorrect: true },
				{ answerText: '885', isCorrect: false },
				{ answerText: '892', isCorrect: false },
				{ answerText: '845', isCorrect: false },
			],
		},
		{
			questionText: '365x143',
			answerOptions: [
				{ answerText: '52.195', isCorrect: true },
				{ answerText: '52.745', isCorrect: false },
				{ answerText: '54.775', isCorrect: false },
				{ answerText: '54.325', isCorrect: false },
			],
		},
		{
			questionText: '245x456',
			answerOptions: [
				{ answerText: '111.720', isCorrect: false },
				{ answerText: '111.450', isCorrect: false },
				{ answerText: '110.321', isCorrect: false },
				{ answerText: '110.720', isCorrect: true },
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
                     history.push("/LecMNP");
                 }         
             }>
                ????atr??s
            </button>
			<h1 className={styles.tituloP}>MULTIPLICACI??N - NIVEL PLANTA</h1>
        <div className={styles.ap}>
			{showScore ? (
				<div className={styles.scoresection}>
					<p className={styles.respuesta}>Tu puntuacion es:</p>
					<p className={styles.respuesta}>{score} sobre {questions.length}</p>
				</div>
			) : (
				<>
					<div className={styles.questionsection}>
						<div className={styles.questioncount}>
							<h1 className={styles.titulo}>Pregunta {currentQuestion + 1}/{questions.length}</h1>	
						</div>
						<div className={styles.questiontext}>{questions[currentQuestion].questionText}</div>
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
export default PMP;

