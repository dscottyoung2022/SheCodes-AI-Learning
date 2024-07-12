function showAnswer(response) {
  console.log(response);
  console.log(response.data.answer);
  alert(response.data.answer);
}

let apiKey = "06a75966f48t8e1bb0f5829fc38o234b";
let context = "be polite and provide a very short answer";
let prompt = "when was the first AI created?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);
