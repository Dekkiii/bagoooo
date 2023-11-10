import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//context
const ExerciseContext = createContext();

const ExerciseProvider = ({ children }) => {
  //state
  const [loading, setLoading] = useState(false);
  const [exercises, setExercises] = useState([]);

  


  //get posts
  const getAllExercise = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('http:10.0.2.2:3000/exercises');
      setLoading(false);
      setExercises(data.exercises);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  

  // inintal  posts
  useEffect(() => {
    getAllExercise();
  }, []);

  
  return (
    <ExerciseContext.Provider value={[exercises, setExercises, getAllExercise]}>
      {children}
    </ExerciseContext.Provider>
  );
};

export { ExerciseContext, ExerciseProvider };