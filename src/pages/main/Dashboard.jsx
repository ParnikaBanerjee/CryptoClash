import ParticlesComponent from '../../components/main/particle';
import LockedCardDialog from '../../components/main/cards';

const Dashboard = () => {
  // Sample problems data (can be fetched from backend)
  const problems = [ 
    { id: 1, title: "Decrypt the Cipher", author: "John Doe", description: "Can orem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore accusantium quo, expedita voluptates incidunt aperiam ab numquam optio ea suscipit, commodi quaerat sed? Temporibus consectetur eveniet iure non ea? you decode this secret message?", points: 200 },
    { id: 2, title: "SQL Injection", author: "Alice Smith", description: "Find the orem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore accusantium quo, expedita voluptates incidunt aperiam ab numquam optio ea suscipit, commodi quaerat sed? Temporibus consectetur eveniet iure non ea? vulnerability in this database.", points: 300 },
    { id: 3, title: "Reverse Engineering", author: "Bob Johnson", description: "Extract torem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore accusantium quo, expedita voluptates incidunt aperiam ab numquam optio ea suscipit, commodi quaerat sed? Temporibus consectetur eveniet iure non ea?he hidden flag from this binary.", points: 250 },
    { id: 4, title: "XSS Attack", author: "Charlie Brown", description: "Inject a script iorem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore accusantium quo, expedita voluptates incidunt aperiam ab numquam optio ea suscipit, commodi quaerat sed? Temporibus consectetur eveniet iure non ea?nto the web page.", points: 180 },
    { id: 5, title: "Hash Cracking", author: "Eve Hacker", description: "Break this hashorem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore accusantium quo, expedita voluptates incidunt aperiam ab numquam optio ea suscipit, commodi quaerat sed? Temporibus consectetur eveniet iure non ea?ed password.", points: 220 },
    { id: 6, title: "Steganography", author: "Mallory Adams", description: "Find the secret morem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore accusantium quo, expedita voluptates incidunt aperiam ab numquam optio ea suscipit, commodi quaerat sed? Temporibus consectetur eveniet iure non ea?essage inside this image.", points: 270 },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <ParticlesComponent id="particles" className="absolute inset-0 -z-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {problems.map((problem) => (
          <LockedCardDialog key={problem.id} problem={problem} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
