module.exports.handler = async (event) => {
  console.log(JSON.stringify(event));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from Step Functions!',
      event
    }),
  };
};
