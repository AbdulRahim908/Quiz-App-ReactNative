import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
const [currentQuestion,setCurrentQuestion]=useState(0);
const[score,setscore]=useState(0);
const[showScore,setShowScore]=useState(false);
const quizData=[
  {
    question:"what is capital of pakistan?",
    options:['lahore','karachi','islamabad'],
    answer:"islamabad"
  },
  {
    question:"what is capital of India?",
    options:['lahore','karachi','delhi'],
    answer:"delhi"
  },
  {
    question:"what is capital of Germany?",
    options:['lahore','karachi','frankfurt'],
    answer:"frankfurt"
  },
  {
    question:"what is capital of Russia?",
    options:['lahore','berlin','delhi'],
    answer:"berlin"
  },
  {
    question:"what is capital of Afghanistan?",
    options:['Kabul','karachi','delhi'],
    answer:"Kabul"
  }
];
const handleAnswer=(selectedAnswer)=>{
  const answer=quizData[currentQuestion]?.answer;
  if(answer==selectedAnswer){
    setscore((prevscore)=>prevscore+1);
  }
  const nextQuestion=currentQuestion+1;
  if(nextQuestion<quizData.length){
    setCurrentQuestion(nextQuestion);
  }
  else{
    setShowScore(true);
  }
  // else{
  //   alert("Wrong Answer")
  // }

}
const handReset=()=>{
  setCurrentQuestion(0);
  setscore(0);
  setShowScore(false);
}

  return (
    <View style={styles.container}>
      {
        showScore ?  <View>
          <Text style={styles.optionStyle}>{score}</Text> 
          <TouchableOpacity onPress={handReset}>
            <Text style={styles.resetButon}>Reset</Text>
            
          </TouchableOpacity>
          </View>
        :
      
    
      <View style={styles.questionContainer}>
        <Text style={styles.questionStyle}>{quizData[currentQuestion]?.question}</Text>
        {quizData[currentQuestion]?.options.map((item)=>{
          return<TouchableOpacity onPress={()=>{
            handleAnswer(item)
          }} style={styles.optionContainer}>
            <Text style={styles.optionStyle}>{item}</Text>
          </TouchableOpacity>

        })}
      </View>
      }
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer:{
    backgroundColor:'@DDDDD',
    padding:10,
    margin:10,
    borderRadius:5
  },
  optionStyle:{
    color:'green',
    padding:5,
    alignSelf:'center',
    fontSize:30,
    fontWeight: "bold"
  },
  optionContainer:{
    borderColor:'black',
    borderWidth:2,
    marginTop:15,
    
    
  },
  questionStyle:{
    color:'blue',
    fontSize:25,
    fontWeight: "bold"
  },
  resetButon:{
    fontSize:30,
    paddingHorizontal:10,
    fontWeight: "bold"
  }


});
