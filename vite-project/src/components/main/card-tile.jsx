import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

function QuestionCard({ question, onSubmit }) {
  const [answer, setAnswer] = useState("");

  return (
    <Card className="w-full max-w-md mx-auto bg-black text-[#00FF41] border border-[#00FF41] p-4">
      <CardContent>
        <h2 className="text-2xl font-bold mb-2">{question.title}</h2>
        <p className="text-lg mb-4">{question.description}</p>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full p-2 rounded-md bg-[#1A1A1A] text-[#00FF41] border border-[#00FF41] focus:outline-none"
          placeholder="Enter your answer..."
        />
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          className="bg-[#00FF41] text-black hover:bg-[#00CC33]"
          onClick={() => onSubmit(answer)}
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}

export default QuestionCard;
