const AWS = require("aws-sdk");
const s3 = new AWS.S3();

module.exports.save = (name, data) => {
  return new Promise((resolve, reject) => {
    let uploadParams = {
      Bucket: "pizzalvr",
      Key: `pizzas/${name}.png`,
      Body: Buffer.from(data, "base64"),
      ContentEncoding: "base64",
      ContentType: "image/png",
    };
    s3.putObject(uploadParams, (err, data) => {
      if (err) reject(err);
      console.log(data);
      resolve(`//pizzalvr.s3-us-west-1.amazonaws.com/${uploadParams.Key}`);
    });
  });
};
