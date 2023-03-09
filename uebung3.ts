

function greetEveryone(greeting: string, participants: string[]): string {
    let message = ""; 
    participants.forEach((participant) => {
      message += greeting + " " + participant + "\n";
    });
    return message;
  }
  
  let welcomeText: string = "Willkommen im TypeScript-Kurs";
  
  let participants: string[] = ["Lars", "Sophie", "Ahmed", "Marzio", "Brigitte"];

 let blacklist: string[] = ["Sofia", "Jens", "Humpty", "Dumpty", "Ahmed", "Marzio"]
  
//   console.log(greetEveryone(welcomeText, participants));
// console.log(blacklist);  

  export {};


function addToParticipants(name: string, participants: string[]):string[] {
    participants.push(name);
    return participants;
  }
  
  function removeFromParticipants(name: string, participants: string[]):string[] {
    const index: number = participants.indexOf(name);
    if (index > -1) {
      participants.splice(index, 1);
    }
    return participants;
  }
  
  participants = addToParticipants("Chad", participants);
  
  console.log(greetEveryone("Hi", participants));
  
  participants = removeFromParticipants("Marzio", participants);
  
  console.log(greetEveryone("Hi", participants));

  console.log(blacklist)
 
  
  export {};