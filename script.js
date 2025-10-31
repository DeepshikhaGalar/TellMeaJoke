let jokes = [` What does a storm cloud wear under his raincoat? Thunderwear."`, `

    what do kids play when their mom is using the phone ? Bored games`, `

   What do you call an ant who fights crime? A vigilANTe!`, `

 Why are snails slow? Because theyre carrying a house on their back.`, `


 What is the smartest insect? A spelling bee!`, `

 What is fast, loud and crunchy? A rocket chip.`, `

 How does the ocean say hi? It waves!`, `

 What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.`, `

 Why did the teddy bear say no to dessert? Because she was stuffed.`, `

 Why did the soccer player take so long to eat dinner? Because he thought he couldn’t use his hands.`, `

Name the kind of tree you can hold in your hand? A palm tree!`, `

 What do birds give out on Halloween? Tweets.`, `

 What has ears but cannot hear? A cornfield.`, `

 What’s a cat’s favorite dessert? A bowl full of mice-cream.`, `


 Where did the music teacher leave her keys? In the piano!`, `

 What did the policeman say to his hungry stomach? “Freeze. You’re under a vest.”`, `

 What did the left eye say to the right eye? Between us, something smells! `, `

 What do you call a guy who’s really loud? Mike. `, `

 Why do birds fly south in the winter? It’s faster than walking!`, `

 What did the lava say to his girlfriend? “I lava you!” `, `

 Why did the student eat his homework? Because the teacher told him it was a piece of cake. `, `

"What did Yoda say when he saw himself in 4k? HDMI.`, `

 Which superhero hits home runs? Batman! `, `

 What’s Thanos’ favorite app on his phone? Snapchat. `, `
 
 Did you hear about the coin factory that closed? It doesn't make any cents.`, `
 
 A man walks into a library and asks where the books on paranoia are. The librarian replies, “Look over your shoulder.”`, `
 
 Why is Peter Pan always flying? Because he Neverlands.`, `
 
 What kind of bagels do pilots eat? Plain.`, `
 
 What did the duck say to the waiter after dinner? Just put it on my bill.`, `

 What do you call bears without ears? B.`, `
 
 What happened to the cat that ate a ball of yarn? She had mittens.`, `
 
 Why did the socks break up? They weren't a good match.`, `
 
 What did the cop says to his belly button? “You're under a vest!”`, `
 
 What's the best way to learn how to make ice cream? Go to sundae school.`, `
 
 What did the nose say to the finger? “Stop picking on me!”`, `
 Why did the photo go to jail? It was framed.`, `
 What do you call a crocodile wearing a vest? An investi-gator.`, `
 Why are elevator jokes so good? They're funny on many levels.`, `
 Why was the lettuce embarrassed? It saw the salad dressing.`, `

 Did you hear about the rowboat that sank? It was a total oar-deal.`, `
 'Why do dragons nap during the day? So they can fight knights.`, `
 What's a cat's best subject in school? Hisss-tory.`, `
 Why do nurses use red color crayons? So they can draw blood.`, `
 Someone asked me if I got a haircut. I said, “No, I got them all cut.”`, `

 Why didn't the chef season the chicken? He didn't have enough thyme.`, `
 Did you hear about the girl who got fired from the calendar factory? She took a day off.`, `
 Why don't physicists trust atoms? Because they make up everything.`, `
 What's the best way to catch a fish? Ask someone to throw it to you.`, `
 When is a door not a door? When it's ajar.`, `

 I couldn't figure out why the baseball kept getting larger and larger. Then it hit me.`, `
 What do computers eat for lunch? Micro-chips`, `
 What's the hottest part of any room? The corner, because it's always 90 degrees.`, `
 How many dance instructors does it take to change a lightbulb? Five ... six ... seven ... eight!`, `
 Why does a chicken coop only have two doors? If it had four it would be a sedan.`, `
 
 Why do sweaters stick together? Because they're close-knit.`, `
 Did you hear about the octopus that held up a convenience store? It was an armed-robbery.`, `
 Two fish are in a tank. One turns to the other and says, “Any idea how to drive this thing?”`, `
 Why do ducks have tails? To hide their butt-quacks.`, `
 Did you about the stolen dog collar? Police are looking for leads.`, `
 
 I'm wasn't a fan of facial hair, but eventually it grew on me.`, `
 Have you ever played quiet tennis? It's the same as regular tennis, but without the racket.`, `
 What did the mummy say after getting detention? “This sphinx!”`, `
 I used to be addicted to the Hokey Pokey, but then I turned myself around.`, `
 Two guys walked into a bar. The third one ducked.`, `
 
 Did you hear about the guy giving away dead batteries? They were free of charge.`, `
 What do lawyers wear under their pants? Briefs.`, `
 Did you hear about the equestrian that got laryngitis? Now she's a hoarse whisperer.`, `
 Why did the invisible man quit his job? He couldn't see himself doing it.`, `
 There are three kinds of people in the world. Those who can do math and those who can't.`, `

 Sandy’s mum has four kids; North, West, East. What is the name of the fourth child? Sandy, obviously!  `];




let currentIndex = 0;
function printOneJoke() {
    const jokebox =
        document.getElementById("jokebox")
    let i = 0;
    for (const joke of jokes) {
        if (i === currentIndex) {
            jokebox.innerText = joke; 
            break; 
        }
        i++;
    }
      currentIndex++;

     
      if (currentIndex >= jokes.length) {
        currentIndex=0;
    }
    }

