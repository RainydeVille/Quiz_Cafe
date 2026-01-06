import emblem from "./assets/hogwartsemblem.png";

export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // score tracker
    const scores = {
      gryffindor: 0,
      slytherin: 0,
      ravenclaw: 0,
      hufflepuff: 0,
    };

    const formData = new FormData(event.target);

    let totalAnswers = 0;

    // loop through questions
    for (let i = 1; i <= 10; i++) {
      const answer = formData.get(`q${i}`);
      if (answer) {
        scores[answer]++;
        totalAnswers++;
      }
    }

    // no answers selected
    if (totalAnswers === 0) {
      alert("The Hat has spoken... You belong to NOWHERE — answer at least one question to be sorted! 🪄");
      return;
    }

    // determine top house
    let topHouse = null;
    let maxScore = -1;

    for (const house in scores) {
      if (scores[house] > maxScore) {
        maxScore = scores[house];
        topHouse = house;
      }
    }

    const pretty = topHouse.charAt(0).toUpperCase() + topHouse.slice(1);

    alert(`The Hat has spoken... You belong to ${pretty.toUpperCase()}! 🪄`);
  };

  return (
    <form id="sortingHatQuiz" onSubmit={handleSubmit}>
      <h1>Hogwarts House Sorting Quiz</h1>
      <img id="emblem" src={emblem} alt="Hogwarts emblem" />

      <fieldset>
        <legend>Pick words to live by:</legend>
        <label>
          <input type="radio" name="q1" value="hufflepuff" />
          You fuck with my friends, you fuck with me.
        </label>
        <br />
        <label>
          <input type="radio" name="q1" value="slytherin" />
          Hold my beer, I have some shady stuff to do.
        </label>
        <br />
        <label>
          <input type="radio" name="q1" value="ravenclaw" />
          Sleep is for the weak. I can figure this out.
        </label>
        <br />
        <label>
          <input type="radio" name="q1" value="gryffindor" />
          Do it for the plot *wink*.
        </label>
      </fieldset>

      <br />

      <fieldset>
        <legend>There's a situation at Hogwarts. In what position are you?</legend>
        <label>
          <input type="radio" name="q2" value="ravenclaw" />
          You are staying out of the situation.
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="hufflepuff" />
          You are emotional help of those affected by the situation.
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="gryffindor" />
          You are dealing with the situation.
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="slytherin" />
          You are the reason the situation happened.
        </label>
      </fieldset>

      <br />

      <fieldset>
        <legend>Why did you end up in the hospital wing?</legend>
        <label>
          <input type="radio" name="q3" value="gryffindor" />I was in a competition with my mate to see which one can walk the wall higher using spell
          that sticks your feet to the surface.
        </label>
        <br />
        <label>
          <input type="radio" name="q3" value="slytherin" />I tried to hex Peeves. No, I am not telling you why.
        </label>
        <br />
        <label>
          <input type="radio" name="q3" value="ravenclaw" />I was reading my book. I swear that staircase change came out of nowhere.
        </label>
        <br />
        <label>
          <input type="radio" name="q3" value="hufflepuff" />I tried to pet Mrs. Norris.
        </label>
      </fieldset>

      <br />

      <fieldset>
        <legend>What challenge are you participating in?</legend>
        <label>
          <input type="radio" name="q4" value="gryffindor" />
          Grab a leaf from a Whomping Willow.
        </label>
        <br />
        <label>
          <input type="radio" name="q4" value="ravenclaw" />
          Get a certain book from a certain place. I need to quote what's written on page 86 line 14 word for word.
        </label>
        <br />
        <label>
          <input type="radio" name="q4" value="hufflepuff" />
          Slip a kind note without notice. We have point system of difficulty for every house.
        </label>
        <br />
        <label>
          <input type="radio" name="q4" value="slytherin" />
          Drink every time Draco says POTTAH.
        </label>
      </fieldset>

      <br />

      <fieldset>
        <legend>You are waiting for exam results. Your reaction:</legend>
        <label>
          <input type="radio" name="q5" value="ravenclaw" />
          We are hosting a meet up in our common room about the exam's questions.
        </label>
        <br />
        <label>
          <input type="radio" name="q5" value="slytherin" />
          Not to brag but I won the best cheating tactics award today.
        </label>
        <br />
        <label>
          <input type="radio" name="q5" value="gryffindor" />I mean... it is what it is.
        </label>
        <br />
        <label>
          <input type="radio" name="q5" value="hufflepuff" />I did the best I could do. We are having tea and cookies in the common room btw.
        </label>
      </fieldset>

      <br />

      <fieldset>
        <legend>There's this person you really like. How do you act around them?</legend>
        <label>
          <input type="radio" name="q6" value="gryffindor" />
          Um... lean on the wall with one shoulder and try to look cool?
        </label>
        <br />
        <label>
          <input type="radio" name="q6" value="hufflepuff" />I hug them longer than I should ^_^
        </label>
        <br />
        <label>
          <input type="radio" name="q6" value="ravenclaw" />
          Every time they ask for help I help...
        </label>
        <br />
        <label>
          <input type="radio" name="q6" value="slytherin" />
          Defend them behind their backs from everything.
        </label>
      </fieldset>

      <br />

      <fieldset>
        <legend>Pick one:</legend>
        <label>
          <input type="radio" name="q7" value="gryffindor" />
          Sometimes you're a stubborn piece of shit.
        </label>
        <br />
        <label>
          <input type="radio" name="q7" value="slytherin" />
          You're a snob who secretly likes romantic comedies.
        </label>
        <br />
        <label>
          <input type="radio" name="q7" value="ravenclaw" />
          You're a nerd. A. Humongous. Nerd.
        </label>
        <br />
        <label>
          <input type="radio" name="q7" value="hufflepuff" />
          You can breed a devil in a suitcase and call it Bob.
        </label>
      </fieldset>

      <br />

      <fieldset>
        <legend>French have given us many good things:</legend>
        <label>
          <input type="radio" name="q8" value="ravenclaw" />
          Croissants and café au lait.
        </label>
        <br />
        <label>
          <input type="radio" name="q8" value="gryffindor" />
          French toast.
        </label>
        <br />
        <label>
          <input type="radio" name="q8" value="hufflepuff" />
          French fries.
        </label>
        <br />
        <label>
          <input type="radio" name="q8" value="slytherin" />
          The guillotine.
        </label>
      </fieldset>

      <br />

      <fieldset>
        <legend>Someone falls from the stairs:</legend>
        <label>
          <input type="radio" name="q9" value="slytherin" />
          *laugh* idiot.
        </label>
        <br />
        <label>
          <input type="radio" name="q9" value="gryffindor" />
          ooouuuch. I felt that.
        </label>
        <br />
        <label>
          <input type="radio" name="q9" value="hufflepuff" />
          Oh no! Are you alright?!
        </label>
        <br />
        <label>
          <input type="radio" name="q9" value="ravenclaw" />
          Was in my Paracosm and didn't even hear it.
        </label>
      </fieldset>

      <br />

      <fieldset>
        <legend>Pick a style:</legend>
        <label>
          <input type="radio" name="q10" value="hufflepuff" />
          Cottagecore.
        </label>
        <br />
        <label>
          <input type="radio" name="q10" value="gryffindor" />
          Grunge.
        </label>
        <br />
        <label>
          <input type="radio" name="q10" value="slytherin" />
          Dark Academia.
        </label>
        <br />
        <label>
          <input type="radio" name="q10" value="ravenclaw" />
          Light Academia.
        </label>
      </fieldset>

      <br />

      <button type="submit">Sort me!</button>
    </form>
  );
}
