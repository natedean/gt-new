// util
const transformQuestionsWithAverages = averages =>
  // we get back an object with avg answer stats, but need to also include question attributes
   averages.map(avg => ({ ...avg, ...questions.find(q => q.id === avg.questionID) }));

module.exports = {
  transformQuestionsWithAverages
};
