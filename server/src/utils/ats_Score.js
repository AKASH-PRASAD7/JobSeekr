const matchScore = (jobDesc, resume) => {
  let score = 0;

  // Tokenize strings
  const jobTokens = jobDesc.split(" ");
  const resumeTokens = resume.split(" ");

  // Find intersection of keywords
  const intersect = jobTokens.filter((token) => resumeTokens.includes(token));

  // Calculate score
  if (intersect.length === 0) {
    score = 1;
  } else if (intersect.length < 3) {
    score = 3;
  } else if (intersect.length >= 3 && intersect.length < 5) {
    score = 5;
  } else {
    score = 10;
  }

  return score;
};

module.exports = matchScore;

// Usage
//   const jobDesc = "Seeking programmer with 5 years of Node.js experience";
//   const resume = "Experienced programmer with 5 years building web apps in Node.js";

//   const matchScore = matchScore(jobDesc, resume); // 10
