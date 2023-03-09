 
  let welcomeText: string = "Willkommen im TypeScript-Kurs";
  
  let participants: string[] = ["Lars", "Sophie", "Ahmed", "Marzio", "Brigitte"];

 let blacklist: string[] = ["Sofia", "Jens", "Humpty", "Dumpty", "Ahmed", "Marzio"]

function greetEveryone(greeting: string, participants: string[]): string {
    let message:string = ""; 
    participants.forEach((participant) => {
      if(!blacklist.includes(participant))
      //sagt: wenn negativ blacklist inkl. perticipant -> führe aus, wenn ein Inhalt der participant nicht auch in blacklist ist.
      {message += greeting + " " + participant + "\n";}
    });
    return message;
  }
 
  
  console.log(greetEveryone(welcomeText, participants));
  
  export {};


// Ursprünglicher Code der für diese Aufgabe korrigiert werden musste:
// function greetEveryone(greeting: number, participants: string[]): boolean {
//   let message = "";
//   participants.forEach((participant) => {
//     message += greeting + " " + participant + "\n";
//   });
//   return message;
// }

// let welcomeText: string = "Willkommen im TypeScript-Kurs";

// let participants: number[] = ["Lars", "Sophie", "Ahmed", "Marzio", "Brigitte"];

// console.log(greetEveryone(welcomeText, participants));

// export {};