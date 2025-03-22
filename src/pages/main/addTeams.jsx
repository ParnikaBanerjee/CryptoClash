import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Dialog, DialogContent } from "../../components/ui/dialog";
import { HyperText } from "../../components/magicui/hyper-text";
import ParticlesComponent from "../../components/main/particle";

const MainTeam = () => {
  const [teamCode, setTeamCode] = useState("");
  const [inputCode, setInputCode] = useState(new Array(6).fill(""));
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showJoinDialog, setShowJoinDialog] = useState(false);

  // Generate a random 6-digit numeric team code
  const generateTeamCode = () => {
    let code = Math.floor(100000 + Math.random() * 900000).toString();
    setTeamCode(code);
    setShowCreateDialog(true);
  };

  // Handle OTP-style input change
  const handleInputChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // Allow only numbers

    let newInput = [...inputCode];
    newInput[index] = value;
    setInputCode(newInput);

    // Move focus to the next input field automatically
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Handle joining a team
  const handleJoinTeam = () => {
    const enteredCode = inputCode.join("");
    if (enteredCode.length !== 6) {
      alert("Please enter a valid 6-digit team code!");
      return;
    }
    console.log(`Joining team with code: ${enteredCode}`);
    setShowJoinDialog(false);
    setInputCode(new Array(6).fill(""));
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white p-6">
      {/* Particles Background */}
      <ParticlesComponent id="particles" className="absolute inset-0 -z-10" />

      <h1 className="text-4xl font-bold text-[#00FF00] mb-6">
        <HyperText>ADD TEAM</HyperText>
      </h1>

      {/* Buttons to Create or Join a Team */}
      <div className="flex gap-6">
        <Button
          className="bg-[#00FF00] hover:bg-[#ADFF2F] text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          onClick={generateTeamCode}
        >
          Create Team Code
        </Button>

        <Button
          className="bg-[#FF3131] hover:bg-[#FF6347] text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          onClick={() => setShowJoinDialog(true)}
        >
          Join Team Code
        </Button>
      </div>

      {/* Create Team Dialog */}
      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogContent className="bg-[#121212] border-[#00FF00] border-2 shadow-lg text-white p-6 rounded-lg transition-all duration-300">
          <h2 className="text-2xl font-bold text-[#ADFF2F] mb-4">Team Code Created</h2>
          <motion.div
            className="text-3xl font-bold text-[#00FF00] bg-[#1A1A1A] px-6 py-4 rounded-lg border-2 border-[#ADFF2F] shadow-md text-center"
            whileHover={{ scale: 1.1 }}
          >
            {teamCode}
          </motion.div>
        </DialogContent>
      </Dialog>

      {/* Join Team Dialog */}
      <Dialog open={showJoinDialog} onOpenChange={setShowJoinDialog}>
        <DialogContent className="bg-[#121212] border-[#FF3131] border-2 shadow-lg text-white p-6 rounded-lg transition-all duration-300">
          <h2 className="text-2xl font-bold text-[#FF3131] mb-4">Join a Team</h2>

          {/* OTP-style 6 Input Boxes */}
          <div className="flex justify-center gap-3">
            {inputCode.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(e.target.value, index)}
                className="w-12 h-12 text-2xl text-center bg-[#1A1A1A] border-2 border-[#FF3131] text-white rounded-md focus:ring-4 focus:ring-[#FF6347] transition-all duration-300"
              />
            ))}
          </div>

          <Button
            className="w-full bg-[#FF3131] hover:bg-[#FF6347] text-black font-semibold py-3 rounded-lg mt-4 transition-all duration-300 transform hover:scale-105"
            onClick={handleJoinTeam}
          >
            Join Team
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MainTeam;
