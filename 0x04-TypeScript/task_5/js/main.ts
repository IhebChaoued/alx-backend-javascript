interface MajorCredits {
  credits: number;
  _brand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  _brand: "MinorCredits";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "MajorCredits"
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "MinorCredits"
  };
}

const subject1: MajorCredits = { credits: 3, _brand: "MajorCredits" };
const subject2: MajorCredits = { credits: 4, _brand: "MajorCredits" };

const majorResult = sumMajorCredits(subject1, subject2);
console.log("Sum of Major Credits:", majorResult.credits);

const subject3: MinorCredits = { credits: 2, _brand: "MinorCredits" };
const subject4: MinorCredits = { credits: 1, _brand: "MinorCredits" };

const minorResult = sumMinorCredits(subject3, subject4);
console.log("Sum of Minor Credits:", minorResult.credits);
