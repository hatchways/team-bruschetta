const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const imageUpload = require("../../controllers/imageUpload");
const imgUploadMiddleware = require("../../middleware/imageUpload");

describe("imageUpload controller", () => {
  let req, res;
  // Sinon stubs are not working as expected - it's something related to
  // exported functions - will look into it in a future PR
  beforeEach("create sinon sandbox", () => {
    sinon.stub(imgUploadMiddleware, "uploadToCloudinary").returns(
      Promise.resolve({
        secure_url: "https://somesecure-imageurl.com/something.jpg",
      })
    );

    sinon
      .stub(imgUploadMiddleware, "saveProfilePicUrlToDb")
      .returns(Promise.resolve({}));

    res.send = sinon.spy();
  });

  afterEach("restore the sandbox", () => {
    sinon.stub().restore();
  });

  describe("it should upload the image succesfully and save the url in the DB", async () => {
    let req = {
      body: {
        data: "some base64image url",
        user: {
          email: "some@somewhere.com",
        },
      },
    };

    await imageUpload.uploadProfilePic(req, res);
    expect(res.send.calledOnce).to.be.true;
  });
});
