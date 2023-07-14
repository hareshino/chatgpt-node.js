const { Configuration, OpenAIApi } = require("openai");
const readline = require('readline');


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//入力受けとり
const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readInterface.question("入力してください >",
      inputString=>{
          readInterface.close();
          console.log( `入力された文字：${inputString }`);
(async() => {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: inputString }],
  });
  console.log(completion.data.choices[0].message.content);
})();

});
