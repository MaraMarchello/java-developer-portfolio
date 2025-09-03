import React from 'react';

// Matrix animation component
export const MatrixAnimation = () => {
  return (
    <div className="matrix-animation h-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-black text-green-400 font-mono text-xs leading-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${(i * 20) % 100}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="opacity-50">
                {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-green-400 font-mono text-sm animate-pulse">
          Wake up, Neo... The Matrix has you...
        </div>
      </div>
    </div>
  );
};

// ASCII Cow component
export const CowSay = ({ message }: { message: string }) => {
  const bubbleLength = Math.max(message.length + 4, 20);
  const topBorder = ' ' + '_'.repeat(bubbleLength);
  const bottomBorder = ' ' + '-'.repeat(bubbleLength);
  
  return (
    <div className="font-mono text-sm whitespace-pre">
      {topBorder}
      <br />
      {'< ' + message.padEnd(bubbleLength - 4) + ' >'}
      <br />
      {bottomBorder}
      <br />
      {'        \\   ^__^'}
      <br />
      {'         \\  (oo)\\_______'}
      <br />
      {'            (__)\\       )\\/\\'}
      <br />
      {'                ||----w |'}
      <br />
      {'                ||     ||'}
    </div>
  );
};

// Train animation component
export const TrainAnimation = () => {
  return (
    <div className="train-animation h-20 overflow-hidden relative bg-black text-white font-mono">
      <div className="absolute whitespace-nowrap animate-bounce" style={{ animationDuration: '2s' }}>
        <pre className="text-xs">
{`                 (  ) (@@) ( )  (@)  ()    @@    O     @     O     @      O
                (@@@)
            (    )
          (@@@@)

        (   )
    ====        ________                ___________
_D _|  |_______/        \\__I_I_____===__|_________|
 |(_)---  |   H\\________/ |   |        =|___ ___|   _________________
 /     |  |   H  |  |     |   |         ||_| |_||   _|               |
|      |  |   H  |__--------------------| [___] |   ||               |
| ________|___H__/__|_____/[][]~\\_______|       |   ||               |
|/ |   |-----------I_____I [][] []  D   |=======|____|_______________|__
__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__|_______________| __
 |/-=|___|=    ||    ||    ||    |_____/~\\___/          |_D__D__D_|   |_`}
        </pre>
      </div>
    </div>
  );
};

// Hacking simulation component
export const HackingSimulation = () => {
  const hackingSteps = [
    'Initializing neural network...',
    'Bypassing firewall...',
    'Decrypting mainframe...',
    'Accessing database...',
    'Downloading confidential files...',
    'Covering tracks...',
    'Mission accomplished!'
  ];

  return (
    <div className="hacking-sim space-y-2 font-mono text-sm">
      {hackingSteps.map((step, index) => (
        <div 
          key={index} 
          className="flex items-center space-x-2"
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <span className="text-green-400">[{index + 1}/7]</span>
          <span className="text-green-300">{step}</span>
          <span className="text-green-500 animate-pulse">{'█'.repeat(Math.floor((index + 1) * 10 / 7))}</span>
        </div>
      ))}
      <div className="mt-4 text-red-400 animate-pulse">
        ⚠️  Just kidding! This is a harmless animation 😄
      </div>
    </div>
  );
};

// Fortune quotes
export const getRandomFortune = (): string => {
  const fortunes = [
    "The best way to predict the future is to implement it. - Alan Kay",
    "Code is like humor. When you have to explain it, it's bad. - Cory House",
    "First, solve the problem. Then, write the code. - John Johnson",
    "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
    "In order to be irreplaceable, one must always be different. - Coco Chanel",
    "Java is to JavaScript what car is to Carpet. - Chris Heilmann",
    "The most important property of a program is whether it accomplishes the intention of its user. - C.A.R. Hoare",
    "Walking on water and developing software from a specification are easy if both are frozen. - Edward V. Berard",
    "It's not a bug – it's an undocumented feature. - Anonymous",
    "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. - Antoine de Saint-Exupery",
    "The trouble with programmers is that you can never tell what a programmer is doing until it's too late. - Seymour Cray",
    "Measuring programming progress by lines of code is like measuring aircraft building progress by weight. - Bill Gates",
    "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning. - Rick Cook",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - Martin Golding",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler"
  ];
  
  return fortunes[Math.floor(Math.random() * fortunes.length)];
};
