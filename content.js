console.log('Your Lecture extension is working!')

function randomChoice(list) {
  if(list.length == 0) return('')
  return(list[Math.round(Math.random()*(list.length-1))])
}

const pages = [
  {
    "url": 'github.com',
    "lectures": [
      "Why are you wasting your life reading README.mb files?",
      "What a git; they're using github again.",
      "Too many buttons, it'll fry your brains out!"
    ]
  },
  {
    "url": "reddit.com",
    "lectures": [
      "Most of the information on reddit is negative or pointless. You rarely learn something and normally just consume other people's opinions.",
      "People spend hours of their life screaming at people on reddit. Do you really want to be on this platform?",
      "I've gonna admit, while I was writing this, looking at github, I accedentaly scrolled on it for 15 minutes. I saw some funny things, but social media can be very bad for your mental health. Close the tab buddy."
    ]
  },
  {
    "url": "facebook.com",
    "lectures": [
      "You might think you're just catching up with people, but most of Facebook is just <b>noise</b>, <b>arguments</b>, <b>gossip</b> or things you don't really even care about.",
      "Do you relly care about how many likes you get?",
      "Fun fact: Facebook doesn't have as many pictures of faces as you might think. Touch grass."
    ]
  },
  {
    "url": "instagram.com",
    "lectures": [
      "People are awlays comparing themselves on instagram. It's really not healthy. Touch grass.",
      "People only post the best parts of their lives on the gram. Go talk to people irl.",
      "Those likes don't mean much. Touch grass",
      "Go take a hike. Have you seen those national parks? Instagram doesn't matter, there's nature in the world!"
    ]
  },
  {
    "url": "web.archive.org",
    "lectures": [
      "Wow I didn't think you were that old. Look at them, staring back at their childhood.",
      "Stop looking at the past, think about the future!"
    ]
  },
  {
    "url": "mail.google.com",
    "lectures": [
      "Why do you have so many emails?",
      "What are you, famous? You have way to many emails. Go do something more productive."
    ]
  },
  {
    "url": "wikipedia.org",
    "lectures": [
      "Go read a book."
    ]
  },
  {
    "url": "youtube.com",
    "lectures": [
      "STOP WATCHING SKIBIDI TOILET!",
      "Be more productive. Get off Youtube. Do it."
    ]
  },
  {
    "url": "netflix.com",
    "lectures": [
      "Continue Watching? No, don't.",
      "Go touch grass.",
      "You've seen this show 5 times allready."
    ]
  },
  {
    "url": "yahoo.com",
    "lectures": [
      "Don't tell me you have a yahoo email address. That's unaceptable.",
      "Yahoo! That's the average sound when someone closes yahoo and their computer and then takes a walk. Outside."
    ]
  },
  {
    "url": "openai.com",
    "lectures": [
      "ChatGPT isn't real. It just guesses the next word. Go make a real freind.",
      "You really think ChatGPT can answer better than a book?",
      "The end is near.",
      "What is real? How do you define 'real'? If you're talking about what you can feel, what you can smell, what you can taste and see, then 'real' is simply electrical signals interpreted by your brain.",
      "I know what you're thinking, 'cause right now I'm thinking the same thing. Actually, I've meen think it ever since I got here: Why oh why didn't I take the BLUE pill?"
    ]
  },
  {
    "url": "amazon.com",
    "lectures": [
      "STOP INPULSE BUYING!",
      "Stop being lazy, go to a real store!"
    ]
  },
  {
    "url": "craigslist.org",
    "lectures": [
      "STOP INPULSE BUYING!",
      "At least go to a garage sale in real life!"
    ]
  },
  {
    "url": "amazon.com",
    "lectures": [
      "STOP INPULSE BUYING!",
      "Stop being lazy, go to a real store!"
    ]
  }
]

let lecture = []

pages.forEach((e) => {
  if(document.location.host.includes(e.url)) {
    e.lectures.forEach((l) => {
      lecture.push(l)
    })
  }
})

lecture = randomChoice(lecture)

class Div {
  constructor() {
    this.titles  = [
      "We've talked about this a million times already!",
      "Why do I even have to say it again!?!",
      "You know exatly what you're supposed to do!",
      "I expected better from you!",
      "You are no user of mine!",
      "I'm putting my foot down!", 
      "It's about time that I teach you a lesson.",
      "How many times do we need to go over this before it actually sticks?",
      "Honestly, do you think I enjoy repeating myself over and over?",
      "Why is it that every time I turn around, you're wasting your time on the internet?",
      "Is it really that difficult to follow one simple instruction?",
      "I don't understand how you can walk past this mess and not notice it.",
      "It's almost like you're trying to set a record for how long you can procrastinate.",
      "We shouldn't have to talk about this every single day; it's getting ridiculous.",
      "Do you think I like spending all my time lecturing you?",
      "I've lost count of how many times I've asked you to take care of this.",
      "Do you realize how frustrating it is to keep having the same conversation?",
      "This isn't new information, so why does it feel like I'm constantly reminding you?",
      "I just don't understand why simple tasks are treated like they're impossible.",
      "You keep promising to do better, but I'm still waiting to see any improvment.",
      "Do I have to write it down and post it on every page for you to remember?",
      "At this point, I'm not sure if you're ignoring me or just forgetting everything."
    ]

    this.box = document.createElement('div')
    this.box.classList.add("lecturebox")

    this.title = document.createElement('h1')

    this.icon = document.createElement('img')
    this.icon.src = chrome.runtime.getURL('icon.png')

    this.title.innerText = randomChoice(this.titles)

    this.mesg = document.createElement('p')
    this.mesg.innerHTML = lecture

    this.close = document.createElement('button')
    this.close.innerText = "Ignore life adivce"
    this.close.addEventListener('click', close)
  }
  display() {
    if(lecture.length > 0) {
      let style = document.createElement('link')
      style.rel = "stylesheet"
      style.href = chrome.runtime.getURL('content.css')
      document.head.appendChild(style)

      let target = document.createElement('base')
      target.target = "_blank"
      document.head.appendChild(target)

      this.title.prepend(this.icon)

      this.box.appendChild(this.title)
      this.box.appendChild(this.mesg)
      this.box.appendChild(this.close)
      document.body.appendChild(this.box)
    }
  }
}

let div = new Div()
window.addEventListener("load", () => {
  div.display()
  console.log(div)
})

function close() {
  div.box.remove()
}